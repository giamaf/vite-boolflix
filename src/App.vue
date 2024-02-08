<script>
import axios from 'axios';
import { store } from './assets/data/store';
import { api } from './assets/data/index';
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
export default {
  // Javascript Logic
  name: 'Boolfix',

  data: () => ({
    store,
    api,
    liveText: ''
  }),

  components: { AppHeader, AppMain },

  methods: {
    // Funzione per montare l'url API
    getApiUrl() {

    },

    // Funzione per caricare i dati nello store
    fetchData(endpoint) {
      axios.get(endpoint).then(res => {
        store.movies = res.data.results;
      }).catch((err) => {
        console.error(err)
      })
    },

    // Funzione per monitorare live il testo della searchbar
    watchLiveText(text) {
      this.liveText = text
    },

    // Funzione per fare qualcosa all'invio del form (chiamata API)
    searchMovies() {
      const { baseUri, moviesEndpoint, seriesEndpoint, apiKey, langIta, langEng } = api

      // Oggetto che passiamo come secondo parametro al GET della chiamata API
      const params = {
        query: this.liveText,
        api_key: apiKey,
        language: langIta
      }

      axios.get(`${baseUri}${moviesEndpoint}`, { params })
        .then(res => {
          store.movies = res.data.results;
        }).catch((err) => {
          console.error(err)
        })
    }
  }

}
</script>
 
<template>
  <!-- Template -->
  <AppHeader @search-item="searchMovies" @live-text="watchLiveText" />
  <AppMain @search-movies="searchMovies" @search-series="" />
</template>
 
<style lang="scss" >
/* Style */
@use './assets/scss/style.scss'
</style>
