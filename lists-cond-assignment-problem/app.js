const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            showList: true
        };
    },
    computed: {
        buttonCaption() {
            return this.showList ? 'Hide' : 'Show'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        hideList() {
            this.showList = !this.showList;
        }
    }
});

app.mount('#assignment');