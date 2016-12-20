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
