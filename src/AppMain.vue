<script>
import { store } from './assets/data/store';
import AppGridItem from './AppGridItem.vue';

export default {
    // Javascript Logic
    name: 'AppMain',

    data: () => ({
        store,
    }),

    components: { AppGridItem },

    emits: ['search-movies', 'search-series']

};
</script>
 
<template>
    <main>
        <div class="container-fluid">
            <section>
                <h2>Movies</h2>
                <AppGridItem @search-item="$emit('search-movies')" :collection="store.movies" />
            </section>
            <section>
                <h2>Series</h2>
                <AppGridItem @search-item="$emit('search-series')" :collection="store.series" />
            </section>
        </div>
    </main>
</template>
     
<style>
/* Style */
</style>
