<script>
import { store } from './assets/data/store';
import { poster } from './assets/data/index';
import AppGridItem from './AppGridItem.vue';

export default {
    // Javascript Logic
    name: 'AppMain',

    data: () => ({
        store,
        poster
    }),

    components: { AppGridItem },

    emits: ['search-item']

};
</script>
 
<template>
    <main>
        <div class="container-fluid">
            <section>
                <h2>Movies</h2>
                <AppGridItem @search-item="$emit('search-item')" :collection="store.movies" :poster="poster" />
            </section>
            <section>
                <h2>Series</h2>
                <AppGridItem @search-item="$emit('search-item')" :collection="store.series" :poster="poster" />
            </section>
        </div>
    </main>
</template>
     
<style>
/* Style */
</style>
