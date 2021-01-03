<template>
  <div class="container">
    <c-flex alignItems="center" class="home-hero">
      <c-flex w="60%" flexDirection="column">
        <h1 v-chakra fontSize="48px" fontWeight="bold" mb="4">
          El mundo esta cambiando. Ofrece una
          <span v-chakra color="brand.primary"
            >nueva experiencia a tus clientes.</span
          >
        </h1>
        <p>
          Súper rápido, fácil y sin contácto. Crea tarjetas virtuales de código
          QR para negocios más seguros y es completamente gratis.
        </p>
        <a href="#" class="primary-button">Crea tu tarjeta virtual</a>
      </c-flex>
    </c-flex>
    <c-flex w="60%" flexDirection="column" class="section">
      <h2 class="title">
        Adiós a las tarjetas físicas, <br />
        <span v-chakra color="brand.primary"
          >hola a las tarjetas virtuales.</span
        >
      </h2>
      <p class="description">
        Tu tarjeta virtual puede ser vista desde cualquier dispositivo y ¡Sin
        descargar ninguna app! Tus clientes acceden instantáneamente a tu
        tarjeta virtual escaneando el código QR desde su celular.
      </p>
      <p>Funciona en:</p>
      <c-flex>
        <div class="platforms-container">
          <div class="platform-item">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21C1 32.0457 9.9543 41 21 41Z"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M29.4803 12.52L25.2403 25.24L12.5203 29.48L16.7603 16.76L29.4803 12.52Z"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div>
              <p>iOS</p>
              <p>Safari</p>
            </div>
          </div>
          <div class="platform-item">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21C1 32.0457 9.9543 41 21 41Z"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21 29C25.4183 29 29 25.4183 29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29Z"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M39.34 13H21"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.89966 9.12012L14.0797 25.0001"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.7598 40.88L27.9198 25"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div>
              <p>Android</p>
              <p>Chrome</p>
            </div>
          </div>
          <div class="platform-item">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 41C32.0457 41 41 32.0457 41 21C41 9.9543 32.0457 1 21 1C9.9543 1 1 9.9543 1 21C1 32.0457 9.9543 41 21 41Z"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M1 21H41"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21 1C26.0026 6.47671 28.8455 13.5841 29 21C28.8455 28.4159 26.0026 35.5233 21 41C15.9974 35.5233 13.1545 28.4159 13 21C13.1545 13.5841 15.9974 6.47671 21 1V1Z"
                stroke="#6877FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <div>
              <p>Todos los navegadores</p>
              <p>Todas las plataformas</p>
            </div>
          </div>
        </div>
      </c-flex>
    </c-flex>
  </div>
</template>

<script lang="js">

export default {
  name: 'App',
}
</script>
