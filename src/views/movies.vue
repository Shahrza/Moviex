<template>
    <main id="col-main">
        <ul class="dashboard-genres-pro">
            <li v-for="(genre, index) in genres" :key="index">
                <h6>{{ genre.name }}</h6>
                <img
                    @click="changeGenre(genre.id, genre.name)"
                    :src="
                        '../../static/images/genres/' +
                            genre.name.toLowerCase() +
                            '.png'
                    "
                />
            </li>
        </ul>

        <div class="clearfix"></div>

        <div class="dashboard-container">
            <h4 class="heading-extra-margin-bottom">{{ genreName }}</h4>

            <div class="row">
                <MovieCard
                    v-show="!cantFound"
                    @click.native="overviewMovie(movie)"
                    v-for="(movie, index) in movies"
                    :key="index"
                    :image="
                        movie.backdrop_path
                            ? 'https://image.tmdb.org/t/p/w500/' +
                              movie.backdrop_path
                            : '../../static/images/unnamed.jpg'
                    "
                    :name="movie.title"
                    :imdb="movie.vote_average"
                />

                <h3 class="ml-3" v-show="cantFound">No results found for "{{ searchInput }}"</h3>
            </div>

            <paginate
                v-if="!cantFound"
                :page-count="page.allPage"
                :page-range="4"
                :click-handler="pagination"
                :prev-text="`<i class='fas fa-chevron-left'></i>`"
                :next-text="`<i class='fas fa-chevron-right'></i>`"
                :container-class="page.ulClass"
                :active-class="page.activePage"
                :page-class="page.linkClass"
            >
            </paginate>
        </div>
    </main>
</template>

<script>
    import bus from "../main";
    import axios from "axios";
    import paginate from "vuejs-paginate";

    import MovieCard from "@/components/MovieCard";

    export default {
        components: {
            MovieCard,
            paginate
        },
        data() {
            return {
                key: '2fcb73980db9cd248599953a2855498b',
                movies: [],
                genres: [],
                withGenre: '',
                genreName: 'Discover',
                cantFound: false,
                searchInput: null,
                year: '',
                card: false,
                page: {
                    ulClass: "page-numbers",
                    activePage: "current",
                    allPage: 0
                }
            };
        },
        methods: {
            pagination(page) {
                this.getList({page});
            },

            getList(query = {}) {
                return axios(`https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&year=${this.year}&with_genres=${this.withGenre}&page=`
                    + (query.page ? query.page : 1))
                    .then(res => {
                        this.movies = res.data.results;
                        this.page.allPage = res.data.total_pages;
                    })
                    .catch(err => console.log(err))
            },

            getGenreList() {
                return axios
                    .get(
                        `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}&language=en-US`
                    )
                    .then(res => {
                        this.genres = res.data.genres;
                    })
                    .catch(err => console.log(err))
            },

            overviewMovie(data) {
                if (this.card) {
                    this.$router.push({name: 'Overview', params: {id: data.id}})
                }
            },

            changeGenre(genreId, genreName) {
                this.withGenre = genreId;
                this.genreName = genreName;
                this.getList()
            }
        },
        mounted() {
            bus.$on('overview', data => {
                this.card = data
            })


            bus.$on("year", data => {
                this.year = parseInt(data);
                this.getList()
            });

            bus.$on("genreId", data => {
                this.withGenre = data;
                this.getList()
            });

            bus.$on('search', data => {
                this.searchInput = data;
                if (data) {
                     axios(
                        `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${data}&page=1&include_adult=false`
                    ).then(res => {
                        if (!res.data.results.length) {
                            this.cantFound = true
                        }
                        this.movies = res.data.results;

                    }).catch(err => console.log(err))

                } else if (data === '' || !data) {
                    this.cantFound = false;
                    this.getList()
                }
            });
        },
        created() {
            this.getList();
            this.getGenreList();
        }
    };
</script>

<style scoped>
    .current a {
        background-color: rgb(66, 183, 64) !important;
        color: #fff !important;
    }
</style>
