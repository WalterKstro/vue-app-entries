import axios from 'axios';

const auth =  axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAULnp8k8agJumxBnQpoWbl1L2U3diFuWI'
    },
    headers: {
        'Content-Type': 'application/json'
    }
});

export {
    auth
}
