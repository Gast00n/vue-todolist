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
      todos: [{
          nome: 'Fare la spesa',
          done: 'pizza'},
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

        setDone(index) {
            if (this.listIndex == index) {
                this.todos[index].done = '';
            } else {
                this.listIndex = index;
                this.todos[index].done = 'fatto';
            }
            console.log(this.todos[index].done);
       }
    }
});