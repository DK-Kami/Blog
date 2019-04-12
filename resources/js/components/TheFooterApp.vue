<template>
  <v-footer
    height="auto"
    blue-grey
    darken-3
  >
    <v-layout
      justify-center
      blue-grey
      darken-3
      row
      wrap
    >
      <v-layout justify-center>
        <v-btn
          to="/"
          round
          flat
          dark
          class="subheading"
        >
          Главная
        </v-btn>
        <v-btn
          v-if="isAuth"
          to="/blog"
          round
          flat
          dark
        >
          Блог
        </v-btn>
        <v-btn
          v-if="isAdmin"
          to="/admin/user"
          round
          flat
          dark
        >
          Пользователи
        </v-btn>
        <v-btn
          v-if="isAdmin"
          to="/admin/article"
          round
          flat
          dark
        >
          Записи
        </v-btn>
        <v-btn
          v-if="isAdmin"
          to="/admin/article/add"
          round
          flat
          dark
        >
          Добавить запись
        </v-btn>
      </v-layout>

      <v-flex
        blue-grey
        darken-4
        py-3
        text-xs-center
        grey--text
        xs12
      >
        &copy; all rights resolved — <a class="grey--text" href="https://github.com/KamiMeow">Kami-san</a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  created() {
    console.log(this.isAuth);
    console.log(this.isAdmin);
  },
  data() {
    return {
      links: [
        {
          name: 'Главная',
          link: '/',
          if: true,
        },
        {
          name: 'Блог',
          link: '/',
          if: this.isAuth,
        },
        {
          name: 'Пользователи',
          link: '/',
          if: this.isAdmin,
        },
        {
          name: 'Записи',
          link: '/',
          if: this.isAdmin,
        },
        {
          name: 'Добавить запись',
          link: '/',
          if: !this.isAdmin,
        },
        {
          name: 'Вход',
          link: '/',
          if: this.isAuth,
        },
        {
          name: 'Выход',
          link: '/sign',
          if: this.isAuth,
        },
      ],
    };
  },
};
</script>

<style>

</style>
