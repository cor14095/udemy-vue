const { createApp } = Vue

const app = createApp({
  /* root component options */
  data() {
    return {
      courseGoalA: 'Learn Vue.',
      courseGoalB: 'Refresh Vue.',
      vueLink: 'https://vuejs.org/guide/quick-start.html#using-vue-from-cdn'
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

app.mount('#user-goal');