<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-item-input">
                        @lassehaslev/vue-item-input
                    </a>
                </h3>
            </div>
        </section>

        <single-item-input></single-item-input>
        <multiple-item-input></multiple-item-input>

        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container is-fluid">
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import MultipleItemInput from './tutorials/MultipleItemInput';
import SingleItemInput from './tutorials/SingleItemInput';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        MultipleItemInput,
        SingleItemInput,
    }
}
</script>
