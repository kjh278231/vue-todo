<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <button class='addBtn' >add</button>
    </span>
  </div>
</template>

<script>

export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: '',

    }
  },
  methods:{
    addTodo(){
      if(this.newTodoItem!=='') {
        var obj = {completed: false, item: this.newTodoItem};
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style>
  input:focus {
    outline: none;

  }
  .inputBox {
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right,#6478FB,#8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>