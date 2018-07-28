<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to my-notes"/>
    <notes-manager/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import NotesManager from '@/components/NotesManager';

export default {
  name: 'home',
  components: {
      NotesManager,
      HelloWorld,
  },
};
</script>
