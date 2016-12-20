import { BaseInput } from '../../index';
import ImageInputItem from './ImageInputItem';
export default {
    template:`
        <div class="columns is-mobile is-multiline">
            <div v-for="value in values" class="column is-2">
                <image-input-item @select-value="selectValue" :value="value"></image-input-item>
            </div>
            <div class="column is-2" style="cursor:pointer;">
                <div style="background-color:blue; padding-bottom: 100%" @click="addEmptyValue"></div>
            </div>
        </div>
    `,

    mixins: [ BaseInput ],

    components: {
        ImageInputItem,
    }
}
