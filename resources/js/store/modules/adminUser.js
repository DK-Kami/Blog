class User {
  constructor(id, name, login, password, isAdmin = false) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
    this.isAdmin = isAdmin;
  };
};

export default {
  state: {
    headers: [
      {
        text: 'Имя',
        align: 'left',
        value: 'name'
      },
      {
        text: 'Почта',
        value: 'login',
        align: 'center',
      },
      {
        text: 'Пароль',
        value: 'password',
        align: 'center',
      },
      {
        text: 'Админ',
        value: 'isAdmin',
        align: 'center',
      },
      {
        text: 'Изменить',
        align: 'center',
        sortable: false,
      },
      {
        text: 'Удалить',
        align: 'center',
        sortable: false,
      },
    ],
    users: [
      {
        id: 0,
        name: 'Baka',
        login: 'baka@baka.com',
        password: 'baka',
        isAdmin: true,
      },
      {
        id: 1,
        name: 'Baka1',
        login: 'baka1@baka.com',
        password: 'baka1',
        isAdmin: true,
      },
      {
        id: 2,
        name: 'Baka2',
        login: 'baka2@baka.com',
        password: 'baka2',
        isAdmin: false,
      },
      {
        id: 3,
        name: 'Baka3',
        login: 'baka3@baka.com',
        password: 'baka3',
        isAdmin: false,
      },
      {
        id: 4,
        name: 'Baka4',
        login: 'baka4@baka.com',
        password: 'baka4',
        isAdmin: false,
      },
      {
        id: 5,
        name: 'Baka5',
        login: 'baka5@baka.com',
        password: 'baka5',
        isAdmin: false,
      },
      {
        id: 6,
        name: 'Baka6',
        login: 'baka66@baka.com',
        password: 'baka6',
        isAdmin: false,
      },
    ],
  },
  mutations: {
    ADD_USER(state, user) {
      state.users.push(new User(
        state.users.length,
        user.name,
        user.login,
        user.password,
        user.isAdmin,
      ));
    },
    CHANGE_IS_ADMIN(state, id) {
      const user = state.users.filter(u => u.id === id)[0];
      user.isAdmin = !user.isAdmin;
    },
    DELETE_USER(state, id) {
      state.users.forEach((user, index) => {
        if (user.id === id) {
          state.users.splice(index, 1);
        }
      });
    },
    UPDATE_USER(state, {user, id}) {
      let userCurrent = state.users.filter(u => u.id === id)[0];
      userCurrent = user;
    },
  },
  actions: {
    addUser({commit}, user) {
      commit('ADD_USER', user);
    },
    changeIsAdmin({commit}, id) {
      commit('CHANGE_IS_ADMIN', id);
    },
    deleteUser({commit}, id) {
      commit('DELETE_USER', id);
    },
    updateUser({commit}, {user, id}) {
      commit('UPDATE_USER', {user, id});
    },

    getCurrentUser({state}, id) {
      return state.users.filter(u => +u.id === +id)[0];
    }
  },
  getters: {
    getUsers: state => state.users,
    getUserTableHeaders: state => state.headers,
  },
};
