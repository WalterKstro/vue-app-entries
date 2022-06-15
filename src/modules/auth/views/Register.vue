<template>
    <div class="row">
        <div class="col-12">
            <h1 class="text-center text-white">Crear cuenta</h1>
        </div>
    </div>
    <form class="row" @submit.prevent="handlerSubmit">
        <div class="col-12">
            <div class="mb-3">
                <label for="username" class="form-label text-white">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Peter Smith"
                    v-model="objectUser.username">
            </div>

            <div class="mb-3">
                <label for="email" class="form-label text-white">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com"
                    v-model="objectUser.email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label text-white">Password</label>
                <input type="password" class="form-control" id="password" placeholder="********"
                    v-model="objectUser.password">
            </div>
            <div class="mb-5 d-grid">
                <button type="submit" class="btn btn-success">Crear cuenta</button>
            </div>
        </div>
    </form>
    <div class="row">
        <div class="col-12">
            <p class="text-center text-white">
                Ya tienes cuenta? <router-link :to="{ name: 'login' }" class="text-success fw-bold">Iniciar sesión
                </router-link>
            </p>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import useAuth from '../composables/useAuth';
import Swal from 'sweetalert2'
import { registered, invalidRegistered } from '../utils/optionsSweetAlert';
import { useRouter } from 'vue-router';

const objectUser = ref({
    username: '',
    email: '',
    password: '',
});
const { push } = useRouter();

const { registerUser } = useAuth();

const handlerSubmit = async () => {
    const { status, ...rest } = await registerUser(objectUser.value);
    if (status) {
        await Swal.fire(registered);
        push({ name: 'entry-no-selected' });
    } else {
        await Swal.fire({ ...invalidRegistered, text: rest.message });
    }
};

</script>

<style lang="scss">
@import 'sweetalert2/src/sweetalert2.scss';
</style>