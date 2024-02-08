<script>
export default {
    // Javascript Logic
    name: 'AppCard',
    props: {
        items: Object,
        poster: Object,
        notImage: String
    },
    computed: {

        // Funzione per individuare le bandierine presenti nel nostro DB
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.items.original_language);
        },

        // Funzione per montare l'URL della bandierina
        imagePath() {
            const url = new URL(`./assets/img/${this.items.original_language}.png`, import.meta.url);

            return url.href
        },

        // Funzione per montare l'URL della copertina
        cardImageUrl() {
            const cardUrl = new URL(`${this.poster.baseUrl}${this.poster.dimension}${this.items.poster_path}`, import.meta.url);
            return cardUrl.href
        },

        // Funzione per trasformare il voto in base 5 arrotondato
        voteShaped() {
            const voteRounded = this.items.vote_average / 2;
            return Math.round(voteRounded);
        }
    }
};
</script>
 
<template>
    <div class="card">
        <img :src="cardImageUrl" alt="...">
        <div class="card-body d-none">
            <ul>
                <li class="card-title">{{ items.title || items.name }}</li>
                <li class="card-text">{{ items.original_title || items.original_name }}</li>
                <li class="card-text">
                    <img class="flag" v-if="hasFlag" :src="imagePath" :alt="items.original_language">
                    <span v-else>{{ items.original_language }}</span>
                </li>
                <li class="card-text">{{ voteShaped }}</li>
            </ul>
        </div>
    </div>
</template>
 
<style lang="scss" scoped>
/* Style */
.card {
    padding: 0;
    border: 0;
    background-color: black;

    &:hover {
        cursor: pointer;
        filter: contrast(0.7);
    }

    img {
        width: auto;
        height: 350px;
        border: 1px solid transparent;
        border-radius: 5px;

    }
}

.card-body {
    .flag {
        max-width: 50px;
    }
}
</style>