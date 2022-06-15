import axios from 'axios'

const instanceAxios = axios.create({
    baseURL: 'https://vue-entries-default-rtdb.firebaseio.com/',
});

// interceptor for request authentication
instanceAxios.interceptors.request.use( config => {
    const { idToken } = JSON.parse(sessionStorage.getItem('userAuthenticated'));
    config.params = {
        auth: idToken,
    }
    return config;
} );

export const instanceAsset = axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/dwgtayvuu/image/upload',
});

export default instanceAxios