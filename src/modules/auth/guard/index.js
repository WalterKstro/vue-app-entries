import store from "../../../store";

const guard = async (to, from, next) => {
    await store.dispatch("auth/asyncCheckAuthentication");
    const { status } = store.getters["auth/isAuthenticated"];

    if (status) {
        next();
    }else {
        next({ name: 'login' });
    }

}

export default guard;