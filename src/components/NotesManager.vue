<template>
    <div>
        <span class="tab" :class="{ activeTab: selectedTab===tab}"
              v-for="(tab, index) in tabs" :key="index"
              @click="selectedTab = tab">{{tab}}</span>

        <div v-show="selectedTab === 'Notes'">
            <notes-list/>
        </div>

        <div v-show="selectedTab === 'New note'">
            <new-note @add-new-note="addNewNote"/>
        </div>
    </div>

</template>

<script>
    import NotesList from "./NotesList";
    import NewNote from "./NewNote";

    export default {
        components: {
            NewNote,
            NotesList},
        name: "notes-manager",
        data() {
            return {
                tabs: ['Notes', 'New note'],
                selectedTab: 'Notes'
            }
        },
        methods: {
            addNewNote(note) {
                this.selectedTab = 'Notes';
                this.$store.commit('addNewNote', note);
            }
        }
    }
</script>

<style scoped>
    .tab {
        margin-left: 20px;
        cursor: pointer;
    }

    .activeTab {
        color: #16C0B0;
        text-decoration: underline;
    }
</style>