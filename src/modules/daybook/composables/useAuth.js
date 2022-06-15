import { useStore } from "vuex"

const useAuth = () => {
    const { getters, commit } = useStore();

    const totalEntries = () => {
        return getters["storeDayBook/getCounterTotal"];
    }

    const currentUser = () => {
        return getters["auth/getUser"];
    }

    const logout = () => {
        commit("auth/LOGOUT_USER");
        commit("storeDayBook/CLEAR_ENTRIES");
    }

    return {
        currentUser,
        logout,
        totalEntries
    };
}

export default useAuth;