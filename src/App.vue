<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script src="https://kit.fontawesome.com/a15ed7f64a.js" crossorigin="anonymous"></script>
<script>

import TodoFooter from "@/components/TodoFooter";
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  // 헬퍼의 사용

  // data() {
  //   return {
  //     todoItems: [],
  //   };
  // },
  // methods:{
  //   addOneItem(todoItem) {
  //     let obj = {completed: false, item: todoItem};
  //     localStorage.setItem(todoItem, JSON.stringify(obj));
  //     this.todoItems.push(obj);
  //   },
  //   removeOneItem(todoItem,index){
  //     localStorage.removeItem(todoItem.item);
  //     this.todoItems.splice(index, 1);
  //   },
  //   toggleOneItem(todoItem, index) {
  //     // 안티패턴
  //     // todoItem.completed = !todoItem.completed;
  //     this.todoItems[index].completed = !this.todoItems[index].completed
  //     localStorage.removeItem(todoItem);
  //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   },
  //   clearAllItems(){
  //     localStorage.clear();
  //     this.todoItems = [];
  //   }
  // },
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter,
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;

  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
