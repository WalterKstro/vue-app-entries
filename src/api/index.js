import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'https://vue-entries-default-rtdb.firebaseio.com/',
});

export const instanceAsset = Axios.create({
    baseURL: 'https://api.cloudinary.com/v1_1/dwgtayvuu/image/upload',
});

export default instance