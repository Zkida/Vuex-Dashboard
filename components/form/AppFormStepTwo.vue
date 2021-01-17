<template>
  <div>
    <vs-row>
      <vs-col w="12">
        <div class="form-row">
          <div class="form-group">
            <label for="company_name">Nombre de la compañia</label>
            <input
              class="form-control"
              type="text"
              name="company_name"
              id="company_name"
              v-model.trim="$v.inputData.company_name.$model"
            />
            <div
              class="error"
              v-if="$v.inputData.company_name.$invalid && !isValid"
            >
              Teléfono es un campo requerido.
            </div>
          </div>
          <div class="form-group">
            <label for="job_title">Título</label>
            <input
              class="form-control"
              type="text"
              name="job_title"
              id="job_title"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="address">Dirección</label>
          <input class="form-control" type="text" name="address" id="address" />
        </div>
        <div class="form-group">
          <label for="website">Sitio web</label>
          <input class="form-control" type="text" name="website" id="website" />
        </div>
        <div class="form-group">
          <label for="summary">Información adicional</label>
          <textarea
            class="form-control"
            name="summary"
            id="summary"
            style="height: 80px"
          />
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
  props: {
    inputData: Object,
  },
  data() {
    return {
      isValid: true,
    }
  },
  validations: {
    inputData: {
      company_name: {
        required,
      },
    },
  },
  methods: {
    validate() {
      this.$v.inputData.$touch()
      this.isValid = !this.$v.inputData.$invalid
      return this.isValid
    },
  },
}
</script>
