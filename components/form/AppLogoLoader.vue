<template>
  <client-only>
    <file-pond
      name="file"
      ref="pond"
      class="filepond"
      label-idle="Arrastra el logo aquí..."
      allow-multiple="false"
      allowRevert="false"
      accepted-file-types="image/jpeg, image/png"
      maxFileSize="2MB"
      labelMaxFileSizeExceeded="El archivo pesa demasiado"
      labelMaxFileSize="El tamaño máximo es {filesize}"
      v-bind:server="myServer"
      v-on:addfile="handleFilePondUpload"
    />
  </client-only>
</template>
<script>
export default {
  data: function () {
    return {
      myServer: {
        process: (fieldName, file, metadata, load, error, progress, abort) => {
          console.log(metadata, file)
          var formData = new FormData()
          formData.append('file', file)
          this.$axios
            .post('/api/file/store', formData)
            .then((response) => {
              console.log(response.data)
            })
            .catch((e) => {
              console.log(e.response)
            })
        },
        // server config...
      },
    }
  },
  methods: {
    handleFilePondUpload(error, file) {
      //console.log(file, 'upload')
      if (error) {
        return
      }
      file.setMetadata('fileInfo', {
        name: file.filenameWithoutExtension,
        extension: file.fileExtension,
        size: file.fileSize,
      })
    },
  },
}
</script>
