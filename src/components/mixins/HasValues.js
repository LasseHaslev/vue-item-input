export default {
    props: {
        values: {
            default() {
                return [];
            },
        },
    },

    computed: {
        values() {
            return this.itemValues.filter( function( value ) {
                return value != undefined;
            } );
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
            this.$emit( 'changed', this.itemValues );
        },

        addValue( item ) {
            this.itemValues.push(null);
        },
    },
}
