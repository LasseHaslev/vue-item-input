export default {
    props: {
        values: {
            default() {
                return [];
            },
        },
        'value-id': {
            type: Function,
            default( value ) {
                return value.id;
            }
        },

        multiple: {
            type: Boolean,
            default: false,
        }
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
        if (!this.multiple) {
            this.addEmptyValue();
        }
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

        zeroOut( index ) {
            this.$set( this.itemValues, index, null );
        },

        remove( index ) {
            this.itemValues.splice( index, 1 );
        }
    },
}
