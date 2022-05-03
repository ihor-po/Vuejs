const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmEnter: ''
        };
    },
    methods: {
        alertMessage() {
            alert('Button pressed');
        },
        setUserInput(event) {
            this.userInput = event.target.value;
        },
        setConfirmEnter(event) {
            this.confirmEnter = event.target.value;
        }
    }
});

app.mount("#assignment");