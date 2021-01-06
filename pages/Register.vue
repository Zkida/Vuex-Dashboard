<template>
  <c-flex flexDirection="column" mt="5rem">
    <c-box
      mx="auto"
      maxW="460px"
      width="100%"
      border-width="1px"
      rounded="lg"
      overflow="hidden"
      class="shadow-container"
      py="3rem"
      px="6"
    >
      <c-box>
        <div class="login-form-title"><h2>Crear una cuenta nueva</h2></div>

        <form action="" @submit.prevent="submit">
          <c-form-control mb="1rem">
            <c-form-label for="name">Nombre</c-form-label>
            <c-input
              type="text"
              id="name"
              aria-describedby="name-helper-text"
              v-model.trim="$v.form.name.$model"
            />
            <div
              class="error"
              v-if="$v.form.name.$invalid && submitStatus == 'ERROR'"
            >
              Campo nombre es requirido.
            </div>
          </c-form-control>
          <c-form-control mb="1rem">
            <c-form-label for="email">Email</c-form-label>
            <c-input
              type="email"
              id="email"
              autocomplete="username"
              aria-describedby="email-helper-text"
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
          </c-form-control>
          <c-form-control mb="2rem">
            <c-form-label for="password">Contraseña</c-form-label>
            <c-input
              type="password"
              id="password"
              autocomplete="new-password"
              aria-describedby="password-helper-text"
              v-model.trim="$v.form.password.$model"
            />
            <div
              class="error"
              v-if="$v.form.password.$invalid && submitStatus == 'ERROR'"
            >
              La contraseña require por lo menos 6 letras.
            </div>
          </c-form-control>
          <c-form-control>
            <c-button
              :isLoading="isLoading"
              :disabled="isSubmitted"
              type="submit"
              color="gray.600"
              width="100%"
              size="lg"
            >
              Registrarse
            </c-button>
          </c-form-control>
        </form>
      </c-box>
    </c-box>
    <c-box mt="1rem" textAlign="center">
      <c-link as="nuxt-link" color="brand.primary" to="/login"
        >Ya tiene una cuenta?</c-link
      >
    </c-box>
  </c-flex>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
  auth: 'guest',
  data() {
    return {
      isLoading: false,
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
      this.isLoading = true
      this.isSubmitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.isSubmitted = false
      } else {
        await this.$axios.get('/sanctum/csrf-cookie').then((response) => {
          this.$axios
            .post('api/register', this.form)
            .then(() => {
              try {
                this.$auth
                  .loginWith('local', {
                    data: this.form,
                  })
                  .then(() => this.$router.replace({ name: 'cards-dashboard' }))
              } catch (e) {
                this.errors = e.response.data.errors
              }
            })
            .catch((e) => {
              this.errors = e.response.data.errors
            })
        })
        this.isSubmitted = false
      }
      this.isLoading = false
    },
  },
}
</script>
