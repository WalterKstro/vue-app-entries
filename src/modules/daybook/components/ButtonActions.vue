<template>
  <button class="btn__float btn btn-success fs-3"
          @click="eventEmited">
        <i class="bi" :class="icon"></i>
    </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'bi-file-earmark-plus',
    },
  },
  methods: {
      eventEmited(){
          this.$emit('eventEmitedFromButtonActions')
      },
  }
}
</script>
<style lang="scss" scoped>
.btn__float{
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}
</style>