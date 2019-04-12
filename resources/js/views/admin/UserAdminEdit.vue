<template>
  <v-layout justify-center>
    <v-flex xs9 my-3>
      <v-card>
        <v-card-title class="headline font-weight-light">
          Редактировать пользователя
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field
              v-model="user.name"
              label="Имя"
              required
            />

            <v-text-field
              v-model="user.login"
              label="E-mail"
              required
            />

            <v-text-field
              v-model="user.password"
              label="Пароль"
              required
            />

            <v-checkbox
              v-model="user.isAdmin"
              label="Админ"
              required
            />

            <v-layout justify-space-between>
              <v-flex shrink>
                <v-btn
                  color="info"
                  outline
                  @click="edit"
                >
                  Изменить
                </v-btn>

                <v-btn
                  color="error"
                  @click="clear"
                >
                  Очистить
                </v-btn>
              </v-flex>
              
              <v-flex shrink>
                <v-btn
                  color="warning"
                  @click="back"
                  outline
                >
                  Назад
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  created() {
    this.user = this.$store.getters.getUsers.filter(u => +u.id == +this.$route.params.id)[0];
  },
  data: () => ({
    user: {
      id: 0,
      name: '',
      login: '',
      password: '',
      isAdmin: false,
    },
  }),
  methods: {
    edit() {
      this.$store.dispatch('updateUser', { user: this.user, id: this.$route.params.id });
      this.back();
    },
    back() {
      this.$router.replace({ name: 'admin-user' });
    },
    clear() {
      this.user.name = '';
      this.user.login = '';
      this.user.password = '';
      this.user.isAdmin = false;
    },
  },
};
</script>

<style>

</style>
