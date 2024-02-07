<script>
import axios from 'axios';
import { store } from './assets/data/store';
const endpoint = 'https://api.themoviedb.org/3/search/movie';
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
export default {
  // Javascript Logic
  name: 'Boolfix',

  data: () => ({
    store
  }),

  components: {
    AppHeader,
    AppMain
  },

  methods: {
    fetchMovies(endpoint) {
      axios.get(endpoint).then(res => {
        //Inserisco la risposta dell'API nello STORE
        // store.movies = res.data.results;
      })
    }
  }
}
</script>
 
<template>
  <!-- Template -->
  <AppHeader />
  <AppMain />
</template>
 
<style lang="scss">
/* Style */
@use './assets/scss/style.scss'
</style>
