import { useStore } from "vuex";

const useAuth = () => {
    const { getters, actions, state, dispatch } = useStore();

    const registerUser = async user  => {
        await dispatch("auth/asyncRegisterUser", user);

        return getters["auth/isAuthenticated"];
    }

    const loginUser = async user => {
        await dispatch("auth/asyncLoginUser", user);
        
        return getters["auth/isAuthenticated"];
    }

    const checkAuthenticated = async () => {
        await dispatch("auth/asyncCheckAuthentication");

        return getters["auth/isAuthenticated"];
    }





    return { 
        checkAuthenticated,
        loginUser, 
        registerUser
    };
}

export default useAuth;