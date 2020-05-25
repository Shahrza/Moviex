<template>
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="item-listing-container-skrn">
            <a target="_blank" href="#!"><img :src="image" alt="Listing"/></a>
            <div class="item-listing-text-skrn">
                <div class="item-listing-text-skrn-vertical-align">
                    <h6>
                        <a href="#!" v-text="name"></a>
                    </h6>
                    <div
                        class="circle-rating-pro"
                        data-value="0.86"
                        data-animation-start-value="0.86"
                        data-size="32"
                        data-thickness="3"
                        data-fill='{"color": "#42b740"}'
                        data-empty-fill="#def6de"
                        data-reverse="true"
                    >
                        <canvas width="32" height="32"></canvas>
                        <span style="color:#42b740;" v-text="imdb"></span>
                    </div>
                </div>
                <!-- close .item-listing-text-skrn-vertical-align -->
            </div>
            <!-- close .item-listing-text-skrn -->
        </div>
        <!-- close .item-listing-container-skrn -->
    </div>
</template>

<script>
export default {
    props: ["image", "name", "imdb"]
};
</script>

<style></style>
