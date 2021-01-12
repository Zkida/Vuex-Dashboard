<template>
  <div>
    <vs-row>
      <vs-col w="12">
        <div class="form-group">
          <label for="logo">Logo o imagen de perfil</label>
          <app-logo-loader />
        </div>
        <div class="form-group">
          <label for="name">Nombre de tu tarjeta virtual</label>
          <input
            v-model.trim="$v.form.name.$model"
            class="form-control"
            type="text"
            name="name"
            id="name"
          />
          <div class="error" v-if="$v.form.name.$invalid && !isValid">
            Nombre de la tarjeta es requerido.
          </div>
        </div>
        <div class="form-group">
          <label for="first_name">Nombres</label>
          <input
            v-model.trim="$v.form.first_name.$model"
            class="form-control"
            type="text"
            name="first_name"
            id="first_name"
          />
          <div class="error" v-if="$v.form.first_name.$invalid && !isValid">
            Nombres es un campo requerido.
          </div>
        </div>
        <div class="form-group">
          <label for="last_name">Apellidos</label>
          <input
            v-model.trim="$v.form.last_name.$model"
            class="form-control"
            type="text"
            name="last_name"
            id="last_name"
          />
          <div class="error" v-if="$v.form.last_name.$invalid && !isValid">
            Apellidos es un campo requerido.
          </div>
        </div>
        <div class="form-group">
          <label for="number">Número de teléfono</label>
          <input
            v-mask="'###-###-####'"
            v-model.trim="$v.form.number.$model"
            class="form-control"
            type="text"
            name="number"
            id="number"
          />
          <div class="error" v-if="$v.form.number.$invalid && !isValid">
            Teléfono es un campo requerido.
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model.trim="$v.form.email.$model"
            class="form-control"
            type="email"
            name="email"
            id="email"
          />
          <div class="error" v-if="$v.form.email.$invalid && !isValid">
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
  data() {
    return {
      isValid: true,
      form: {
        name: '',
        first_name: '',
        last_name: '',
        number: '',
        email: '',
      },
    }
  },
  validations: {
    form: {
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
      this.$v.form.$touch()
      this.isValid = !this.$v.form.$invalid
      this.$emit('on-validate', this.$data, this.isValid)
      return this.isValid
    },
  },
}
</script>
