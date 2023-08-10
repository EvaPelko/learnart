<template>
  <v-container>

    <div>
      <v-img src="../assets/hand-drawing.jpg" alt="Responsive Image" class="mx-auto"
        :class="{ 'shrink-img': isSmallScreen }"></v-img>
    </div>


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
