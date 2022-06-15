<template>
  <div class="no__selected-entry h-100 d-flex">
    <h1 class="m-auto text-muted fs-3">No has seleccionado una entrada</h1>
    <ButtonAction @eventEmitedFromButtonActions="gotoCreateNewEntry"/>
  </div>  
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'NoEntrySelected',
  components: {
    ButtonAction: defineAsyncComponent(() => import('../components/ButtonActions.vue')),
  },
  methods: {
    gotoCreateNewEntry(){
      this.$router.push({name: 'entry', params: {id: 'new'}})
    },
  }
}
</script>
