<script>
import { store } from './assets/data/store';
import { poster } from './assets/data/index';
import AppGridItem from './AppGridItem.vue';

export default {
    // Javascript Logic
    name: 'AppMain',

    data: () => ({
        store,
        poster,
        welcomeText: 'Cerca i tuoi films e serie preferite'
    }),

    components: { AppGridItem },

    emits: ['search-item']

};
</script>
 
<template>
    <main class="container-fluid p-0 ps-4">
        <section v-if="!store.movies.length || !store.series.length" class="welcome">
            <h1>{{ welcomeText }}</h1>
        </section>
        <div v-else>
            <section class="movies">
                <h2>Movies</h2>
                <AppGridItem @search-item="$emit('search-item')" :collection="store.movies" :poster="poster"
                    notImage="Copertina al momento non disponibile" />
            </section>
            <section class="series">
                <h2>Series</h2>
                <AppGridItem @search-item="$emit('search-item')" :collection="store.series" :poster="poster"
                    notImage="Copertina al momento non disponibile" />
            </section>
        </div>

    </main>
</template>
     
<style>
/* Style */
main {
    section {
        margin: 0 0 30px 0;
    }

    h2 {
        color: whitesmoke;
    }

    .welcome {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
    }
}
</style>
