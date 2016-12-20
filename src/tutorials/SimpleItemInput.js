import ImageInput from './components/ImageInput';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        Image picker
                    </h3>
                    <h4 class="subtitle is-4">Open a image picker</h4>
                    <p>We have created a image picker with the logic of the @lassehaslev/vue-item-picker</p>
                    <br>

                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">

        <div class="container is-fluid">
            <image-input url="https://jsonplaceholder.typicode.com/photos?limit=10"
                :values="[null]"
                ref="imageInput"></image-input>
        </div>
                </div>
            </section>
        </div>
    `,

    components: {
        ImageInput,
    }
}
