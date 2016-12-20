import { BaseInputItem } from '../../index';
import ImagePicker from './ImagePicker';
export default {
    template: `
            <div>
                <div @click="open" 
                    style="
                        padding-bottom: 100%
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-color: #ccc;
                        cursor: pointer;
                        " :style="{
                            'background-image': value ? 'url(' + value.url + ')' : ''
                        }">
                </div>
                <image-picker url="https://jsonplaceholder.typicode.com/photos?limit=10"
                :items-adaptor="imagesAdaptor"
                :item-adaptor="imageAdaptor"
                @confirm="selectItem"
                ref="imagePicker"></image-picker>

                <button @click="remove" class="button is-danger is-fullwidth">Remove</button>
            </div>
    `,

    mixins: [ BaseInputItem ],

    methods: {
        open() {
            this.$refs.imagePicker.open();
        },
        imagesAdaptor( images ) {
            // return images;
            return images.slice( 0, 20 );
        },
        imageAdaptor( image ) {
            return {
                id: image.id,
                url: image.url,
            };
        },
    },


    components: {
        ImagePicker,
    }
}
