const app = Vue.createApp({
  data() {
    return {
      userInput: 'OUTPUT',
      userInput2: '',
      confirmedInput: 'OUTPUT'
    };
  },
  methods: {
    showAlert(text = 'This works!') {
      alert(text)
    },
    saveInputKeyDown(event) {
      this.userInput = event.target.value;
    },
    saveInputEnter(event) {
      this.userInput2 = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput2;
    }
  }
});

app.mount('#assignment');