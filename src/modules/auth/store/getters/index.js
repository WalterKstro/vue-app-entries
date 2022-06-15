export default {
    isAuthenticated(state) {
        return (state.status.code == 200) ? 
        { status : true } : 
        { status: false, message: state.status.message };
    },
    getUser(state) {
        return (state.user != null) ? state.user : '';
    }
}