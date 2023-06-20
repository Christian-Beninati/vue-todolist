console.log('Vue OK', Vue);

// Estrapolo il metodo creatApp
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
    // dati iniziali
    data(){               
        return{
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
    },
});

// Monto nell'elemento (di partenza)
app.mount('#root');
