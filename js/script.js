console.log('Vue OK', Vue);

// Estrapolo il metodo creatApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    // dati iniziali
    data(){               
        return{
            // proprietà per memorizzare il testo del nuovo task
            newTask: '',
            // Array di oggetti
            tasks: [
            { id: 1, done: false, text: 'Fare la Milestone 1'},
            { id: 2, done: false, text: 'Fare la Milestone 2'},
            { id: 3, done: false, text: 'Fare la Milestone 3'},
            { id: 4, done: false, text: 'Fare i Bonus'},
            ],
        }
    },
    methods: {
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
                // / Resetto il campo di input dopo aver aggiunto il task
                this.newTaskText = ''; 
            }
        }

    },
});

// Monto nell'elemento (di partenza)
app.mount('#root');
