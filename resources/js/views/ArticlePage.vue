<template>
  <v-container>
    <v-layout
      column
      align-content-space-around
      class="text-xs-center"
      mt-2
    >
      <v-flex class="display-3 font-weight-light">
        {{ article.title }}
      </v-flex>

      <v-divider/>
      <v-flex class="subheading text-xs-left font-weight-light">
        <div class="text-field">
          {{ article.text }}
        </div>
      </v-flex>
      
      <v-divider/>
      <v-layout
        justify-end
        align-center
        wrap
      >
        <v-flex
          shrink
        >
          <like-heart
            :id="$route.params.id"
            :isLike="article.isLike"
            :count="article.likeCount"
          />
        </v-flex>

        <v-flex xs12>
          <v-text-field
            v-model="comment"
            type="text"
            label="Ваш комментарий"
            clear-icon="mdi-close-circle"
            clearable
            append-outer-icon="mdi-send"
            @click:append-outer="sendComment" />
        </v-flex>

        <v-flex xs12 class="display-3 font-weight-light">
          Комментарии:
        </v-flex>

        <v-flex xs12>
          
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import LikeHeart from '@/components/LikeHeart';

export default {
  name: 'Article',
  components: {
    LikeHeart,
  },
  data: () => ({
    comment: '',
    article: {
      title: 'Baka',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo esse ipsam magnam praesentium ex deserunt a commodi doloribus perspiciatis odio. Qui nulla, illo, reiciendis vero odit rem quos eius culpa repellendus quod consectetur deserunt fugit suscipit cumque laborum, velit aliquid. Aperiam voluptates fugiat numquam nemo quis tenetur esse eos libero.',
      likeCount: 3,
      isLike: true,
    },
  }),
  methods: {
    sendComment() {
      this.comment = '';

      
    },
  },
};
</script>

<style scoped>
.text-field {
  background-color: #f5f5f5;
  padding: 10px 20px;
  line-height: 26px;
}
</style>
