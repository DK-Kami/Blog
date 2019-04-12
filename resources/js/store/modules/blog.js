/* eslint-disable no-param-reassign */
export default {
  state: {
    blog: [
      {
        title: 'Baka',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure at distinctio recusandae rem blanditiis mollitia quae ratione consequatur dolorum repellat aliquam quibusdam odio harum et, suscipit, itaque placeat, corrupti asperiores voluptate accusantium? Aliquam, ullam? Sapiente repudiandae voluptas vel expedita qui soluta recusandae, aut molestiae molestias veritatis voluptatibus minus beatae quidem.',
        likes: 5,
        isLike: true,
        img: 'article-1.jpg',
      },
      {
        title: 'Baka',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure at distinctio recusandae rem blanditiis mollitia quae ratione consequatur dolorum repellat aliquam quibusdam odio harum et, suscipit, itaque placeat, corrupti asperiores voluptate accusantium? Aliquam, ullam? Sapiente repudiandae voluptas vel expedita qui soluta recusandae, aut molestiae molestias veritatis voluptatibus minus beatae quidem.',
        likes: 2,
        isLike: true,
        img: 'article-2.jpg',
      },
      {
        title: 'Baka',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure at distinctio recusandae rem blanditiis mollitia quae ratione consequatur dolorum repellat aliquam quibusdam odio harum et, suscipit, itaque placeat, corrupti asperiores voluptate accusantium? Aliquam, ullam? Sapiente repudiandae voluptas vel expedita qui soluta recusandae, aut molestiae molestias veritatis voluptatibus minus beatae quidem.',
        likes: 0,
        isLike: false,
        img: 'article-3.jpg',
      },
      {
        title: 'Baka',
        text: 'Lorem',
        likes: 25,
        isLike: false,
        img: 'article-4.jpg',
      },
      {
        title: 'Baka',
        text: 'Lorem',
        likes: 15,
        isLike: false,
        img: 'article-5.jpg',
      },
    ],
  },
  mutations: {
    IS_LIKE_CHANGE: (state, id) => { state.blog[id].isLike = !state.blog[id].isLike; },
    DISLIKE: (state, id) => { state.blog[id].likes -= 1; },
    LIKE: (state, id) => { state.blog[id].likes += 1; },

    DELETE_ARTICLE: (state, id) => { state.blog.splice(id, 1); },
    ADD_ARTICLE: (state, article) => { state.blog.push(article); },
    UPDATE_ARTICLE: (state, {article, id}) => { state.blog[id] = article; },
  },
  actions: {
    likeOrDislike: ({ commit, state }, id) => {
      commit('IS_LIKE_CHANGE', id);

      const stateTemp = state;

      if (stateTemp.blog[id].isLike) {
        (commit('LIKE', id));
      } else {
        (commit('DISLIKE', id));
      }
    },
    deleteArticle: ({commit}, id) => {
      commit('DELETE_ARTICLE', id);
    },
    addArticle({commit}, article) {
      commit('ADD_ARTICLE', article);
    },
    
    updateArticle({commit}, {article, id}) {
      commit('UPDATE_ARTICLE', {article, id});
    },
  },
  getters: {
    getBlog: state => state.blog,
  },
};
