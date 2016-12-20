export default {

    props: {
        name: {
            type: String,
            required: true,
        },
        values: {
            type: Array,
            required: true,
        },
        showInput: {
            type: Boolean,
            default: true,
        },
    },

}
