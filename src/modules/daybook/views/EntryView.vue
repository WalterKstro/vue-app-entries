<template>
    <Spiner v-if="isLoading"/>
    <template v-else>
        <div class="row align-items-center mb-3">
          <div class="col-12 col-md-6">
            <p class="card-text fs-5">
                <small class="text-muted">{{entry.date}}</small>
            </p>
            </div>
            <div class="col-12 col-md-6 d-flex justify-content-between justify-content-md-end">
            <a :href="entry.url" target="_blank" class="btn btn-dark text-light me-md-2" :class="showOrHiddenButtonDelete">Ver imagen <i class="bi bi-file-earmark-image"></i></a>
            <button 
                class="btn btn-dark text-light" :class="showOrHiddenButtonDelete" @click="deleteCurrentEntry">
                Borrar entrada <i class="bi bi-file-earmark-x"></i>
            </button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
            <input type="text" class="form-control" placeholder="Titulo" v-model="entry.title">
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-12">
            <textarea name="content" id="content" cols="30" rows="10" class="form-control" placeholder="Descripción" v-model="entry.description">
            </textarea>
            </div>
        </div>
        <div class="row">
          <div class="col-12"><FilePond @select-image="setUrlToOrder"/></div>
        </div>
    </template>
    <ButtonAction icon="bi-file-check" @eventEmitedFromButtonActions="updateOrCreateAnEntry"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import {options} from '../utils/index.js'
import { optionDeleteSweetAlert, optionDeletedSweetAlert } from '../utils/optionSweetAlert.js'
import Swal from 'sweetalert2'
export default {
  name: 'EntryView',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: false,
      entry: {},
    }
  },
  created() {
    this.loadEntryOrRedirect()
  },
   beforeRouteUpdate({params}) {
     this.entry = {...this.getOneEntryById(params.id)}
   },
  methods: {
    ...mapActions('storeDayBook',['asyncUpdateEntry','asyncCreateEntry','asyncDeleteEntry']),

    loadEntryOrRedirect(){
      if(this.id == 'new'){
        this.entry = {
          title: '',
          description: '',
          date: new Date().toLocaleDateString('es-ES', options)
        }
      }else {
        const entryObject = this.getOneEntryById(this.id)
        entryObject ? this.entry = {...entryObject} : this.$router.push({name: 'entry-no-selected'})
      }
    },
    async updateOrCreateAnEntry() {
        this.isLoading = true

        if ( this.id === 'new' && !this.isEmptyFieldOfEntry ){
            await this.asyncCreateEntry(this.entry)
        }else if ( !this.isEmptyFieldOfEntry ){
            await this.asyncUpdateEntry(this.entry)
        }
        
        this.$router.push({name: 'entry-no-selected'})
        this.isLoading = false
    },
    async deleteCurrentEntry() {
        const {isConfirmed} = await Swal.fire( optionDeleteSweetAlert )
        if(isConfirmed){
            this.asyncDeleteEntry(this.entry)
            
            Swal.fire( optionDeletedSweetAlert )
            
            this.$router.push({name: 'entry-no-selected'})
        }
    },
    setUrlToOrder(url){
        this.entry = {...this.entry, url}
    },
  },
   computed: {
    ...mapGetters('storeDayBook', ['getOneEntryById']),
    showOrHiddenButtonDelete(){
      return (this.id === 'new') ? 'd-none' : 'd-block'
    },
    isEmptyFieldOfEntry(){
      return (this.entry.title === '' || this.entry.description === '')
    }
  },
  components: {
    ButtonAction: defineAsyncComponent(() => import('../components/ButtonActions.vue')),
    Spiner: defineAsyncComponent(() => import('../components/Spiner.vue')),
    FilePond: defineAsyncComponent(() => import('../components/FilePond.vue')),
  }
}
</script>

<style lang="scss">
@import 'sweetalert2/src/sweetalert2.scss';
</style>
