<template>
  <v-layout
    justify-center
    wrap
    row
    pt-4
  >
    <v-flex xs9>
      <v-card 
        v-for="(article, i) in articles"
        :key="`article-${i}`"
        class="mb-2"
      >
        <v-layout fill-height>
          <v-flex>
            <v-img
              :src="require(`../assets/img/${article.img}`)"
              height="150px"
            >
            </v-img>
          </v-flex>

          <v-flex pa-3>
            <v-layout
              align-space-around
              justify-space-around
              fill-height
              column
            >
              <v-flex>
                <div class="headline">{{ article.title }}</div>
                <v-divider></v-divider>
              </v-flex>
              
              <v-flex xs1>
                <v-layout justify-space-between>
                  <v-flex>
                    <v-btn color="info" @click="$router.push({ name: 'article', params: { id: i } })">Подробнее</v-btn>
                  </v-flex>
                  
                  <v-flex shrink>
                    <like-heart
                      :id="i"
                      :isLike="article.isLike"
                      :count="article.likes"
                    />
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import LikeHeart from '@/components/LikeHeart';

export default {
  name: 'BlogPage',
  components: {
    LikeHeart,
  },
  computed: {
    articles() {
      return this.$store.getters.getBlog;
    },
  },
};
</script>

<style>

</style>
