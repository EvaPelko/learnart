<template>
  <v-container>
    <v-spacer></v-spacer>
    <div>student feed</div>
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
