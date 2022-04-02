import { uploadMedia } from '../../../api/index.js'

export default async ( file ) => {
    try {

        const formData = new FormData();
        formData.append( 'file', file );
        formData.append( 'upload_preset', 'daybook-vue' );

        const { data } = await uploadMedia.post( '', formData );
        return data.secure_url;

    } catch (error) {
        console.log( error )
    }
}