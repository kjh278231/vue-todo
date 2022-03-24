<template>
<div>
  <ul>
    <li v-for="(todoItem,index) in todoItems" v-bind:key="todoItem.item" class="shadow">
      <font-awesome-icon icon="fa-solid fa-check" class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem)"/>
      <span v-bind:class="{textCompleted : todoItem.completed}">{{ todoItem.item }}</span>
      <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
        <font-awesome-icon icon="fa-solid fa-user-secret" />
      </span>
    </li>

  </ul>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCheck} from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faCheck)

export default {
  name: "TodoList",
  data(){
    return{
      todoItems: [],
    }
  },
  methods: {
    removeTodo: function (todoItem,index) {
      console.log(todoItem,index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(todoItem){
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  created : function(){
    if(localStorage.length>0){
      for (let i = 0; i < localStorage.length; i++){
        let stringJSON = localStorage.getItem(localStorage.key(i));
        this.todoItems.push(JSON.parse(stringJSON));
      }

    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}

</style>