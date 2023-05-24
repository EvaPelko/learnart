<template>
  <v-container fluid class="pa-0">
    <v-row align="center">
      <v-col cols="12" sm="6">
        <div class="text-center">

          <div class="my-2">
            <v-btn to="/teacherfeed" x-large color="success" dark>
              Teacher Feed
            </v-btn>
          </div>
          <div class="my-2">
            <v-btn to="/studentfeed" x-large color="success" dark>
              Student feed
            </v-btn>
          </div>
        </div>
      </v-col>


    </v-row>
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'LandingPageView',

  components: {

  },
}
</script>
