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
      numDay: '',
      numToday: '',
      numMonth: '',
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

    created() {
            const d = new Date();
            let settimana = new Array(7);
            settimana[0] = "Domenica";
            settimana[1] = "Lunedì";
            settimana[2] = "Martedì";
            settimana[3] = "Mercoledì";
            settimana[4] = "Giovedì";
            settimana[5] = "Venerdì";
            settimana[6] = "Sabato";
            const date = settimana[d.getDay()];
            let mese = new Array(12);
            mese[0] = "Gen.";
            mese[1] = "Feb.";
            mese[2] = "Mar.";
            mese[3] = "Apr.";
            mese[4] = "Mag.";
            mese[5] = "Giu.";
            mese[6] = "Lug.";
            mese[7] = "Ago.";
            mese[8] = "Set.";
            mese[9] = "Ott.";
            mese[10] = "Nov.";
            mese[11] = "Dic.";
            const mesi = mese[d.getMonth()];
            const oggi = d.getDate();
            const day = date;
            this.numDay = day;
            this.numToday = oggi;
            this.numMonth = mesi;
    },

    methods: {
        uploadTask() {

            if (this.nuova.trim() !== '') {
                this.todos.push({
                    nome: this.nuova,
                    done: ''
                  })
            }
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