const apiKey = '95c1c036557c10b399227d01c2792073'

const items = {
    baseUri: 'https://api.themoviedb.org/3',
    moviesEndpoint: '/search/movie',
    seriesEndpoint: '/search/tv',
    apiKey,
    langIta: 'it-IT',
    langEng: 'en-US',
}

const poster = {
    baseUrl: 'https://image.tmdb.org/t/p/',
    dimension: 'original',
    standardImage: 'https://static.vecteezy.com/ti/vettori-gratis/p1/4141669-nessuna-foto-o-immagine-vuota-icona-caricamento-immagini-o-mancante-immagine-segno-immagine-non-disponibile-o-immagine-in-arrivo-segno-semplice-natura-silhouette-in-frame-illustrazione-vettore-isolato-vettoriale.jpg'
}

const genresApi = {
    baseGenUri: 'https://api.themoviedb.org/3',
    moviesGenEndpoint: '/genre/movie/list',
    seriesGenEndpoint: '/genre/tv/list',
    apiKey,
    langGenIta: 'it',
    langGenEng: 'en',
}

export { items, poster, genresApi };