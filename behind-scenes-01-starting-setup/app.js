const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  beforeCreate() {
    console.info('Before create');
  },
  created() {
    console.info('Created');
  },
  beforeMount() {
    console.info('Before Mount');
  },
  mounted() {
    console.log('Mounted');
  },
  beforeUpdate() {
    console.warn('Before update');
  },
  updated() {
    console.warn('updated');
  },
  beforeUnmount() {
    console.log('Before unmount');
  },
  unmounted() {
    console.log('Unmounted');
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

setTimeout(function() {
  app.unmount();
}, 3000);



const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
}

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!!!!';

console.log(proxy.longMessage);