<template>
    <div>
        <notes-list/>
        <new-note @add-new-note="addNewNote"/>
    </div>
</template>

<script>
import NotesList from "./NotesList.vue";
import NewNote from "./NewNote.vue";

export default {
  components: {
    NewNote,
    NotesList
  },
  name: "notes-manager",
  data() {
    return {
      tabs: ["Notes", "New note"],
      selectedTab: "Notes",
    };
  },
  methods: {
    addNewNote(note) {
      this.$store.commit("addNewNote", note);
    }
  },
};
</script>

<style scoped>
.tab {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>
