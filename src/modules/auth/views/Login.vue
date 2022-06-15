<template>
    <div class="row">
        <div class="col-12">
            <h1 class="text-center text-white">Inicia sesión</h1>
        </div>
    </div>
    <form class="row" @submit.prevent="handleSubmit">
        <div class="col-12">
            <div class="mb-3">
                <label for="email" class="form-label text-white">Email address</label>
                <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    placeholder="name@example.com"
                    v-model="user.email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label text-white">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    placeholder="********"
                    v-model="user.password">
            </div>
            <div class="mb-5 d-grid">
                <button type="submit" class="btn btn-success">Iniciar sesión</button>
            </div>
        </div>
    </form>
    <div class="row">
        <div class="col-12">
            <p class="text-center text-white">
                No tienes cuenta? <router-link :to="{ name: 'register' }" class="text-success fw-bold">Crear cuenta
                </router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useAuth from '../composables/useAuth';
import { invalidLogin, validLogin } from '../utils/optionsSweetAlert';
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router';
const user = ref({
    email: '',
    password: '',
});
const { loginUser, checkAuthenticated } = useAuth();
const { push } = useRouter();

const handleSubmit = async () => { 
    const {status, ...rest} = await loginUser(user.value);
    if (status) {
        await Swal.fire(validLogin);
        push({ name: 'entry-no-selected' });
    } else {
        await Swal.fire(invalidLogin);
    }
};

</script>

<style lang="scss">
@import 'sweetalert2/src/sweetalert2.scss';
</style>