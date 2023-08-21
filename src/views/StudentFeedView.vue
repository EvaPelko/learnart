<template>
  <v-container>
    <v-spacer></v-spacer>
    <h1>Student Feed</h1>
    <PostCard></PostCard>
  </v-container>
</template>

<script>
import PostCard from '../components/PostCard'

export default {
  name: 'StudentFeedView',

  components: {
    PostCard,
  },
}
</script>
