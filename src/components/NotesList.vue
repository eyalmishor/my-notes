<template>
    <div>
        <ul>
            <li v-for="note in notes">{{note.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "notes-list",
        computed: {
            notes() {
                return this.$store.state.notes;
            }
        }
    }
</script>

<style scoped>

</style>