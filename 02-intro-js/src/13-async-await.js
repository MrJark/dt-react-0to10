// import { Giphy_API_KEY, gif_url } from "./12-http-api"; // me salta el error si lo pongo

console.log('i');

// const getUrlPromise = () => {
//     const promise = new Promise( (resolve, reject) => {
//         resolve('Web: https://mrjark.com')
//     })
//     return promise;
// }

// getUrlPromise()
//     .then(console.log)

// Con los async las promesas se simplifican y es la forma actual de usarlas
// el await permite que las promesas sean síncronas

const getUrl = async () => {

    try {
        const apiKey = 'zBwHSx1aEtpVtQwlJUuSIr5ANbcbJuE0';
        const request = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data = await request.json();

        const {url} = data.data.images.original;
        console.log(url);

        const img = document.createElement('img');// creo la img en el html
        img.src = url; // le doy el src

        document.body.append(img) // añado la img al body, al html
    } catch (err) {
        console.err('Error with API');
    }
};
getUrl();

// Para el manerjo de errores se usa el try y el catch. La parte del try es donde se pone el código que quieres que se ejecute y cunado se de el error, pones lo que quieres que haga en el catch