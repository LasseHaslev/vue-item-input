import BaseInputElement from './mixins/BaseInputElement';

export default {

    template: `
    <div v-if="showInput">
        <p class="control is-fullwidth">
            <div class="select is-fullwidth">
                <select :name="name" multiple>
                    <option v-for="value in values" :value="value" selected>{{ value }}</option>
                </select>
            </div>
        </p>
    </div>
    <div v-else style="position:absolute; top: -99999px; left: -99999px">
        <select :name="name" multiple>
            <option v-for="value in values" :value="value" selected>{{ value }}</option>
        </select>
    </div>
    `,

    mixins: [ BaseInputElement ],

}
