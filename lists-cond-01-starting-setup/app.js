const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '', 
      goals: [],
      user: {
        name: "Jhon",
        lastname: "Doe",
        age: 1000
      }
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = '';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
