<template>
  <vs-row>
    <vs-col offset="2" w="8">
      <div class="mk-card">
        <div class="mk-card-inner">
          <form-wizard
            color="#195CFF"
            title="Nueva tarjeta digital"
            subtitle="Por favor completa el siguiente formulario"
            back-button-text="Regresar"
            next-button-text="Siguiente"
            finish-button-text="Finalizar"
          >
            <tab-content
              :before-change="() => validateStep('step1')"
              title="Datos generales"
            >
              <app-form-step-one ref="step1" />
            </tab-content>
            <tab-content title="Información adicional">
              <app-form-step-two />
            </tab-content>
            <tab-content title="Guardar tarjeta">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapGetters } from 'vuex'
import AppFormStepOne from '@/components/form/AppFormStepOne'
//local registration
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import AppFormStepTwo from '~/components/form/AppFormStepTwo.vue'

export default {
  layout: 'main',
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  //component code
  components: {
    FormWizard,
    TabContent,
    AppFormStepOne,
    AppFormStepTwo,
  },
  methods: {
    validateStep(name) {
      var refToValidate = this.$refs[name]
      return refToValidate.validate()
    },
  },
}
</script>
