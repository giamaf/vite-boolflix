<script>
export default {
    // Javascript Logic
    name: 'AppSearch',

    data: () => ({
        textSearched: '',
    }),

    emits: ['send-form', 'live-text'],

    props: {
        buttonLabel: String,
        placeholder: String,
    }
};
</script>
 
<template>
    <form @submit.prevent="$emit('send-form', textSearched)" name="search-form">
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        <input autofocus @keyup="$emit('live-text', textSearched)" :placeholder="placeholder" v-model.trim="textSearched"
            type="text">
        <!-- <button class="btn btn-secondary">{{ buttonLabel }}</button> -->
    </form>
</template>
 
<style lang="scss" scoped>
/* Style */
form {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;

    color: whitesmoke;

    .fa-magnifying-glass {
        position: absolute;
        font-size: 1rem;
        margin: 0px 6px;
    }

    input {
        font-size: 0.7rem;
        // height: 20px;
        background-color: black;
        border: 1px solid white;
        color: white;
        padding: 5px 20px 5px 27px;

    }

    button {
        font-size: 0.7rem;
        padding: 0px 10px;
    }
}
</style>
 