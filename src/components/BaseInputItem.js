export default {

    props: {
        value: {
            default: null,
            required: true,
        }
    },

    methods: {
        selectItem(item) {
            this.value = item;
            this.$emit( 'select-item', item );
        },
    },

}
