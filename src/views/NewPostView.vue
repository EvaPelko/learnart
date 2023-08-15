<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <h1 class="stroke">New Post</h1>
    </v-row>
    <v-row align="center" justify="center">
      <div id="div-color" max-width="800px" style="padding: 20px">
        <v-text-field v-model="titleText" label="Write a title" outlined dense class="post-input"
          @keyup.enter="postTitle"></v-text-field>
        <v-text-field v-model="postText" label="Write text" outlined dense auto-grow name="input-7-1" variant="filled"
          :rules="rules" :model-value="value" counter @keyup.enter="postText"></v-text-field>

        <v-btn @click="postTitle" color="#99CBDB" dark>Post</v-btn>
      </div>
    </v-row>


  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'path-to-your-image.jpg',
      isSmallScreen: false,
      postText: '',
      rules: [v => v.length <= 25 || 'Max 5000 characters'],

    };
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = this.$vuetify.breakpoint.smAndDown; // Adjust breakpoint as needed
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  resizeTextarea() {
    const textarea = this.$refs.textarea.$el.querySelector('textarea');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  },
};
</script>
