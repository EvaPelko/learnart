<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <h1 class="stroke">New Post</h1>
    </v-row>
    <v-row align="center" justify="center">
      <div id="div-color" max-width="600px" style="padding: 20px">
        <v-text-field v-model="titleText" label="Write a title" outlined dense class="post-input mx-15"
          @keyup.enter="postTitle"></v-text-field>
        <v-text-field v-model="postText" label="Write text" outlined dense class="post-input mx-15"
          @keyup.enter="postText"></v-text-field>
        <v-spacer></v-spacer>
        <v-btn @click="postTitle" color="#99CBDB" dark class="mx-15">Post</v-btn>
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
};
</script>
