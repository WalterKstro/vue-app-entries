<template>
   <router-view></router-view>
</template>

<script setup>
import useAuth from './modules/auth/composables/useAuth';
import { useRouter } from 'vue-router';

const { checkAuthenticated } = useAuth();
const { push} = useRouter();
(async () => {
    const { status } = await checkAuthenticated();

    if(status) {
        push({ name: 'entry-no-selected' });
    }else {
        push({ name: 'login' });
    }

})();

</script>
