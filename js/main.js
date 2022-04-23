/*
    1. Вынести поиск в отдельный компонент.
    2. Вынести корзину в отдельный компонент.
    3. * Создать компонент с сообщением об ошибке. 
    Компонент должен отображаться, когда не
    удаётся выполнить запрос к серверу.
*/

const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data: {
    productSearch: "",
  },
  methods: {
    async getJson(url) {
      try {
        const result = await fetch(url);
        const data = await result.json();
        this.$root.$refs.message.show("info", "Товары успешно загружены");
        return data;
      } catch (error) {
        // show error component
        this.$root.$refs.message.show(
          "error",
          "Произошла ошибка при загрузке товаров!"
        );
        return error;
      }
    },
  },
  mounted() {
    //console.log("this:", this);
  },
});
