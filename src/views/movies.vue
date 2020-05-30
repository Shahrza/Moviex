<template>
    <main id="col-main">
        <ul class="dashboard-genres-pro">
            <li v-for="(genre, index) in genres" :key="index">
                <h6>{{ genre.name }}</h6>
                <img
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
            <h4 class="heading-extra-margin-bottom">Drama</h4>

            <div class="row">
                <Movie-Card
                    v-for="(movie, index) in filteredMovies"
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
            </div>

            <paginate
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
            searchInput: null,
            page: {
                ulClass: "page-numbers",
                activePage: "current",
                allPage: 0
            }
        };
    },
    methods: {
        pagination(page) {
            this.getList({ page });
        },
        getList(query = {}) {
            return axios
                .get(
                    "https://api.themoviedb.org/3/discover/movie?api_key=" +
                        this.key +
                        "&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=" +
                        (query.page ? query.page : 1)
                )
                .then(res => {
                    this.movies = res.data.results;
                    this.page.allPage = res.data.total_pages;
                });
        },

        getGenreList() {
            return axios
                .get(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.key}&language=en-US`
                )
                .then(res => {
                    this.genres = res.data.genres;
                });
        },
        // getGenre() {
        //     bus.$on("genreId", data => {
        //         console.log(data);
        //         for (let i = 0; i < this.movies.length; i++) {
        //             if (this.movies[i].genre_ids.includes(data)) {
        //                 console.log(this.movies[i]);
        //
        //                 this.movies = this.movies[i];
        //             }
        //         }
        //     });
        // }
    },
    mounted() {
        bus.$on('search', data => {
            this.searchInput = data
        });
    },
    computed: {
        // filteredMovies(){
        //     if(this.searchInput){
        //         return this.movies.filter(movie => {
        //             return movie.title.toLowerCase().includes(this.searchInput.toLowerCase())
        //         })
        //     } else {
        //         return this.movies
        //     }
        //
        // }
        filteredMovies(){
            if(this.searchInput){
                return axios
                    .get(
                        `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&language=en-US&query=${this.searchInput}&page=1&include_adult=false`
                    ).then(res => {
                        console.log(res)
                        this.movies = res.data.results;
                        console.log(this.movies)
                    });
            } else {
                return this.movies
            }

        }
    },
    created() {
        this.getList();
        this.getGenreList();
        // this.getGenre();
    }
};
</script>

<style scoped>
.current a {
    background-color: rgb(66, 183, 64) !important;
    color: #fff !important;
}
</style>
