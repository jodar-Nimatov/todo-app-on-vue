<template>
  <div>
    <label :class="{ completed: task.completed, editing: editing }">
      <input type="checkbox" :checked="task.completed" @change="toggleTask" />
      <span v-if="!editing" @click="startEdit">{{ task.title }}</span>
      <input type="text" v-model="editedTitle" v-if="editing" ref="inputField" />
    </label>
    <button v-if="!editing" @click="startEdit">Edit</button>
    <button v-if="editing" @click="updateTask">Save</button>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  data() {
    return {
      editing: false,
      editedTitle: this.task.title,
    };
  },
  methods: {
    toggleTask() {
      this.$emit("updateTask", { ...this.task, completed: !this.task.completed });
    },
    startEdit() {
      this.editing = true;
      this.$nextTick(() => {
        this.$refs.inputField.focus();
      });
    },
    updateTask() {
      const newTitle = this.editedTitle.trim();
      if (newTitle !== "") {
        this.$emit("updateTask", { ...this.task, title: newTitle });
      }
      this.editing = false;
    },
    deleteTask() {
      this.$emit("deleteTask");
    },
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
