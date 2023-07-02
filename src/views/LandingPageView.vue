<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12">
        <div class="text-center">
          <v-row justify="center">
            <v-col cols="6">
              <div class="my-2">
                <v-btn block height="300px" to="/teacherfeed" x-large color="success" dark>
                  Teacher Feed
                </v-btn>
              </div>
            </v-col>
            <v-col cols="6">
              <div class="my-2">
                <v-btn block height="300px" to="/studentfeed" x-large color="success" dark>
                  Student Feed
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <v-col cols="12" sm="6">
            <v-col cols="6">
              <p>aaaaaaaaaaa</p>
            </v-col>
            <v-col cols="6">
              <v-img src="../assets/me-chibi-left.png" align="right" width="200"></v-img>
            </v-col>
          </v-col>

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
