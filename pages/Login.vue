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
        <form action="">
          <c-form-control mb="1rem">
            <c-form-label for="email">Email</c-form-label>
            <c-input
              type="email"
              id="email"
              aria-describedby="email-helper-text"
            />
          </c-form-control>
          <c-form-control mb="2rem">
            <c-form-label for="password">Contraseña</c-form-label>
            <c-input
              type="password"
              id="password"
              aria-describedby="password-helper-text"
            />
          </c-form-control>
          <c-form-control>
            <c-button type="submit" width="100%" size="lg"> Entrar </c-button>
          </c-form-control>
          <c-box mt="1rem" textAlign="center">
            <a href="#">Olvidó la Contraseña?</a>
          </c-box>
        </form>
      </c-box>
    </c-box>
    <c-box mt="1rem" textAlign="center">
      <nuxt-link to="/register">Crear una cuenta nueva</nuxt-link>
    </c-box>
  </c-flex>
</template>
