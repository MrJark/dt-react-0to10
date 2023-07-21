



export const fileUpload = async( file ) => { // depende de los archivos que subas
    // los datos siguientes son los que he tenido que poner en Postman y con los cuales me funciona para hacer el upload de los files
    if(!file) throw new Error('File Required');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/react-journal/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file );

    // necesario el trycatch porque puede salir mal la petición
    try {

        const res = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if( !res.ok ) throw new Error('Failed Uploaded'); // si s emuestra este error es porque el archivo no se ha podido subir, al contrario que el catch, que puede ser otro tipo de error como de servidores, etc.
        
        const cloudRes = await res.json();
        // console.log({cloudRes});

        return cloudRes.secure_url; // dentro de la url, cuando subes una imagen, hay varios archivos, quieres el secure_url que es la url de la imagen

    } catch (error) {
        console.log(error);
        throw new Error( error.message )
    }
};