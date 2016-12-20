# @lassehaslev/vue-item-input
> Vue 2 form item logic for selecting custom objects

## Install
Run ```npm install @lassehaslev/vue-item-input --save``` in your project folder

## Usage
This package is divided into two main modules. ```BaseInput``` and ```BaseInputItem```

I am in the middle of a deadline, so I dont got time to write a good documentation today.

Please check out the [ the source ](https://github.com/LasseHaslev/vue-item-input/tree/master/src/tutorials/components) for documentation in anticipation of a better documentation,
of how to make use of this simple, but yet powerful component.

**Happy coding**


#### Base input
```js
import { BaseInput } from '../../index';
import { InputElement } from '../../index';
import ImageInputItem from './ImageInputItem';

export default {
    template:`
    <div>
        <div v-if="multiple" class="columns is-mobile is-multiline">
            <div v-for="( value, index ) in itemValues" class="column is-2">
                <image-input-item @select="selectValue" :index="index" :value="value"></image-input-item>

                <button @click="remove( index )" class="button is-danger is-fullwidth">Remove</button>
            </div>
            <div class="column is-2" style="cursor:pointer;">
                <div style="background-color:blue; padding-bottom: 100%" @click="addEmptyValue"></div>
            </div>
        </div>
        <div v-else v-for="( value, index ) in itemValues">
            <image-input-item @select="selectValue" :index="index" :value="value"></image-input-item>
            <button @click="zeroOut( index )" class="button is-warning is-fullwidth">Empty value</button>
        </div>
        <input-element :name="name" :values="ids"></input-element>
    </div>
    `,

    mixins: [ BaseInput ],

    components: {
        ImageInputItem,
        InputElement,
    }
}
```
#### Base input item
```js
import { BaseInputItem } from '../../index';
import ImagePicker from './ImagePicker';
export default {
    template: `
            <div>
                <div @click="open" 
                    style="
                        padding-bottom: 100%;
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
```


## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
