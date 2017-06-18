<template>
  <div>
    <p>hoge</p>
    <textform></textform>
    <todolist></todolist>
    <a href="/">go to hello page</a>
  </div>
</template>

<script>
import TextForm from "./TextForm.vue"
import TodoList from "./TodoList.vue"

export default {
    name: 'Hoge',
    data: function(){
        return {
            "todos": this.$store.state.todos
        }
    },

    components: {
        "textform": TextForm,
        "todolist": TodoList
    }
}
</script>

<style lang="scss">
</style>
