export default {

    props: {
        values: {
            default() {
                return [];
            },
        },
    },

    data() {
        return {
            inputImages: [],
        };
    },

    methods: {
        addEmptyValue() {
            this.addValue( null );
        },

        selectValue( item ) {
            this.addValue( item );
        },

        addValue( item ) {
            this.values.push(null);
        },
    },

}
