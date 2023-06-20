console.log('Vue OK', Vue);

// Estrapolo il metodo creatApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    // dati iniziali
    data(){               
        return{
            // proprietà per memorizzare il testo del nuovo task
            newTaskText: '',

            // Testo di ricerca
            searchText: '',

            // Array di oggetti
            tasks: [
            { id: 1, done: true, text: 'Fare la Milestone 1'},
            { id: 2, done: true, text: 'Fare la Milestone 2'},
            { id: 3, done: true, text: 'Fare la Milestone 3'},
            { id: 4, done: true, text: 'Fare i Bonus'},
            { id: 5, done: true, text: 'Fare il SuperBonus'},
            { id: 6, done: false, text: 'Rivedere la lezione di oggi'},
            ],
        }
    },

    computed: {
        // filtro per cercare all'interno dei task
        filteredTasks() {
            const search = this.searchText.toLowerCase();
            
          return this.tasks.filter((task) => {
            return task.text.toLowerCase().includes(search);
          });
        },
      },

    methods: {
        // Cambio stato (done false - done true)
        toggleTaskStatus(task) {
            task.done = !task.done;
        },

        // Funz per eliminare un task
        deleteTask(targetId) {
            this.tasks = this.tasks.filter(task => targetId !== task.id);
        },

        // Funz per aggiungere un task
        addTask() {
            if (this.newTaskText !== '') {
                const newTask = {
                    id: this.tasks.length + 1,
                    text: this.newTaskText,
                    done: false
                };

                this.tasks.push(newTask);
                // / Resetto il campo input dopo aver aggiunto il task
                this.newTaskText = ''; 
            }
        }

    },
});

// Monto nell'elemento (di partenza)
app.mount('#root');
