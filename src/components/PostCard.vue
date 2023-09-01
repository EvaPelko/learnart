<template>
    <v-card :to="getCardLink" exact tile height="350px" max-width="800" color="#EBE2B4" class="mx-auto my-12">
        <div class="d-flex">
            <div>

                <v-responsive class="ma-4">
                    <v-img :src="info.url" alt="Responsive Image" class="mx-auto" max-width="320px"
                        :class="{ 'shrink-img': isSmallScreen }"></v-img>
                </v-responsive>

            </div>
            <div>
                <br>
                <v-card-title>{{ info.title }}</v-card-title>
                <v-card-text class="text-left roboto-font text-subtitle-1">
                    {{ info.text.substring(0, 150) + (info.text.length > 150 ? '...' : '') }}<span style="color: #216EE1">
                        Read
                        more</span>
                </v-card-text>
                <a href="/profile">
                    <v-avatar class="ma-1" size="50">
                        <v-img src="../assets/User.jpg"> </v-img>
                    </v-avatar>
                </a>
                <v-card-subtitle>{{ info.email }}</v-card-subtitle>
                <v-card-subtitle>{{ postedFromNow }}</v-card-subtitle>
            </div>
        </div>
    </v-card>
</template>

<script>
import moment from 'moment';
export default {
    name: 'PostCard',

    data() {
        return {
            imageUrl: 'path-to-your-image.jpg',
            isSmallScreen: false,
        };
    },
    props: ["info"],
    computed: {
        postedFromNow() {
            return moment(this.info.time).fromNow();
        },
        getCardLink() {
            // Check the current route name and return the appropriate route name with parameters
            if (this.$route.name === 'teacher-feed-view') {
                return { name: 'post-view', params: { postId: this.info.id } };
            }
            if (this.$route.name === 'student-feed-view') {
                return { name: 'student-post-view', params: { postId: this.info.id } };
            }
        },
    },
    methods: {
        checkScreenSize() {
            this.isSmallScreen = this.$vuetify.breakpoint.smAndDown;
        },
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    components: {

    },
}
</script>