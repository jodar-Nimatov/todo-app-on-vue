<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <task-item :task="task" @updateTask="updateTask(task.id, $event)" @deleteTask="deleteTask(task.id)" />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
import { mapState } from "vuex";

export default {
  components: {
    TaskItem,
  },
  computed: {
    ...mapState(["tasks"]),
  },
  methods: {
    updateTask(taskId, updatedTask) {
      this.$store.commit("updateTask", { taskId, updatedTask });
    },
    deleteTask(taskId) {
      this.$store.commit("deleteTask", taskId);
    },
  },
};
</script>
