const app = Vue.createApp({
  data() {
    return {
      name: "Alejandro Cortes",
      age: "27",
      imgURL: "https://www.thoughtco.com/thmb/K9BqMNlRYBg01mVVc4yK_XLEzfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-635477020-14202280a8714a179f5850decf0d254e.jpg",
    };
  },
  methods: {
    agePlusFive() {
      return parseInt(this.age) + 5;
    },
    randomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');