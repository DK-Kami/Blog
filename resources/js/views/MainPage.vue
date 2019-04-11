<template>
  <v-layout column id="main-page">
    <v-flex xs12>
      <v-img
        class="blur"
        :src="require('../assets/top.jpg')"
        height="100vh"
      >
        <v-layout
          align-center
          fill-height
        >
          <v-flex xs12 class="text-xs-center">
            <h2 class="display-1 mb-5">Домашнее задание по дисциплине<br>"Инфокоммуникационные системы и сети"</h2>
            <v-btn
              color="dark"
              outline
              large
              round
              @click="goToBlog"
            >
              Посмотреть блог
            </v-btn>
          </v-flex>
        </v-layout>
      </v-img>
    </v-flex>

    <v-flex
      v-for="(section, i) in sections"
      :key="`section-${i}`"
      :style="`background-color: ${i % 2 ? '#CECECE' : '#FFF'} !important;`"
    >
      <section>
        <v-layout
          justify-space-between
          wrap
          px-5
        >
          <v-flex xs12>
            <h2 class="display-3 my-5 text-center">{{ section.title }}</h2>
          </v-flex>

          <v-flex xs6>
            <p v-html="section.discribe"></p>
            <a :href="`#slide-${i + 2}`">Вниз</a>
          </v-flex>

          <v-flex
            class="img-container slide-img"
            xs5
          >
            <v-img
              :src="require(`../assets/slide-${i + 1}.jpg`)"
              height="50vh"
            />
          </v-flex>
        </v-layout>
      </section>
    </v-flex>

    <v-flex xs12>
      <v-img
        class="blur"
        :src="require('../assets/bot.jpg')"
        height="100vh"
      >
        <v-layout
          align-center
          fill-height
        >
          <v-flex xs12 class="text-xs-center">
            <h2 class="display-1 mb-5" style="color: #efefef">Нажмите на кнопку ниже,<br> чтобы оставить свой отзыв</h2>
            <v-btn
              outline
              large
              round
              dark
              @click="goToBlog"
            >
              Посмотреть блог
            </v-btn>
          </v-flex>
        </v-layout>
      </v-img>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'MainPage',
  data: () => ({
    sections: [
      {
        title: 'Lorem, ipsum dolor.',
        discribe: '<span class="start-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> <b>Unde tempora</b> -  vero facere illum ullam sequi natus est voluptatum dolorem. Illo beatae alias nobis! Eaque modi recusandae corrupti in, voluptatibus consectetur impedit, illum, ullam eveniet dicta ipsa. Nisi totam, doloribus laborum natus ab dolores veritatis, <u>consequuntur</u> a ipsa reprehenderit laudantium corporis optio tenetur voluptatum ipsum et voluptatem tempore odit fuga quae eveniet rerum cupiditate, ullam debitis? Error similique corrupti velit eveniet, dolore est cupiditate placeat earum, <i>deserunt, harum ab</i>! Pariatur dolore magnam possimus similique quod.',
      },
      {
        title: 'Lorem, ipsum dolor.',
        discribe: '<span class="start-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> <b>Unde tempora</b> -  vero facere illum ullam sequi natus est voluptatum dolorem. Illo beatae alias nobis! Eaque modi recusandae corrupti in, voluptatibus consectetur impedit, illum, ullam eveniet dicta ipsa. Nisi totam, doloribus laborum natus ab dolores veritatis, <u>consequuntur</u> a ipsa reprehenderit laudantium corporis optio tenetur voluptatum ipsum et voluptatem tempore odit fuga quae eveniet rerum cupiditate, ullam debitis? Error similique corrupti velit eveniet, dolore est cupiditate placeat earum, <i>deserunt, harum ab</i>! Pariatur dolore magnam possimus similique quod.',
      },
      {
        title: 'Lorem, ipsum dolor.',
        discribe: '<span class="start-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> <b>Unde tempora</b> -  vero facere illum ullam sequi natus est voluptatum dolorem. Illo beatae alias nobis! Eaque modi recusandae corrupti in, voluptatibus consectetur impedit, illum, ullam eveniet dicta ipsa. Nisi totam, doloribus laborum natus ab dolores veritatis, <u>consequuntur</u> a ipsa reprehenderit laudantium corporis optio tenetur voluptatum ipsum et voluptatem tempore odit fuga quae eveniet rerum cupiditate, ullam debitis? Error similique corrupti velit eveniet, dolore est cupiditate placeat earum, <i>deserunt, harum ab</i>! Pariatur dolore magnam possimus similique quod.',
      },
      {
        title: 'Lorem, ipsum dolor.',
        discribe: '<span class="start-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> <b>Unde tempora</b> -  vero facere illum ullam sequi natus est voluptatum dolorem. Illo beatae alias nobis! Eaque modi recusandae corrupti in, voluptatibus consectetur impedit, illum, ullam eveniet dicta ipsa. Nisi totam, doloribus laborum natus ab dolores veritatis, <u>consequuntur</u> a ipsa reprehenderit laudantium corporis optio tenetur voluptatum ipsum et voluptatem tempore odit fuga quae eveniet rerum cupiditate, ullam debitis? Error similique corrupti velit eveniet, dolore est cupiditate placeat earum, <i>deserunt, harum ab</i>! Pariatur dolore magnam possimus similique quod.',
      },
    ],
  }),
  methods: {
    goToBlog() {
      this.$router.push({ name: 'blog' });
    }
  }
};
</script>

<style>
.blur .v-image__image {
  filter: blur(1px);
}

section {
  height: 100vh;
}

.img-container { 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.slide-img {
  box-shadow: 0 0 20px 5px #999;
}

.start-text {
  color: teal !important;
  font-size: 18px;
}


</style>
