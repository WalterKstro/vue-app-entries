export default () => {
    return {
        status: { // processing, success, ERROR
            message: 'processing',
            code: 202
        },
        user: null,
        token: null,
        refreshToken: null,
    }
}