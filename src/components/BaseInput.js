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
            itemValues: [],
        };
    },

    mounted() {
        this.itemValues = this.values;
    },

    methods: {
        addEmptyValue() {
            this.addValue( null );
        },

        selectValue( item, index ) {
            this.$set( this.itemValues, index, item );
        },

        addValue( item ) {
            this.itemValues.push(null);
        },
    },

}
