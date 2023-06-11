console.log('i');

const gif_url = 'api.giphy.com/v1/gifs/random';
const stiker_url = 'api.giphy.com/v1/stickers/random';
const Giphy_API_KEY = 'zBwHSx1aEtpVtQwlJUuSIr5ANbcbJuE0';


const http = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${Giphy_API_KEY}`);

http
    .then( res => res.json() )
    // .then( ({data}) => {console.log(data.images.original.url)}) // desestructuro de data de la data y a partir de hay, en la consola me va saliendo lo que quiero de ahí que ponga: .images.original.url porque lo que quiero es la url por tanto, ya puedo guardar esa dirección en una const
    .then( ({data}) => {
        const {url} = data.images.original;
        console.log(url);
        // Lo grabo en el html
        const img = document.createElement('img');// creo la img en el html
        img.src = url; // le doy el src

        document.body.append(img) // añado la img al body, al html

    }) 
    .catch(console.warn)

export {
    gif_url,
    stiker_url,
    Giphy_API_KEY,
}