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

// var my_cmp = {
//   template: '<div>my component<div>',
//
// };
//
// new Vue({
//   el: ' ',
//   components:{
//     'my-cmp': my_cmp,
//
//   }
// })

export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoList' : TodoList,
    'TodoInput': TodoInput,
    'TodoFooter': TodoFooter,
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
