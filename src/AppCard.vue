<script>
export default {
    // Javascript Logic
    name: 'AppCard',

    props: {
        items: Object
    }
};
</script>
 
<template>
    <div class="card">
        <p>{{ items.title }}</p>
        <p>{{ items.original_title }}</p>
        <p>{{ items.original_language }}</p>
        <p>{{ items.vote_average }}</p>
    </div>
</template>
 
<style>
/* Style */
</style>