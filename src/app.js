import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
          {name: "Buy shopping", priority: "High"},
          {name: "Clean bathroom", priority: "Low"},
          {name: "Car's MOT", priority: "High"}
      ]
    },
    methods: {
      
    }
  });
});