Vue.component("message", {
  data() {
    return {
      textMessage: "",
      typeMessage: "",
      status: false,
    };
  },
  methods: {
    show(type, text) {
      this.textMessage = text;
      this.typeMessage = `message animate__animated animate__fadeIn ${type}`;
      this.status = true;
      setTimeout(() => {
        this.status = false;
      }, 5000);
    },
  },
  template: `
  <div class="wrap-message">
    <div v-if="status" :class="typeMessage">
        {{this.textMessage}}
    </div>
  </div>
  `,
});
