<template>
  <v-layout
    justify-center
    wrap
  >
    <v-flex xs9 mt-2>
      <v-btn
        color="info"
        outline
        to="/admin/article/add"
      >
        Добавить запись
      </v-btn>
    </v-flex>

    <v-flex xs12>
      <blog-page :is-adminka="true" />
    </v-flex>
  </v-layout>
</template>

<script>
import BlogPage from '../BlogPage.vue';

export default {
  components: {
    BlogPage,
  },
};
</script>

<style>

</style>
