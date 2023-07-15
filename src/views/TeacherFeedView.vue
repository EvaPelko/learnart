<template>
  <v-container>
    <div>teacher feed

    </div>
  </v-container>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'TeacherFeedView',
  data() {
    return {
      error: [],
      name: null,
      password: null,
    }
  },
  methods: {
    login(e) {
      if (this.name && this.password) {
        console.log("login function called")
      }
      this.error = [];
      if (this.name) {
        this.error.push("name is required")
      }
      if (this.password) {
        this.error.push("password is required")
      }
      console.ward("errors", this.error)
      e.preventDefault();

    }
  },
  components: {

  },
}
</script>
