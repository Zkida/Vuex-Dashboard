<template>
  <div>
    <vs-row>
      <vs-col w="12">
        <div class="form-group">
          <label for="name">Nombre de tu tarjeta virtual</label>
          <input
            v-model.trim="$v.inputData.name.$model"
            class="form-control"
            type="text"
            name="name"
            id="name"
          />
          <div class="error" v-if="$v.inputData.name.$invalid && !isValid">
            Nombre de la tarjeta es requerido.
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="first_name">Nombres</label>
            <input
              v-model.trim="$v.inputData.first_name.$model"
              class="form-control"
              type="text"
              name="first_name"
              id="first_name"
            />
            <div
              class="error"
              v-if="$v.inputData.first_name.$invalid && !isValid"
            >
              Nombres es un campo requerido.
            </div>
          </div>
          <div class="form-group">
            <label for="last_name">Apellidos</label>
            <input
              v-model.trim="$v.inputData.last_name.$model"
              class="form-control"
              type="text"
              name="last_name"
              id="last_name"
            />
            <div
              class="error"
              v-if="$v.inputData.last_name.$invalid && !isValid"
            >
              Apellidos es un campo requerido.
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="number">Número de teléfono</label>
          <input
            v-mask="'###-###-####'"
            v-model.trim="$v.inputData.number.$model"
            class="form-control"
            type="text"
            name="number"
            id="number"
          />
          <div class="error" v-if="$v.inputData.number.$invalid && !isValid">
            Teléfono es un campo requerido.
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model.trim="$v.inputData.email.$model"
            class="form-control"
            type="email"
            name="email"
            id="email"
          />
          <div class="error" v-if="$v.inputData.email.$invalid && !isValid">
            Por favor usa un email válido.
          </div>
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
      name: {
        required,
      },
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      number: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    validate() {
      this.$v.inputData.$touch()
      this.isValid = !this.$v.inputData.$invalid
      this.$emit('on-validate', this.$data, this.isValid)
      return this.isValid
    },
  },
}
</script>
