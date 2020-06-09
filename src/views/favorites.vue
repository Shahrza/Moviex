<template>
    <main id="col-main">

        <div class="dashboard-container">
            <h2 class="heading-extra-margin-bottom my-4">Favorites</h2>

            <div class="row">

                <MovieCard
                    v-show="!cantFound"
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
                key: '2fcb73980db9cd248599953a2855498b',
                movies: [],
                movieIds: [],
                tvIds: [],
                cantFound: false
            }
        },
        methods: {
            overviewMovie(data) {
                if (this.card) {
                    this.$router.push({name: 'Overview', params: {id: data.id}})
                }
            },
        },
        mounted() {
            let movieIds = JSON.parse(localStorage.getItem('favorites'))
            let movieRoute = movieIds.map(data => data.route)
            this.movieIds = movieIds.map(data => data.id)

            for (let route of movieRoute) {
                console.log(route)
                if (route === "/") {
                    for (let data of this.movieIds) {
                         axios('https://api.themoviedb.org/3/movie/' + data + '?api_key=' + this.key + '&language=en-US')
                            .then(res => {
                                this.movies.push(res.data)
                            }).catch(err => console.log(err))
                    }
                } else if (route === "/tv-series") {
                    for (let data of this.movieIds) {
                         axios('https://api.themoviedb.org/3/tv/' + data + '?api_key=' + this.key + '&language=en-US')
                            .then(res => {
                                this.movies.push(res.data)
                            }).catch(err => console.log(err))
                    }

                } else {
                    console.log('no')
                }
            }


        }

    }
</script>

<style scoped>

</style>
