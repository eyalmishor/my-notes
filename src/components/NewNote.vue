<template>
    <form @submit.prevent="submit" >
        <div class="form-group">
            <label>My note:</label>
            <input v-model="title" class="form-control"/>
        </div>
        <button class="btn btn-primary" :disabled="!title">Send</button>
    </form>
</template>

<script>
export default {
  name: 'new-note',
  data() {
    return {
      title: null,
      text: null,
    };
  },
  methods: {
    submit() {
      this.$emit('add-new-note', { title: this.title, text: this.text });
      this.clear();
    },
    clear() {
      this.title = null;
    },
  },
};
</script>

<style scoped>
</style>
