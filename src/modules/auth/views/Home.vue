<template>
  <h1>Home Sidebar</h1>
  <button class="btn btn-primary" @click="onClick">Primary</button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$router.push({name: 'entry-no-selected'});
    }
  }
}
</script>

<style>

</style>