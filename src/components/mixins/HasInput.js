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
            return this.values.map( function( value ) {
                return self.valueId( value );
            } );
        },
    },

}
