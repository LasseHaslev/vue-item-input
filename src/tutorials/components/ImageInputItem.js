import { BaseInputItem } from '../../index';
import ImagePicker from './ImagePicker';
export default {
    template: `
            <div>
                <div @click="open" style="padding-bottom: 100%" :style="{
                    'background-image': value ? 'url(' + value.url + ')' : false,
                    'background-size':'contain',
                    'background-position':'center',
                    'background-repeat': 'no-repeat',
                    'background-color': '#ccc',
                    'cursor':'pointer',
                }">
                </div>
                <image-picker url="https://jsonplaceholder.typicode.com/photos?limit=10"
                :items-adaptor="imagesAdaptor"
                :item-adaptor="imageAdaptor"
                @confirm="selectItem"
                ref="imagePicker"></image-picker>
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
