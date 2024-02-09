<script>
export default {
    // Javascript Logic
    name: 'AppFilterSelect',

    props: {
        placeholder: String,
        genres: Array
    }
};
</script>
 
<template>
    <!-- Template -->
    <select name="genre-select">
        <option selected disabled>{{ placeholder }}</option>
        <option v-for="genre in genres" :key="genre.id">{{ genre.name }}</option>
    </select>
</template>
 
<style lang="scss" scoped>
/* Style */
select {
    font-size: 0.7rem;
    background-color: black;
    border: 1px solid whitesmoke;
    color: white;
    padding: 5px 20px 5px 5px;
}
</style>