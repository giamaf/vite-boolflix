<script>
import { store } from './assets/data/store.js'
import AppSearch from './AppSearch.vue';

export default {
    // Javascript Logic
    name: 'AppHeader',
    data: () => ({
        store
    }),

    components: { AppSearch },

    emits: ['search-item', 'live-text']

};
</script>
 
<template>
    <nav>
        <div class="nav container-fluid">
            <div class="left">
                <ul>
                    <li class="me-3"><a href="#"><i class="fa-brands fa-github"></i></a></li>
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
                        <AppSearch button-label="Cerca" placeholder="Cerca" @send-form="$emit('search-item', $event)"
                            @live-text="$emit('live-text', $event)" />
                    </li>
                    <li><a href="#">Bambini</a></li>
                    <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                </ul>

            </div>
        </div>
    </nav>
</template>
 
<style lang="scss" scoped>
/* Style */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 0.7rem;
    background-color: black;

    ul {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    a {
        color: white;
    }
}
</style>