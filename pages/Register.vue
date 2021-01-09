<template>
  <div>
    <div class="shadow-container">
      <div>
        <div class="login-form-title"><h2>Crear una cuenta nueva</h2></div>

        <form action="" @submit.prevent="submit">
          <div>
            <label for="name">Nombre</label>
            <input type="text" id="name" v-model.trim="$v.form.name.$model" />
            <div
              class="error"
              v-if="$v.form.name.$invalid && submitStatus == 'ERROR'"
            >
              Campo nombre es requirido.
            </div>
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              autocomplete="username"
              v-model.trim="$v.form.email.$model"
            />
            <div v-if="errors" class="error">
              {{ errors.email[0] }}
            </div>
            <div
              class="error"
              v-if="$v.form.email.$invalid && submitStatus == 'ERROR'"
            >
              Por favor usa un email válido.
            </div>
          </div>
          <div>
            <label for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              autocomplete="new-password"
              v-model.trim="$v.form.password.$model"
            />
            <div
              class="error"
              v-if="$v.form.password.$invalid && submitStatus == 'ERROR'"
            >
              La contraseña require por lo menos 6 letras.
            </div>
          </div>
          <div>
            <button
              :isLoading="isSubmitted"
              :disabled="isSubmitted"
              type="submit"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
    <div>
      <c-link as="nuxt-link" color="brand.primary" to="/login"
        >Ya tiene una cuenta?</c-link
      >
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
  auth: 'guest',
  data() {
    return {
      errors: null,
      form: {
        name: '',
        email: '',
        password: '',
      },
      submitStatus: null,
      isSubmitted: false,
    }
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    async submit() {
      this.isSubmitted = true
      this.errors = null
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.isSubmitted = false
      } else {
        await this.$axios.get('/sanctum/csrf-cookie').then((response) => {
          this.$axios
            .post('api/register', this.form)
            .then(() => {
              this.$auth
                .loginWith('local', {
                  data: this.form,
                })
                .then(() => this.$router.replace({ name: 'cards-dashboard' }))
            })
            .catch((e) => {
              this.errors = e.response.data.errors
              this.isSubmitted = false
            })
        })
      }
    },
  },
}
</script>
