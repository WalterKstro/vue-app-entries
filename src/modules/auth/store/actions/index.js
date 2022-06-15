import { auth } from "../../../../api/auth";

export default {
    async asyncRegisterUser({ commit }, { username, ...user }) {
        try {
            const { data, status } = await auth.post(':signUp',
                {
                    ...user,
                    returnSecureToken: true
                })
            const { idToken, refreshToken } = data;

            await auth.post(':update', {
                displayName: username,
                idToken,
                returnSecureToken: true
            });

            commit('LOGIN_USER', {
                idToken,
                refreshToken,
                status: { code: status, message: 'success' },
                user: { username, email: user.email }
            })

        } catch ({ response }) {
            const { code, message } = response.data.error
            commit('SET_ERRORS', { code, message })
        }
    },
    async asyncLoginUser({ commit }, user) {
        try {
            const { data, status } = await auth.post(':signInWithPassword', {
                ...user,
                returnSecureToken: true
            })

            const { idToken, refreshToken, displayName, email } = data;

            commit('LOGIN_USER', {
                idToken,
                refreshToken,
                status: { code: status, message: 'success' },
                user: { username: displayName, email }
            })

        } catch ({ response }) {
            const { code, message } = response.data.error
            commit('SET_ERRORS', { code, message })
        }
    },
    async asyncCheckAuthentication({ commit }) {
        const isAuthenticated = JSON.parse(sessionStorage.getItem('userAuthenticated'));

        if (isAuthenticated) {
            const { idToken, refreshToken, status } = isAuthenticated;
            try {
                const { data } = await auth.post(':lookup', { idToken });
                const [{ displayName, email }] = data.users;
                
                commit('LOGIN_USER', {
                    idToken,
                    refreshToken,
                    status,
                    user: { username: displayName, email }
                })
                
            } catch ({ code=400, message }) {
                commit('SET_ERRORS', { code, message });
            }

        } else {
            commit('LOGOUT_USER');
        }
    }
}