<template>
  <c-flex w="100%" class="footer-wrapper">
    <footer
      v-chakra
      display="flex"
      alignItems="center"
      justify-content="space-between"
      class="site-footer container"
    >
      <div class="footer-widgets-wrapper">
        <div class="footer-widget footer-logo">
          <app-logo-footer />
          <p v-chakra mt="4">Tarjetas virtuales gratis para tu negocio.</p>
        </div>
        <div class="footer-widget">
          <h6>Producto</h6>
          <div class="footer-links">
            <a class="footer-link" href="#">Link 1</a>
            <a class="footer-link" href="#">Link 1</a>
            <a class="footer-link" href="#">Link 1</a>
            <a class="footer-link" href="#">Link 1</a>
          </div>
        </div>
        <div class="footer-widget">
          <h6>Legal</h6>
          <div class="footer-links">
            <a class="footer-link" href="#">Link 1</a>
            <a class="footer-link" href="#">Link 1</a>
            <a class="footer-link" href="#">Link 1</a>
            <a class="footer-link" href="#">Link 1</a>
          </div>
        </div>
        <div class="footer-widget">
          <h6>Contácto</h6>
          <div class="footer-links">
            <a class="footer-link" href="#">Link 1</a>
            <a class="footer-link" href="#">Link 1</a>
            <a class="footer-link" href="#">Link 1</a>
            <a class="footer-link" href="#">Link 1</a>
          </div>
        </div>
      </div>
    </footer>
  </c-flex>
</template>

<script>
import AppLogo from '@/components/AppLogoFooter'
export default {}
</script>
