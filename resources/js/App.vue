<template>
  <v-app>
    <the-toolbar-app style="position: fixed; z-index: 1000"/>
    <router-view class="mt-5 pt-3"/>
  </v-app>
</template>

<script>
import TheToolbarApp from './components/TheToolbarApp';

export default {
  name: 'App',
  components: {
    TheToolbarApp,
  },
};
</script>

<style>
  #app {
    min-height: 100vh;
    color: #181e24;
  }
</style>
