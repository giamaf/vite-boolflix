<script>
export default {
    // Javascript Logic
    name: 'AppCard',
    props: {
        items: Object,
        poster: Object,
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
            if (!this.items.poster_path) return this.poster.standardImage
            else {
                const cardUrl = new URL(`${this.poster.baseUrl}${this.poster.dimension}${this.items.poster_path}`, import.meta.url);
                return cardUrl.href
            }
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
        <img class="card-image" :src="cardImageUrl" :alt="items.title || items.name">
        <div class="card-body px-1">
            <ul>
                <li class="card-title fw-bold m-0">{{ items.title || items.name }}</li>
                <li class="card-overview">{{ items.overview }}</li>
                <li class="card-text">
                    <img class="flag" v-if="hasFlag" :src="imagePath" :alt="items.original_language">
                    <span v-else>{{ items.original_language }}</span>
                </li>
                <li class="card-text"><i v-for="n in 5" class="fa-star" :class="n <= voteShaped ? 'fas' : 'far'"></i></li>
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
    color: whitesmoke;
    width: 240px;
    position: relative;
    cursor: pointer;

    &:hover .card-image {
        filter: brightness(0.1);
    }

    &:hover .card-body {
        display: inline-block;
    }

    .card-image {
        height: 350px;
        width: 240px;
        border: 1px solid transparent;
        border-radius: 5px;
        object-fit: cover;
    }
}

.card-body {
    font-size: 0.8rem;
    display: none;
    position: absolute;
    max-width: 80%;
    bottom: 0;
    left: 10px;

    .card-overview {
        font-size: 0.4rem;
        font-style: italic;
        border-bottom: 1px solid grey;
        padding: 10px 0;
        filter: brightness(0.5);
    }

    .flag {
        width: 12px;
        height: 7px;
    }

    .fa-star {
        font-size: 0.4rem;
    }
}
</style>