const storage = {
    fetch(){
        // this.todoItems = [];
        const arr = [];
        if(localStorage.length>0) {
            for (let i = 0; i < localStorage.length; i++) {
                let stringJSON = localStorage.getItem(localStorage.key(i));
                arr.push(JSON.parse(stringJSON));
            }
        }
        return arr;
    }
}

const state = {
    todoItems: storage.fetch(),

};


const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
};
const mutations={
    addOneItem(state, todoItem){
        let obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, {todoItem, index}){
        localStorage.removeItem(todoItem.item);
        state.todoItems.splice(index, 1);
    },
    toggleOneItem(state, {todoItem, index}){
        // 안티패턴
        // todoItem.completed = !todoItem.completed;
        state.todoItems[index].completed = !state.todoItems[index].completed
        localStorage.removeItem(todoItem);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state){
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {
    state,
    getters,
    mutations,
}