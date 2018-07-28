<template>
    <form @submit.prevent="onSubmit">
        <p>
            <label>Title:</label>
            <input v-model="title" id="title"/>
        </p>
        <p>
            <label>Text:</label>
            <input v-model="text" id="text"/>
        </p>
        <input type="submit" value="Submit">
    </form>
</template>

<script>
    export default {
        name: "new-note",
        data() {
            return {
                title: null,
                text: null
            }
        },
        methods: {
            onSubmit() {
                this.$emit('add-new-note',  {title: this.title, test: this.text});
                this.title = null
                this.text = null
            }
        }
    }
</script>

<style scoped>

</style>