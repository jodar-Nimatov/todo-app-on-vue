<template>
  <div>
    <input type="text" v-model="newTask" />
    <button @click="addTask">Add Task</button>
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
