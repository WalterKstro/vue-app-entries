<template>
  <aside class="entries__list h-100 d-flex flex-column">
    <form class="my-2">
      <input type="search" placeholder="Buscar entrada" class="form-control" v-model="searchByThisTerm">
    </form>
    <div class="list__entries overflow-auto">
      <Entry v-for="entry in filteredArrayEntriesByField(searchByThisTerm)" :key="entry.id" :entry="entry"/>
    </div>
  </aside>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      searchByThisTerm: '',
    }
  },
  computed: {
    ...mapGetters('storeDayBook',['filteredArrayEntriesByField'])
  },
  components: {
    Entry: defineAsyncComponent(() => import('./Entry.vue')),
  }
}
</script>

<style lang="scss" scoped>
.list__entries{
  height: calc(100vh - 110px);
}
</style>