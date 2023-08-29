<template>
    <v-card :to="'/post'" exact tile height="350px" max-width="800" color="#EBE2B4" class="mx-auto my-12">
        <div class="d-flex">
            <div>

                <v-responsive class="ma-4">
                    <v-img src=info.url alt="Responsive Image" class="mx-auto" max-width="320px"
                        :class="{ 'shrink-img': isSmallScreen }"></v-img>
                </v-responsive>

            </div>
            <div>
                <br>
                <v-card-title>{{ info.title }}</v-card-title>
                <v-card-text class="text-left roboto-font text-subtitle-1">
                    {{ info.text.substring(0, 150) + (info.text.length > 150 ? '...' : '') }}<span
                        style="color: #216EE1">Read
                        more</span>
                </v-card-text>
                <a href="/profile">
                    <v-avatar class="ma-1" size="50">
                        <v-img src="../assets/User.jpg"> </v-img>
                    </v-avatar>
                </a>
                <v-card-subtitle>{{ info.email }}</v-card-subtitle>
                <v-card-subtitle>{{ formatTimestamp(info.posted_at) }}</v-card-subtitle>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'PostCard',
    data() {
        return {
            imageUrl: 'path-to-your-image.jpg',
            isSmallScreen: false,
        };
    },
    props: ["info"],
    methods: {
        checkScreenSize() {
            this.isSmallScreen = this.$vuetify.breakpoint.smAndDown;
        },
        formatTimestamp(timestamp) {
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
            const date = new Date(parseInt(timestamp)); // Convert to integer before creating Date object
            return date.toLocaleDateString('en-US', options);
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