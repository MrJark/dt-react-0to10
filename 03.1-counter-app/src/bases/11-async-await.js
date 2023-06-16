
export const getImagen = async() => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        // para react no nos intersa esto
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

        return url;

    } catch (error) {
        console.log(error)
        return 'No se encontro la URL'
    }
}
