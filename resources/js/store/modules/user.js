export default {
  state: {
    isAuth: false,
    isAdmin: false,
    token_type: '',
    token_success: '',
    name: '',
    email: '',
    password: '',
  },
  mutations: {
    SET_TOKEN: (state, {type, token}) => {
      state.token_type = type;
      state.token_success = token;
    },
    SIGN_IN: (state, data) => {
      state.isAuth = true;
      state.isAdmin = !!data.is_admin;
      state.name = data.name;
    },
    LOG_OUT: state => {
      state.isAuth = false;
      state.isAdmin = false;
      state.name = '';
    },
  },
  actions: {
    setToken: ({commit}, {type, token}) => {(commit('SET_TOKEN', {type, token}))},
    signIn: ({commit}, data) => {(commit('SIGN_IN', data))},
    logOut: ({commit}) => {(commit('LOG_OUT'))},
  },
  getters: {
    getToken: state => `${state.token_type} ${state.token_success}`,
    getIsAdmin: state => state.isAdmin,
    getIsAuth: state => state.isAuth,
    getUser: state => ({
      user: {
        name: state.name,
        email: state.email,
        password: state.password,
      },
    }),
    getName: state => state.name,
  },
};
