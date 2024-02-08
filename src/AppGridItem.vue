<script>
import AppCard from './AppCard.vue';

export default {
    // Javascript Logic
    name: 'AppGridItem',

    components: { AppCard },

    props: {
        collection: Array,
        poster: Object,
    }


};
</script>
 
<template>
    <div class="row">
        <div class="col-auto" v-for="item in collection" :key="item.id">
            <AppCard :items="item" :poster="poster" />
        </div>
    </div>
</template>
 
<style>
/* Style */
.row {
    flex-wrap: nowrap;
    overflow-x: scroll;
}
</style>
 