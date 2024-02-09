import { reactive } from "vue";

const store = reactive({
    movies: [],
    series: [],
    mainLogo: 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
});

const genres = reactive({
    moviesGen: [],
    seriesGen: []
})

export { store, genres };