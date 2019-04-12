<template>
  <v-layout
    justify-center
    pt-5
  >
    <v-flex xs10>
      <v-layout
        column
        align-content-space-around
        class="text-xs-center"
      >
        <v-flex class="display-1">
          Добавление записи
        </v-flex>

        <v-flex>
          <v-text-field
            v-model="article.title"
            label="Название записи"
            required
          />
        </v-flex>

        <v-divider/>
        <v-flex class="subheading text-xs-left font-weight-light">
          <v-textarea
            v-model="article.text"
            label="Текст записи"
            required
            box
          />
        </v-flex>

        <v-flex xs8>
          <v-img
            v-if="isLoad"
            :src="article.img"
            height="250"
          />
          <v-img
            v-else
            :src="require(`../../assets/img/${article.img}`)"
            height="250"
          />

          <v-text-field
            label="Выберите изображение"
            v-model="imageName"
            prepend-icon="attach_file"
            @click="pickFile"
          />

          <input
            type="file"
            style="display: none"
            ref="image"
            accept="image/*"
            @change="onFilePicked"
          >
        </v-flex>

        <v-layout
          justify-end
          align-center
          wrap
          mb-3
        >
          <v-btn color="info" outline @click="addArticle">Добавить</v-btn>
          <v-btn outline color="error" @click="clear">Очистить</v-btn>
        </v-layout>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    article: {
      title: '',
      text: '',
      likes: 0,
      isLike: false,
      img: 'stoke-img.jpg',
    },
    isLoad: false,
		imageName: '',
		imageFile: ''
  }),
  methods: {
    addArticle() {
      this.$store.dispatch('addArticle', this.article);
      this.$router.push({ name: 'admin-article' });
    },
    clear() {
      this.article.title = '';
      this.article.text = '';
    },

    pickFile () {
      this.$refs.image.click();
    },
		onFilePicked(e) {
      const files = e.target.files;

			if (files[0] !== undefined) {
        this.imageName = files[0].name;

				if (this.imageName.lastIndexOf('.') <= 0) {
					return;
        }

        const fr = new FileReader();

				fr.readAsDataURL(files[0]);
				fr.addEventListener('load', () => {
					this.article.img = fr.result;
          this.imageFile = files[0];
          console.log(this.imageFile);
          this.isLoad = true;
				})
			} else {
				this.imageName = '';
				this.imageFile = '';
        this.article.img = 'stoke-img.jpg';
        this.isLoad = false;
			}
		},
  },
};
</script>

<style>

</style>
