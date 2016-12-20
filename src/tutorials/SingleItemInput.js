import ImageInput from './components/ImageInput';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        Single item input
                    </h3>
                    <h4 class="subtitle is-4">Open a image input</h4>
                    <p>We have created a image input with the logic of the @lassehaslev/vue-item-input</p>
                    <br>

                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">

        <div class="container is-fluid">
            <div class="columns is-mobile">
                <div class="column is-3">
                    <image-input url="https://jsonplaceholder.typicode.com/photos?limit=10"
                        name="image"
                        ref="imageInput"></image-input>
                </div>
            </div>
        </div>
                </div>
            </section>
        </div>
    `,

    components: {
        ImageInput,
    }
}
