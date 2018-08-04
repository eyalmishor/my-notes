<template>
  <div class="container">
    <notes-manager/>
  </div>
</template>

<script>
// @ is an alias to /src
import NotesManager from "@/components/NotesManager.vue";

export default {
  name: "home",
  components: {
    NotesManager
  }
};
</script>
