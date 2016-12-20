export default {

    props: {
        value: {
            default: null,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },

    methods: {
        selectItem(item) {
            this.$emit( 'select', item, this.index );
        },
    },

}
