<template>
  <aside class="entries__list h-100 d-flex flex-column">
    <form class="my-2">
      <input type="text" placeholder="Buscar entrada" class="form-control">
    </form>
    <div class="list__entries overflow-scroll">
      <Entry v-for="entry in 50" :key="entry"/>
    </div>
  </aside>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue')),
  },
}
</script>

<style lang="scss" scoped>
.list__entries{
  height: calc(100vh - 110px);
}
</style>