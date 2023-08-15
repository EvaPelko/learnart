<template>
    <v-card>
        <v-img :src="imageUrl" @click="showFullSize"></v-img>
        <v-dialog v-model="dialog" max-width="800px">
            <v-img :src="imageUrl" contain></v-img>
        </v-dialog>
    </v-card>
</template>

<script>
export default {
    props: {
        imageUrl: String, // Prop to accept image URL
    },
    data() {
        return {
            dialog: false, // Dialog state for full-size image
        };
    },
    watch: {
        imageUrl(newValue) {
            this.dialog = false; // Reset dialog state when prop changes
        },
    },
    methods: {
        showFullSize() {
            this.dialog = true; // Show the full-size image dialog
        },
    },
};
</script>