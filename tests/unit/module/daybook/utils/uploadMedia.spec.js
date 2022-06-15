import uploadImage from '../../../../../src/modules/daybook/utils/uploadMedia.js';
import  Axios from 'axios';


describe( 'Pruebas, en el archivo de subida de la imagen', () => {

    test(' Debe de subir la imagen y retornar la url', async () => {
            
        const response = await Axios.get('https://res.cloudinary.com/dwgtayvuu/image/upload/v1648917738/cld-sample.jpg',{
            responseType: 'arraybuffer'
        });
        const file = new File( [ response.data ], 'test.jpg' );
        const url = await uploadImage( file );
        
        expect( url.startsWith( 'https://res.cloudinary.com' ) ).toBeTruthy();
    
    })

})