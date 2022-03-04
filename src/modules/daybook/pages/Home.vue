<template>
  <Navbar/>
  <div class="container">
    <main class="row wrapper__daybook">
      <div class="col-12 col-md-4">
        <EntryesList/>
      </div>
      <div class="col-12 col-md-8 d-flex flex-column justify-content-center">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue"

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryesList: defineAsyncComponent(() => import("../components/EntryList.vue")),
  },
}
</script>

<style lang="scss" scoped>
.wrapper__daybook{
  height: calc(100vh - 72px);
}
</style>