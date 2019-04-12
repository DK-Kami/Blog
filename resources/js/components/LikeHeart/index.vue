<template>
  <v-layout style="min-width: 100px">
    <v-flex @click="likeClick">
      <v-btn icon style="margin-right: -3px">
        <v-icon :style="`color: ${isLike ? 'red' : 'black'}`">{{ isLike ? 'mdi-heart' : 'mdi-heart-outline'}}</v-icon>
      </v-btn>

      <span :style="`color: ${isLike ? 'red' : 'black'}`">{{ count }}</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LikeHeart',
  props: {
    id: {
      type: Number,
      required: true,
    },
    isLike: {
      type: Boolean,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    likeClick() {
      this.$store.dispatch('likeOrDislike', this.id);
    },
  },
};
</script>

<style>

</style>
