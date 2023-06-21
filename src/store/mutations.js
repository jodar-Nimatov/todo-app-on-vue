export default {
  addTask(state, task) {
    state.tasks.push(task);
  },
  updateTask(state, { taskId, updatedTask }) {
    const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      state.tasks.splice(taskIndex, 1, updatedTask);
    }
  },
  deleteTask(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
  },
};
