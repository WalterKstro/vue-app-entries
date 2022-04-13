import { instanceAsset } from '../../../api/index.js'

export default async ( file ) => {
    try {

        const formData = new FormData();
        formData.append( 'file', file );
        formData.append( 'upload_preset', 'daybook-vue' );

        const { data } = await instanceAsset.post( '', formData );
        return data.secure_url;

    } catch (error) {
        console.log( error )
    }
}