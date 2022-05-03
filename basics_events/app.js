const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      addNumber: 10,
      reduceNumber: 5,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(number) {
      this.counter += number;
    },
    reduce(number) {
      this.counter -= number;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('It\'s works');
    }
  }
});

app.mount('#events');
