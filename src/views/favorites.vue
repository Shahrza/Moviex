<template>
    <main id="col-main">

        <div class="dashboard-container">
            <h2 class="heading-extra-margin-bottom my-4">Favorites</h2>

            <div class="row">

                <h3 class="text-secondary pt-5 pl-3"  v-if="!movies.length">Your list is empty. Explore more and pick your favourites!</h3>

                <MovieCard
                    v-if="!cantFound"
                    @click.native="overviewMovie(movie)"
                    v-for="(movie, index) in movies"
                    :key="index"
                    :item="movie"
                />

            </div>
        </div>
    </main>
</template>

<script>
    import bus from "../main";
    import axios from "axios";
    import paginate from "vuejs-paginate";

    import MovieCard from "@/components/MovieCard";

    export default {
        name: "favorites",
        components: {
            MovieCard,
            paginate
        },
        data() {
            return {
                key: 'YOUR_KEY',
                movies: [],
                cantFound: false,
                card: false,
            }
        },
        methods: {
            overviewMovie(data) {
                let route;
                if(data.episode_run_time){
                    route = 'tv'
                } else {
                    route = 'movie'
                }
                if (this.card) {
                    this.$router.push({name: 'Overview', params: {id: data.id, route: route}})
                }
            },
        },
        mounted() {
            bus.$on('overview', data => {
                this.card = data
            });


            let movieIds = JSON.parse(localStorage.getItem('favorites'))

            for (let data of movieIds) {
                if (data.route === '/') {
                    axios('https://api.themoviedb.org/3/movie/' + data.id + '?api_key=' + this.key + '&language=en-US')
                        .then(res => {
                            this.movies.push(res.data)
                        }).catch(err => console.log(err))
                } else if (data.route === '/tv-series') {
                    axios('https://api.themoviedb.org/3/tv/' + data.id + '?api_key=' + this.key + '&language=en-US')
                        .then(res => {
                            this.movies.push(res.data)
                        }).catch(err => console.log(err))
                }
            }

        }
    }
</script>

<style scoped>

</style>
