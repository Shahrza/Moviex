<template>
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="item-listing-container-skrn card-hover">
            <img @click="overview(item)" :src="item.backdrop_path ? 'https://image.tmdb.org/t/p/w500/' +
                              item.backdrop_path
                            : '../../static/images/unnamed.jpg'" alt="Listing"/>
            <div class="item-listing-text-skrn">
                <div class="item-listing-text-skrn-vertical-align">
                    <h6>
                        <div href="#!" v-text="item.title || item.name"></div>
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
                        <a><i v-if="$route.path !== '/favorites'" @click="addFavourite(item.id, $event)" :data-type="item.isFavorite ? 'remove' : 'add'"
                              :class="item.isFavorite ? 'fa fa-heart' : 'far fa-heart'"
                              style="color: #ff0000;font-size: 20px; margin: 5px 0px 0 0;"></i></a>
                        <span :class="$route.path === '/favorites' ? 'ml-0' : ''" style="color:#42b740;margin-left: 20px" v-text="item.vote_average"></span>
                        <img @click="deleteFavorite(item.id)" v-if="this.$route.path === '/favorites'" style="width: 20px;height: 30px; margin-left: 40px; color: red" src="../../static/images/trash.svg" alt="">
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
    import Swal from'sweetalert2'

    export default {
        props: {
            route: null,
            item: {
                required: true,
                type: Object,
            }
        },
        data() {
            return {}
        },
        methods: {
            overview(item) {
                this.$router.push({name: 'Overview', params: {id: item.id}, query: {route: this.route}});
            },

            deleteFavorite(data){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        const favorites = JSON.parse(localStorage.getItem('favorites'));
                        const filtered = favorites.filter(fav => fav.id !== data);
                        localStorage.setItem('favorites', JSON.stringify(filtered));
                        window.location.reload()
                    }
                })

            },

            addFavourite(id, event) {
                const obj = $(event.target);
                const type = obj.attr('data-type');
                const favorites = localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
                const findIndex = favorites.find(i => parseInt(i.id) === parseInt(id));
                if (type === 'add' && !findIndex) {
                    obj.removeClass('far');
                    obj.addClass('fa');
                    obj.attr('data-type', 'remove');
                    favorites.push({id: id, route: this.$route.path});
                    localStorage.favorites = JSON.stringify(favorites);
                } else if (findIndex) {
                    obj.removeClass('fa');
                    obj.addClass('far');
                    obj.attr('data-type', 'add');
                    favorites.splice(findIndex, 1);
                    localStorage.favorites = JSON.stringify(favorites);
                }
            },
        },
    };

</script>

<style scoped>
    .card-hover:hover {
        cursor: pointer;
    }
</style>
