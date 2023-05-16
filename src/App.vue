<template>
  <v-app>
    <v-app-bar flat max-height="65">
      <HeaderComponent />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-content>


      <FooterComponent />

    </v-content>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
  },
  data: () => ({
    //
  }),
};
</script>
