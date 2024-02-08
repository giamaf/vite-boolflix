<script>
export default {
    // Javascript Logic
    name: 'AppSearch',

    data: () => ({
        textSearched: '',
    }),

    emits: ['send-form'],

    props: {
        buttonLabel: String,
        placeholder: String,
    }
};
</script>
 
<template>
    <form @submit.prevent="$emit('send-form', textSearched)">
        <input class="form-control" type="text" :placeholder="placeholder" v-model="textSearched">
        <button class="btn btn-secondary">{{ buttonLabel }}</button>
    </form>
</template>
 
<style lang="scss" scoped>
/* Style */
form {
    display: flex;
    align-items: center;
    gap: 5px;

    input {
        font-size: 0.7rem;
        height: 20px;
    }

    button {
        font-size: 0.7rem;
        padding: 0px 10px;
    }
}
</style>
 