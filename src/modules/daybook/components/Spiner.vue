<template>
    <div class="spiner text-center d-flex">
        <div class="spinner-border m-auto text-primary" role="status" style="width: 3rem; height: 3rem;">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    created(){
        this.asyncGetAllEntries()
    },
    methods: {
        ...mapActions('storeDayBook', ['asyncGetAllEntries']),
    }
}
</script>

<style lang="scss" scoped>
.spiner{
    min-height: calc(100vh - 56px);
}
</style>