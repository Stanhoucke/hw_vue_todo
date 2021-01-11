import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
          {name: "Buy shopping", priority: "High"},
          {name: "Clean bathroom", priority: "Low"},
          {name: "Car's MOT", priority: "High"}
      ],
      newToDo: "",
      newPriority: ""
    },
    methods: {
      addNewToDo: function() {
          this.todos.push({name: this.newToDo, priority: this.newPriority});
          this.newToDo = "";
          this.newPriority = "";
      },
      togglePriority: function(index) {
        if (this.todos[index].priority === 'High') {
            this.todos[index].priority = 'Low';
        } else {
            this.todos[index].priority = 'High';
        }
      }
    }
  });
});