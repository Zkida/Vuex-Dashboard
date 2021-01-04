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
        <form action="">
          <c-form-control mb="1rem">
            <c-form-label for="name">Nombre</c-form-label>
            <c-input
              type="text"
              id="name"
              aria-describedby="name-helper-text"
            />
          </c-form-control>
          <c-form-control mb="1rem">
            <c-form-label for="email">Email</c-form-label>
            <c-input
              type="email"
              id="email"
              autocomplete="username"
              aria-describedby="email-helper-text"
            />
          </c-form-control>
          <c-form-control mb="2rem">
            <c-form-label for="password">Contraseña</c-form-label>
            <c-input
              type="password"
              id="password"
              autocomplete="current-password"
              aria-describedby="password-helper-text"
            />
          </c-form-control>
          <c-form-control>
            <c-button type="submit" color="gray.600" width="100%" size="lg">
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
