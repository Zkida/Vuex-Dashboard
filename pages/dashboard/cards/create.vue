<template>
  <vs-row>
    <vs-col w="7">
      <el-collapse>
        <el-collapse-item title="Logo y diseño" name="1" class="mk-card">
          <div class="mk-card-inner">
            <div class="form-group">
              <label for="name">Nombre de tu tarjeta virtual</label>
              <input
                v-model="inputData.name"
                class="form-control"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div class="design-group">
              <div class="color-group">
                <label>Branding</label>
                <div class="color-content">
                  <span>Color principal</span>
                  <el-color-picker
                    v-model="inputData.header_background"
                  ></el-color-picker>
                </div>
                <div class="color-content">
                  <span>Color texto</span>
                  <el-color-picker
                    v-model="inputData.header_text"
                  ></el-color-picker>
                </div>
              </div>
              <div class="file-group">
                <label for="logo">Logo</label>
                <el-upload
                  id="logo"
                  ref="upload"
                  class="avatar-uploader"
                  action="#"
                  :show-file-list="false"
                  :on-success="handleAvatarUpload"
                  :auto-upload="false"
                  :on-change="beforeAvatarUpload"
                >
                  <img
                    v-if="inputData.image_url"
                    :src="inputData.image_url"
                    class="avatar"
                  />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Tu información" name="2" class="mk-card">
          <div class="mk-card-inner">
            <app-form-step-one :inputData.sync="inputData" ref="step1" />
            <app-form-step-two :inputData.sync="inputData" ref="step2" />
          </div>
        </el-collapse-item>
      </el-collapse>
      <a href="#" @click="test()">TEST</a>
      <a href="#" @click="validateStep('step2')">VALIDATE</a>
    </vs-col>
    <vs-col w="5">
      <app-card-preview :inputData.sync="inputData" />
    </vs-col>
  </vs-row>
</template>

<script>
import { Collapse, CollapseItem } from 'element-ui'
import { mapGetters } from 'vuex'
import AppFormStepTwo from '~/components/form/AppFormStepTwo.vue'
import AppFormStepOne from '~/components/form/AppFormStepOne.vue'
import AppCardPreview from '~/components/AppCardPreview.vue'

export default {
  layout: 'main',
  data() {
    return {
      dialogVisible: false,
      disabled: false,
      inputData: {
        image_url: '',
        header_background: '#312E81',
        header_text: '#818CF8',
        name: '',
        first_name: '',
        last_name: '',
        number: '',
        email: '',
        company_name: '',
      },
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  //component code
  components: {
    AppFormStepOne,
    AppFormStepTwo,
    Collapse,
    CollapseItem,
  },
  methods: {
    test() {
      console.log('lil')
      this.$refs.upload.submit()
    },
    validateStep(name) {
      var refToValidate = this.$refs[name]
      return refToValidate.validate()
    },
    handleRemove(file) {
      console.log(file)
    },
    handleAvatarUpload(res, file) {
      this.inputData.image_url = URL.createObjectURL(file.raw)
      this.dialogVisible = true

      var formData = new FormData()
      formData.append('file', file.raw)
      this.$axios
        .post('/api/file/store', formData)
        .then((response) => {
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e.response)
        })
    },
    beforeAvatarUpload(file) {
      console.log(file.type)
      const isJPG =
        file.raw.type === 'image/jpeg' || file.raw.type === 'image/png'
      const isLt2M = file.raw.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('Los formatos permitidos son JPG o PNG!')
        return
      }
      if (!isLt2M) {
        this.$message.error('La imagen no debe exceder los 2MB!')
        return
      }
      this.inputData.image_url = URL.createObjectURL(file.raw)
      return isJPG && isLt2M
    },
    handleDownload(file) {
      console.log(file)
    },
  },
}
</script>
