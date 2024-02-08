<script>
export default {
    // Javascript Logic
    name: 'AppCard',
    props: {
        items: Object
    },
    computed: {
        hasFlag() {
            const flags = ['it', 'en'];
            return flags.includes(this.items.original_language);
        },
        imagePath() {
            const url = new URL(`./assets/img/${this.items.original_language}.png`, import.meta.url);

            return url.href
        }
    }
};
</script>
 
<template>
    <div class="card">
        <ul>
            <li>{{ items.title || items.name }}</li>
            <li>{{ items.original_title || items.original_name }}</li>
            <li>
                <img v-if="hasFlag" :src="imagePath" :alt="items.original_language">
                <span v-else>{{ items.original_language }}</span>

            </li>
            <li>{{ items.vote_average }}</li>
        </ul>
    </div>
</template>
 
<style lang="scss" scoped>
/* Style */
img {
    max-width: 50px;
}
</style>