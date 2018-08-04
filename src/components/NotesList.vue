<template>
    <div >
        <div class="card" v-for="note in notes" :key="note.title">
            <div class="card-body">
                 <p class="card-text">{{ note.title }}</p>
             </div>
         </div>
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
};
</script>

<style scoped>
</style>
