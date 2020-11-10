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
      icon: 'fa-check-circle',
      todos: ['Fare la spesa', 'Comprare il pane', 'Far uscire il cane', 'Passare lo straccio']
    }
});