<template>
  <v-app>
    <the-toolbar-app style="position: fixed; z-index: 1000" />
    <router-view class="mt-5 pt-3" />
    <the-footer-app app/>
  </v-app>
</template>

<script>
import TheToolbarApp from './components/TheToolbarApp';
import TheFooterApp from './components/TheFooterApp';

export default {
  name: 'App',
  components: {
    TheToolbarApp,
    TheFooterApp,
  },
};
</script>

<style>
  #app {
    min-height: 100vh;
    color: #181e24;
  }
</style>
