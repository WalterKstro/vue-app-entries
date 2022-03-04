<template>
  <div class="no__selected-entry h-100 d-flex">
    <h1 class="m-auto text-muted fs-3">No has seleccionado una entrada</h1>
    <ButtonAction/>
  </div>  
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    ButtonAction: defineAsyncComponent(() => import('../components/ButtonActions.vue')),
  }
}
</script>
