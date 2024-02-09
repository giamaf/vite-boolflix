<script>
import axios from 'axios';
import { store } from './assets/data/store';
import { items, genres } from './assets/data/index';
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
export default {
  // Javascript Logic
  name: 'Boolfix',

  data: () => ({
    store,
    items,
    genres,
    liveText: '',
  }),

  components: { AppHeader, AppMain },

  methods: {
    // Funzione per montare l'url API
    fetchItemsApi(endpoint, collection) {

      // Destructuring dell' oggetto "items", importato da Index.js
      const { baseUri, moviesEndpoint, seriesEndpoint, apiKey, langIta, langEng } = items;

      // Oggetto che passo come secondo parametro al GET della chiamata API
      // Lo utilizzo per sfruttare la funzionalità di montaggio automatica di axios
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

    fetchGenApi(endpoint, collection) {
      // Destructuring dell' oggetto "genres", importato da Index.js
      const { baseGenUri, moviesGenEndpoint, seriesGenEndpoint, apiKey, langGenIta, langGenEng } = genres;

      // Oggetto che passo come secondo parametro al GET della chiamata API
      // Lo utilizzo per sfruttare la funzionalità di montaggio automatica di axios
      const params = {
        language: langGenIta,
        api_key: apiKey,
      }
      axios.get(`${baseGenUri}${endpoint}`, { params })
        .then(res => {
          genres[collection] = res.data.genres;
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

      this.fetchItemsApi(items.moviesEndpoint, 'movies');
      this.fetchItemsApi(items.seriesEndpoint, 'series');
    },

    // Funzione per monitorare live il testo della searchbar
    watchLiveText(text) {
      this.liveText = text
    },

  },
  created() {
    this.fetchGenApi(genres.moviesGenEndpoint, 'movies');
    this.fetchGenApi(genres.seriesGenEndpoint, 'series');
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
