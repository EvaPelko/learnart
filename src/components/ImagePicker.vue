<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card outlined elevation="1">
                    <croppa v-model="myCroppa" :width="400" :height="400" :canvas-color="'default'"
                        :placeholder="'Choose an image'" :placeholder-font-size="0" :placeholder-color="'default'"
                        :accept="'image/*'" :file-size-limit="0" :quality="2" :zoom-speed="3" :disabled="false"
                        :disable-drag-and-drop="false" :disable-click-to-choose="false" :disable-drag-to-move="false"
                        :disable-scroll-to-zoom="false" :disable-rotation="false" :prevent-white-space="false"
                        :reverse-scroll-to-zoom="false" :show-remove-button="true" :remove-button-color="'red'"
                        :remove-button-size="0" :initial-image="'path/to/initial-image.png'" @init="handleCroppaInit"
                        @file-choose="handleCroppaFileChoose" @file-size-exceed="handleCroppaFileSizeExceed"
                        @file-type-mismatch="handleCroppaFileTypeMismatch" @new-image-drawn="handleNewImage"
                        @image-remove="handleImageRemove" @move="handleCroppaMove" @zoom="handleCroppaZoom"></croppa>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

export default {
    name: "Image-Picker",
    data() {
        return {
            
        }
    },
    methods: {
        handleNewImage(){
            debugger;
            if (!this.myCroppa.hasImage){
                console.log("No Image");
                return;
            }
        }
    },
}

<script></script>