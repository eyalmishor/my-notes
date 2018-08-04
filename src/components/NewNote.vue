<template>
<div>
    <form @submit.prevent="submit" >
        <div class="form-group">
            <label>My note:</label>
            <input v-model="title" class="form-control"/>
        </div>
        <button class="btn btn-primary" :disabled="!title || !user">Send</button>
    </form>
     <label>My name:</label>
     <input v-model="user" class="form-control"/>
</div>
</template>

<script>
export default {
  name: "new-note",
  data() {
    return {
      title: null,
      user: null
    };
  },
  methods: {
    submit() {
      this.$emit("add-new-note", { title: this.title, user: this.user });
      this.clear();
    },
    clear() {
      this.title = null;
    }
  }
};
</script>

<style scoped>
</style>
