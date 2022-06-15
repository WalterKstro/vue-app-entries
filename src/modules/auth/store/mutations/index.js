export default {
    LOGIN_USER(state, payload) {
        const { user, idToken, refreshToken, status } = payload;
        
        state.user = user;
        state.token = idToken;
        state.refreshToken = refreshToken;
        state.status = status;

        sessionStorage.setItem('userAuthenticated', JSON.stringify( payload ));
        
    },
    SET_ERRORS(state, payload) { 
        state.status = payload;
    },
    LOGOUT_USER(state) {
        state.user = null;
        state.token = null;
        state.refreshToken = null;
        state.status = { code: 202, message: 'processing' };

        sessionStorage.removeItem('userAuthenticated');
    }
}