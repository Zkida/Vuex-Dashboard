<template>
  <div>
    <div>
      <div>
        <div><h2>Iniciar Sesión</h2></div>
        <form action="" @submit.prevent="login">
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              autocomplete="username"
              v-model.trim="$v.form.email.$model"
            />
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
              autocomplete="current-password"
              v-model.trim="$v.form.password.$model"
            />
            <div
              class="error"
              v-if="$v.form.password.$invalid && submitStatus == 'ERROR'"
            >
              La contraseña require por lo menos 6 letras.
            </div>
          </div>
          <div v-if="errors">
            {{ errors }}
          </div>
          <div>
            <button :isLoading="isSubmitted" type="submit">Entrar</button>
          </div>
          <div>
            <a href="#">Olvidó la Contraseña?</a>
          </div>
        </form>
      </div>
    </div>
    <div>
      <c-link as="nuxt-link" color="brand.primary" to="/register"
        >Crear una cuenta nueva</c-link
      >
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  auth: 'guest',
  head: {
    title: 'MarketColombia - Entrar',
  },
  data() {
    return {
      user: null,
      errors: null,
      form: {
        email: '',
        password: '',
      },
      submitStatus: null,
      isSubmitted: false,
    }
  },
  validations: {
    form: {
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
    async login() {
      this.user = this.$auth.user
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.isSubmitted = true
        this.$axios.get('/sanctum/csrf-cookie').then((response) => {
          this.$auth
            .loginWith('local', {
              data: this.form,
            })
            .then(() => this.$router.replace({ name: 'cards-dashboard' }))
            .catch((e) => {
              if (e.response.data.message == 'Unauthenticated.') {
                this.errors = 'Password o contraseña incorrectos'
              }
              this.isSubmitted = false
            })
        })
      }
    },
  },
}
</script>
