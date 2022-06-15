<template>
    <div class="container-fluid m-0 p-0">
        <div class="row min-vh-100 flex-column justify-content-center w-100">
            <div class="col-12 col-md-4 offset-md-4">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container-fluid {
     background: rgb(21,95,62);
    background: linear-gradient(90deg, rgba(21,95,62,1) 0%, rgba(3,46,52,1) 70%); 
}
</style>