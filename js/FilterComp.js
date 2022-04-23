Vue.component("search", {
  data() {
    return {
      filtered: [],
      productSearch: "",
    };
  },
  methods: {
    filter(search) {
      this.filtered = this.$root.$refs.products.products;
      let regexp = new RegExp(search, "i");
      this.filtered = this.filtered.filter((el) =>
        regexp.test(el.product_name)
      );
    },
  },
  template: `
  <form
    action="#"
    class="search-form"
    @submit.prevent="$root.$refs.search.filter(productSearch)"
  >
    <input type="text" class="search-field" v-model="productSearch" />
    <button class="btn-search" type="submit">
      <i class="fas fa-search"></i>
    </button>
  </form> `,
});
