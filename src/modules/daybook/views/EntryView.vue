<template>
  <div class="row align-items-center mb-3">
    <div class="col-12 col-md-6">
      <p class="card-text fs-5"><small class="text-muted">3/03/2022</small></p>
    </div>
    <div class="col-12 col-md-6 d-flex justify-content-between justify-content-md-end">
      <button class="btn btn-dark text-light">Borrar entrada <i class="bi bi-file-earmark-x"></i></button>
      <button class="btn btn-success text-light ms-md-3">Subir imagen <i class="bi bi-file-earmark-image"></i></button>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <textarea name="content" id="content" cols="30" rows="10" class="form-control"></textarea>
    </div>
  </div>
  <ButtonAction icon="bi-file-check"/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    ButtonAction: defineAsyncComponent(() => import('../components/ButtonActions.vue')),
  }
}
</script>

<style>

</style>