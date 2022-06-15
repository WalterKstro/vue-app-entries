<template>
    <file-pond
            name="filepond"
            ref="pond"
            label-idle="Soltar ó <span class='filepond--label-action'>Buscar</span> imagen"
            accepted-file-types="image/jpeg, image/png"
            @change="selectImage"
    />
</template>

<script>
  import vueFilePond from 'vue-filepond'
  import 'filepond/dist/filepond.min.css'
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
  import uploadMedia from '../utils/uploadMedia.js'

  const FilePond = vueFilePond(
          FilePondPluginFileValidateType,
  )


export default {
    data(){
        return {
            file: null,
        }
    },
    components: {
        FilePond,
    },
    methods: {
        async selectImage(event){
            this.file = event.target.files[0]
            const url = await uploadMedia(this.file)
            this.$emit('select-image', url)
        }
    }
}
</script>