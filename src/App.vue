<script>
import axios from 'axios';
import { store } from './assets/data/store';
import { api } from './assets/data/index'
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
export default {
  // Javascript Logic
  name: 'Boolfix',

  data: () => ({
    store,
  }),

  components: { AppHeader, AppMain },

  methods: {
    searchItem(text) {
      console.log('Hai scritto', text)
    }
  }

}
</script>
 
<template>
  <!-- Template -->
  <AppHeader @search-item="searchItem" />
  <AppMain />
</template>
 
<style lang="scss" >
/* Style */
@use './assets/scss/style.scss'
</style>
