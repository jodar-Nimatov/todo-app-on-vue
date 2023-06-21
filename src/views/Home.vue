<template>
  <div class="home">
    <p>This is a Home page of Todo List</p>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: 'Home',
  components: {
    ToDoList
  }
}
</script>
