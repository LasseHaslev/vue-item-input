import { BaseInput } from '../../index';
import { InputElement } from '../../index';
import ImageInputItem from './ImageInputItem';

export default {
    template:`
    <div>
        <div class="columns is-mobile is-multiline">
            <div v-for="( value, index ) in itemValues" class="column is-2">
        <pre>
        </pre>
                <image-input-item @remove="remove" @select="selectValue" :index="index" :value="value"></image-input-item>
            </div>
            <div class="column is-2" style="cursor:pointer;">
                <div style="background-color:blue; padding-bottom: 100%" @click="addEmptyValue"></div>
            </div>
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
