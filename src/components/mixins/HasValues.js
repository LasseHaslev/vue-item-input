export default {
    props: {
        values: {
            default: null,
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
        pureValues() {
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

    created() {
        this.itemValues = this.values;

        if ( !this.multiple ) { 
            this.itemValues = [ this.values ];
        }
    },

    methods: {
        addEmptyValue() {
            this.addValue( null );
        },

        selectValue( item, index ) {
            this.$set( this.itemValues, index, item );
            if ( this.multiple ) {
                this.$emit( 'changed', this.itemValues );
            }
            else {
                this.$emit( 'changed', this.itemValues[0] );
            }
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
