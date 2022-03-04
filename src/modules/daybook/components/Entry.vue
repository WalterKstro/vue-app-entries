<template>
  <div class="card mb-2" @click="gotoEntry">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text m-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p class="card-text text-end"><small class="text-muted">3/03/2022</small></p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoEntry(){
      this.$router.push({ name: 'entry', params: { id: 5 } })
    }
  },
}
</script>
<style lang="scss" scoped>
.card{
  &:hover{
    background-color: #f5f5f5;
    cursor: pointer;
  }
}
</style>
