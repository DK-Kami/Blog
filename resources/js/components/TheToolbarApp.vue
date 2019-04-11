<template>
  <v-toolbar
    color="dark"
    dark
  >
    <v-toolbar-items>
      <v-btn flat to="/" class="subheading">Главная</v-btn>
    </v-toolbar-items>
    <div class="ml-4" v-if="isAuth">Добро пожаловать, {{ userName }}</div>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat to="/blog" v-if="isAuth">Блог</v-btn>
      <v-btn
        v-if="isAuth"
        depressed
        color="error"
        @click="logout"
        >
          Выход
        </v-btn>
      <v-btn
        v-else
        depressed
        color="error"
        to="/sign-in"
      >
        Вход
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'TheToolbarApp',
  methods: {
    logout: () => this.$store.dispatch('logOut'),
  }
};
</script>

<style>

</style>
