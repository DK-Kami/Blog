import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/MainPage.vue';
import Blog from './views/BlogPage.vue';
import SignIn from './views/SignInPage.vue';
import Article from './views/ArticlePage.vue';
import UserAdmin from './views/admin/UserAdmin.vue';
import UserAdminEdit from './views/admin/UserAdminEdit.vue';
import ArticleAdmin from './views/admin/ArticleAdmin.vue';
import ArticleAdminEdit from './views/admin/ArticleAdminEdit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/blog/article/:id',
      name: 'article',
      component: Article,
    },
    {
      path: '/sign-in',
      name: 'sgin-in',
      component: SignIn,
    },
    {
      path: '/admin',
      redirect: '/admin/user'
    },
    {
      path: '/admin/user',
      name: 'admin-user',
      component: UserAdmin,
    },
    {
      path: '/admin/user/edit/:id',
      name: 'user-edit',
      component: UserAdminEdit,
    },
    {
      path: '/admin/article',
      name: 'admin-article',
      component: ArticleAdmin,
    },
    {
      path: '/admin/article/edit/:id',
      name: 'article-edit',
      component: ArticleAdminEdit,
    },
  ],
});
