<template>
  <div>
    <input class='form-input' type="text" v-model="newTask" placeholder="Add a new task..."/>
    <button class='add-btn' @click="addTask">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        const task = {
          id: Date.now(),
          title: this.newTask.trim(),
          completed: false,
        };
        this.$store.commit("addTask", task);
        this.newTask = "";
      }
    },
  },
};
</script>
