<template>
  <div>
    <input type="text" v-model="input" @keyup.enter="addTodo"/>
  </div>
</template>

<script>
export default {
  name: "TextForm",

  data: function () {
    return {
      input: ""
    }
  },

  methods: {
    addTodo: function(e){
      var text = e.target.value;
      var action = this.$store.actions.addTodo;
      this.$store.commit(action, {"text":text});
      e.target.value = '';
    }
  }
}
</script>
