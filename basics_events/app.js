const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      addNumber: 10,
      reduceNumber: 5,
      name: '',
      lastname: '',
      confirmedName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      const that = this;
      if (value > 50) {
        setTimeout(function () {
          that.counter =  0;
        }, 2000);
      }
      
    }
    // name(value, oldValue) {
    //   this.fullname = value !== '' 
    //   ? value + ' ' + this.lastname
    //   : ''; 
    // },
    // lastname(value, oldValue) {
    //   this.fullname = value !== '' 
    //   ? this.name + ' ' + value
    //   : '';
    // }
  },
  computed: {
    fullname() {
      if (this.name === '' && this.lastname === '') {
        return '';
      }

      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    add(number) {
      this.counter += number;
    },
    reduce(number) {
      this.counter -= number;
    },
    setName(event) {
      console.log(this.name);
      this.name = event.target.value;
    },
    confirmName() {
      this.confirmedName = this.name + ' ' + this.lastname;
    },
    submitForm() {
      alert('It\'s works');
    },
    resetInputs() {
      // document.querySelector('input').value = "";
      this.name = '';
      this.lastname = '';
    }
  }
});

app.mount('#events');
