<template>
  <v-container>
    <v-FooterComponent padless>
      <v-card flat class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0">Uči crtati</v-card-text>
        <v-divider color="yellow"></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>Learnart</strong>
        </v-card-text>
      </v-card>
    </v-FooterComponent>
  </v-container>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>