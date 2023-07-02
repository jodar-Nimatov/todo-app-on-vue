<template>
  <div>
    <task-form @addTask="addTask" />
    <task-list :tasks="tasks" @deleteTask="deleteTask" @toggleTask="toggleTask" @editTask="editTask" />
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    TaskForm,
    TaskList,
  },
  computed: mapState(["tasks"]),
  methods: {
    ...mapMutations(["addTask", "deleteTask", "toggleTask", "editTask"]),
  },
};
</script>