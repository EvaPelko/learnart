<template>
  <v-app>
    <v-app-bar height=120 color="#FFF7D0">
      <v-container>

        <div class="d-flex align-center">

          <a href="/landing"><v-img alt="Gameart Logo" class="shrink mr-2" contain
              src="https://www.nicepng.com/png/full/171-1710349_game-controller-pixel-game-controller.png"
              transition="scale-transition" width="60" />
          </a>
          <v-app-bar-title class="stroke">GAMEART</v-app-bar-title>
        </div>
        <v-spacer></v-spacer>
        <v-btn text to="/landing">Landing</v-btn>
        <v-menu v-model="openDropdownTeacher" offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" to="/teacherfeed">
              Teacher Feed
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="item in dropdownItemsTeacher" :key="item.title" @click="handleDropdownItemClick(item)">
              <router-link :to="item.route" @click="closeDropdown">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu v-model="openDropdownStudent" offset-y open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn text @click.stop="openDropdownStudent = !openDropdownStudent" v-on="on" to="/studentfeed">Student Feed
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="item in dropdownItemsStudent" :key="item.title" @click="handleDropdownItemClick(item)">
              <router-link :to="item.route" @click="closeDropdown">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-menu>


        <v-btn v-show="isAuthenticated" text to="/post">New Post</v-btn>
        <v-btn v-show="false && isAuthenticated" text to="/profile">
          Profile
        </v-btn>
        <v-btn v-show="!isAuthenticated" text to="/login">Login</v-btn>
        <v-btn v-show="!isAuthenticated" text to="/registration">
          Registration
        </v-btn>
        <v-btn v-show="isAuthenticated" @click="signOut" text>Logout</v-btn>

        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-content>


      <v-img src="./assets/Sprite-cat.png" align="right" width="200" class="ml-auto mb-15"></v-img>


      <v-footer color="#EBE2B4" absolute>
        <v-row justify="center" no-gutters>
          <v-btn v-for="link in links" :key="link" color="#99CBDB" variant="text" class="mx-2">
            {{ link }}
          </v-btn>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>GAMEART</strong>
          </v-col>
        </v-row>
      </v-footer>



    </v-content>
  </v-app>
</template>
<style>
.v-app-bar-title__content {
  width: 300px !important;
  font-size: 1.5em;
}
</style>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      openDropdown: false,
      dropdownItemsTeacher: [
        { title: 'Fundamentals', route: '/post' },
        { title: 'Anatomy', route: '/post' },
        { title: 'Composition', route: '/post' },
      ],
      dropdownItemsStudent: [
        { title: 'Homework', route: '/post' },
        { title: 'test', route: '/post' },
        { title: 'again', route: '/post' },
      ],

      links: [
        'Home',
        'About Us',
        'Contact Us',
      ],
    };
  },
  methods: {
    closeDropdownTeacher() {
      this.openDropdownTeacher = false;
    },
    closeDropdownStudent() {
      this.openDropdownStudent = false;
    },
  },

};
</script>
