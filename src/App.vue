<script>
import axios from 'axios';
import { store, genres } from './assets/data/store';
import { items, genresApi } from './assets/data/index';
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
export default {
  // Javascript Logic
  name: 'Boolfix',

  data: () => ({
    store,
    items,
    genresApi,
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
      const { baseGenUri, moviesGenEndpoint, seriesGenEndpoint, apiKey, langGenIta, langGenEng } = genresApi;

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

      // Chiamata API con i dati richiesti dall'utente
      // Primo parametro endpoint, secondo parametro collection (film e serie)
      this.fetchItemsApi(items.moviesEndpoint, 'movies');
      this.fetchItemsApi(items.seriesEndpoint, 'series');
    },

    // Funzione per monitorare live il testo della searchbar
    watchLiveText(text) {
      this.liveText = text
    },

  },
  //   const items = [
  //   { id: 1, name: "Object 1" },
  //   { id: 2, name: "Object 2" },
  //   { id: 1, name: "Object 1" },
  //   { id: 3, name: "Object 3" }
  // ];

  // const unique = [];

  // for (const item of items) {
  //   const found = unique.find((element) => element.id === item.id);

  //   if (!found) {
  //     unique.push(item);
  //   }
  // }

  computed: {
    mergedGenres() {
      const { moviesGen, seriesGen } = genres;
      const arrayGenres = [...moviesGen, ...seriesGen];
      const mergedGenres = arrayGenres.reduce((result, current) => {
        // Verifico se l'oggetto corrente ha un id unico rispetto agli altri oggetti
        const isUnique = result.every(item => item.id !== current.id);
        // Se l'oggetto corrente ha un id unico, lo aggiungo nell'accumulatore
        if (isUnique) {
          result.push(current);
        }
        return result;
      }, []);
      return mergedGenres
    },
  },

  created() {
    this.fetchGenApi(genresApi.moviesGenEndpoint, 'moviesGen');
    this.fetchGenApi(genresApi.seriesGenEndpoint, 'seriesGen');
  }
}
</script>
 
<template>
  <!-- Template -->
  <AppHeader @search-item="searchItems" @live-text="watchLiveText" :genres="mergedGenres" />
  <AppMain @search-item="searchItems" />
</template>
 
<style lang="scss" >
/* Style */
@use './assets/scss/style.scss';
</style>
