export default {
  computed: {
    userName() {
      return this.$options.parent.$store.getters.getName;
    },
    isAuth() {
      return this.$options.parent.$store.getters.getIsAuth;
    },
    isAdmin() {
      return this.$options.parent.$store.getters.getIsAdmin;
    },
  },
};
