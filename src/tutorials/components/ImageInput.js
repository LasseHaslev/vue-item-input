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
        <image-input-item v-else @remove="remove" @select="selectValue" :value="itemValues"></image-input-item>
        <input-element :name="name" :values="ids"></input-element>
    </div>
    `,

    mixins: [ BaseInput ],

    components: {
        ImageInputItem,
        InputElement,
    }
}
