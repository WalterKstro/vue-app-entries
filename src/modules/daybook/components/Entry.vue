<template>
  <div class="card mb-2" @click="gotoEntry">
    <div class="card-body">
      <h5 class="card-title">{{entry.title}}</h5>
      <p class="card-text m-0">{{oneStringExtractOfDescription}}</p>
      <p class="card-text text-end"><small class="text-muted">{{entry.date}}</small></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
  methods: {
    gotoEntry(){
      this.$router.push({ name: 'entry', params: { id: this.entry.id } })
    }
  },
  computed: {
    oneStringExtractOfDescription(){
      const arrayOfWordsOfExtract = this.entry.description.split(' ')

      if(arrayOfWordsOfExtract.length > 15) arrayOfWordsOfExtract.length = 15
      
      return arrayOfWordsOfExtract.join(' ').concat('...')
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
