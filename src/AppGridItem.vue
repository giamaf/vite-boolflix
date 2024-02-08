<script>
import AppCard from './AppCard.vue';

export default {
    // Javascript Logic
    name: 'AppGridItem',

    components: { AppCard },


};
</script>
 
<template>
    <div class="row">
        <div class="col-auto">
            <AppCard />
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
 