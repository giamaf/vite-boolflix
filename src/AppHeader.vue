<script>
import { store } from './assets/data/store.js';
import AppSearch from './AppSearch.vue';
import AppFilterSelect from './AppFilterSelect.vue';

export default {
    // Javascript Logic
    name: 'AppHeader',
    data: () => ({
        store
    }),

    components: { AppSearch, AppFilterSelect },

    props: {
        genres: Object
    },

    emits: ['search-item', 'live-text']

};
</script>
 
<template>
    <header>
        <nav>
            <div class="nav container-fluid">
                <div class="left">
                    <ul>
                        <li class="me-3"><a href="#"><img :src="store.mainLogo" alt=""></a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serie TV</a></li>
                        <li><a href="#">Film</a></li>
                        <li><a href="#">Nuovi e popolari</a></li>
                        <li><a href="#">La mia lista</a></li>
                        <li><a href="#">Sfoglia per la lingua</a></li>
                    </ul>
                </div>
                <div class="right">
                    <ul>
                        <li>
                            <AppFilterSelect placeholder="Filtra per genere" :genres="genres" />
                        </li>
                        <li>
                            <AppSearch button-label="Cerca" placeholder="Titoli, persone, generi"
                                @send-form="$emit('search-item', $event)" @live-text="$emit('live-text', $event)" />
                        </li>
                        <li><a href="#">Bambini</a></li>
                        <li><a href="#"><i class="fa-regular fa-bell"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
</template>
 
<style lang="scss" scoped>
/* Style */
header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    font-size: 0.7rem;
    background-color: black;

    ul {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            max-width: 100px;
        }

    }

    .fa-bell {
        font-size: 1rem;
    }

    a {
        color: whitesmoke;
    }
}
</style>