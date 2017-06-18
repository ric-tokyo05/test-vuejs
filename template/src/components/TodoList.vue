<template>
  <ul>
    <li v-for="todo in todos">{{todo}}</li>
  </ul>
</template>

<script>
  export default {
    name: "TodoList",

    data: function(){
        return {
            "todos": this.$store.state.todos
        }
    }
  }
</script>