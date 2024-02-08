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
    fetchApi(endpoint, collection) {
      // Oggetto che passiamo come secondo parametro al GET della chiamata API
      const { baseUri, moviesEndpoint, seriesEndpoint, apiKey, langIta, langEng } = api;
      const params = {
        query: this.liveText,
        api_key: apiKey,
        language: langIta
      }

      axios.get(`${baseUri}${endpoint}`, { params })
        .then(res => {
          store[collection] = res.data.results;
        }).catch((err) => {
          console.error(err)
        })
    },

    // Funzione per fare qualcosa all'invio del form (chiamata API)
    searchItems() {
      if (!this.liveText) {
        store.movies = [];
        store.series = [];
        return;
      }

      this.fetchApi(api.moviesEndpoint, 'movies');
      this.fetchApi(api.seriesEndpoint, 'series');
    },


    // Funzione per monitorare live il testo della searchbar
    watchLiveText(text) {
      this.liveText = text
    },

  }

}
</script>
 
<template>
  <!-- Template -->
  <AppHeader @search-item="searchItems" @live-text="watchLiveText" />
  <AppMain @search-item="searchItems" />
</template>
 
<style lang="scss" >
/* Style */
@use './assets/scss/style.scss'
</style>
