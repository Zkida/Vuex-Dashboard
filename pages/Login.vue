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
        <div class="login-form-title"><h2>Iniciar Sesión</h2></div>
        <form action="" @submit.prevent="login">
          <c-form-control mb="1rem">
            <c-form-label color="gray.500" for="email">Email</c-form-label>
            <c-input
              type="email"
              id="email"
              aria-describedby="email-helper-text"
              autocomplete="username"
              v-model.trim="$v.form.email.$model"
            />
            <div class="error" v-if="$v.form.email.$invalid && isSubmitted">
              Por favor usa un email válido.
            </div>
          </c-form-control>
          <c-form-control mb="2rem">
            <c-form-label color="gray.500" for="password"
              >Contraseña</c-form-label
            >
            <c-input
              type="password"
              id="password"
              aria-describedby="password-helper-text"
              autocomplete="current-password"
              v-model.trim="$v.form.password.$model"
            />
            <div class="error" v-if="$v.form.password.$invalid && isSubmitted">
              La contraseña require por lo menos 6 letras.
            </div>
          </c-form-control>
          <c-form-control>
            <c-button type="submit" color="gray.600" width="100%" size="lg">
              Entrar
            </c-button>
          </c-form-control>
          <c-box mt="1rem" textAlign="center">
            <a href="#">Olvidó la Contraseña?</a>
          </c-box>
        </form>
      </c-box>
    </c-box>
    <c-box mt="1rem" textAlign="center">
      <c-link as="nuxt-link" color="brand.primary" to="/register"
        >Crear una cuenta nueva</c-link
      >
    </c-box>
  </c-flex>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  head: {
    title: 'MarketColombia - Entrar',
  },
  data() {
    return {
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
    ...mapActions({
      loginAction: 'auth/login',
    }),
    login() {
      this.isSubmitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.loginAction(this.form)
      }
    },
  },
}
</script>
