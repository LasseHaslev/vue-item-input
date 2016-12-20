export default {

    props: {
        name: {
            type: String,
            default: null,
        },
        'value-id': {
            type: Function,
            default( value ) {
                return value.id;
            }
        },
    },

    computed: {
        ids() {
            var self = this;
            return this.itemValues.filter( function( value ) {
                return value != undefined;
            } ).map( function( value ) {
                return self.valueId( value );
            } );
        },
    },

}
