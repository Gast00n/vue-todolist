/**
 * 
 * CREATE A TODOLIST WITH VUE
 * Creare un nuovo todo attraverso un campo di testo
 * Rimuovere uno specifico todo attraverso il click su un icona per la rimozione
 * nel todo stesso
 * 
 */

var app = new Vue({
    el: '#app',
    data: {
      listIndex: 'none',  
      icon: 'fas fa-check-circle',
      nuova: '',
      todos: [{
          nome: 'Fare la spesa',
          done: ''},
      {
          nome: 'Comprare la pasta',
          done: ''},
      {
          nome: 'Pulire casa',
          done: ''},
      {
          nome: 'Portare a spasso il cane',
          done: ''}]
    },
    methods: {
        uploadTask() {
            this.todos.push({
                nome: this.nuova,
                done: ''
              })
            this.nuova = '';
        },

        deleteTask(index) {
            this.todos.splice(index, 1);
        },

        setDone(index) {
            if (this.todos[index].done == 'fatto') {
                this.listIndex = 'none';
                this.todos[index].done = '';
            } else {
                this.listIndex = index;
                this.todos[index].done = 'fatto';
            }
       }
    }
});