export default {

    props: {
        name: {
            type: String,
            default: null,
        }
    },

    computed: {
        ids() {
            return this.values.map( function( value ) {
                return value.id;
            } );
        },
    },

}
