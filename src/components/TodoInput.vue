<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <font-awesome-icon icon="fa-solid fa-plus" class="addBtn"/>
    </span>

    <ModalComponent v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <font-awesome-icon icon="fa-solid fa-times" class="closeModalBtn"
            @click="showModal=false"></font-awesome-icon>
      </h3>
      <p slot="body">
        무언가를 입력하세요.
      </p>
    </ModalComponent>

  </div>
</template>


<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus,faTimes} from '@fortawesome/free-solid-svg-icons'
import ModalComponent from '../common/ModalComponent.vue';

library.add(faPlus,faTimes);

export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components:{
    'ModalComponent': ModalComponent,

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
  .closeModalBtn{
    color: #42b983;
  }
</style>