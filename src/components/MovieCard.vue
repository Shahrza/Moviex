<template>
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="item-listing-container-skrn card-hover">
            <img @click="overview" :src="image" alt="Listing"/>
            <div class="item-listing-text-skrn">
                <div class="item-listing-text-skrn-vertical-align">
                    <h6>
                        <div href="#!" v-text="name"></div>
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
                        <a><i class="fa fa-heart" style="color: #ff0000;font-size: 20px; margin: 5px 0px 0 0;"></i></a>
                        <span style="color:#42b740;margin-left: 20px" v-text="imdb"></span>
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
    import bus from "../main";

    export default {
    props: ["image", "name", "imdb"],
    methods: {
        overview() {
            bus.$emit('overview', true)
        }
    }
};

</script>

<style scoped>
    .card-hover:hover{
        cursor: pointer;
    }
</style>
