export default {
  computed: {
    userName() {
      console.log(this.$options);
      this.$options.parent.$store.getters.getName;
    },
    isAuth() {
      console.log(this.$options);
      this.$options.parent.$store.getters.getIsAuth;
    },
  },
};
