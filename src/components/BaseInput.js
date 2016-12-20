export default {

    props: {
        value: {
            default: [],
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

        onSelect( item ) {
            this.addValue( item );
        },

        addValue( item ) {
            this.value.push(null);
        },
    },

}
