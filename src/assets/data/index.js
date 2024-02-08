const api = {
    baseUri: 'https://api.themoviedb.org/3',
    moviesEndpoint: '/search/movie',
    seriesEndpoint: '/search/tv',
    apiKey: '95c1c036557c10b399227d01c2792073',
    langIta: 'it-IT',
    langEng: 'en-US',
}

const poster = {
    baseUrl: 'https://image.tmdb.org/t/p/',
    dimension: 'w342',
}

export { api, poster };