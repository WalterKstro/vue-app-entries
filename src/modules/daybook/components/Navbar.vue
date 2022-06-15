<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{ name: 'entry-no-selected' }"><svg class="logo"
                    viewBox="0 0 128 128" width="24" height="24" data-v-5f26462c="">
                    <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                        data-v-5f26462c=""></path>
                    <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-5f26462c="">
                    </path>
                </svg></router-link>
            <div class="d-flex align-items-md-center">
                <span class="text-white me-3 fw-bold">{{ user.username }}</span>
                <button class="btn btn-success btn-sm position-relative" 
                        type="submit" 
                        @click="logoutUser">
                    <i class="bi bi-box-arrow-right"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info"
                        title="Entradas totales">
                        {{ total }}
                    </span>
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { computed, ref } from 'vue';
import useAuth from '../composables/useAuth';
import { useRouter } from "vue-router";

const { push } = useRouter();
const { totalEntries, currentUser, logout } = useAuth();
const total = computed(() => totalEntries());
const user = computed(() => currentUser());
const logoutUser = () => {
    push({ name: 'login' });
    logout()
};
</script>