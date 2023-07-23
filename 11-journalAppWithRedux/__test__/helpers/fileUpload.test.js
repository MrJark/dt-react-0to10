import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dickjzw1u',
    api_key: '996191644657712',
    api_secret: 'b8ZdcISueaj51nYHPSIuS7o54Tg',
    secure: true
});

describe(' Test in fileUpload', () => {

    test('should correct uploaded to claudinery', async() => {
        // para hacer esta prueba necesitas una rul de una imagen
        const imageUrl = 'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80';
        const res = await fetch( imageUrl );
        const blob = await res.blob(); // ojo, aquí no es .json() es .blob() sino te dará error el json por un unexpected token
        const files = new File([blob], 'photo.jpg');

        const url = await fileUpload(files);
        expect( typeof url ).toBe('string');
        // console.log(url);

        const segments = url.split('/'); // con esto lo que haces es dividir la url en segmentos para poder conseguir el id de la imagen de cloudinary, en este caso, es el último segmento pero sin el .jpg
        console.log(segments);
        const imageId = segments[ segments.length - 1 ].replace('.jpg',''); // con esto le quitas el .jpg y te quedas con el id limpio
        // console.log(imageId);

        const cloudRes = await cloudinary.api.delete_resources( [ 'react-journal' + imageId ], {
            resource_type: 'image', // y con esto le dices mas concretamente que el archivo es de tipo image
        } ); // le dices lo que tiene que eliminar en concreto a través del path y del id

        // se elimina la imagen que subes a la hora de hacer el test porqie así evitas que se llene la memoria de cloudinary
    });

    test('should return null', async() => {
        const file = new File([], 'photo.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );
    })

})