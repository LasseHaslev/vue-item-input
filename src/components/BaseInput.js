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
        ids() {
            return this.values.map( function( value ) {
                return value.id;
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
