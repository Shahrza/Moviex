<template>
    <div>
        <div id="content-sidebar-pro">

            <div class="content-sidebar-section">
                <h2 class="content-sidebar-sub-header">{{ movie.title || movie.name }}</h2>
                <ul class="progression-studios-slider-rating">
                    <li>PG-13</li>
                    <li>HD</li>
                </ul>
            </div><!-- close .content-sidebar-section -->

            <div class="content-sidebar-section">
                <h4 class="content-sidebar-sub-header">Release Date</h4>
                <div class="content-sidebar-short-description">{{ movie.release_date || movie.first_air_date }}</div>
            </div><!-- close .content-sidebar-section -->

            <div class="content-sidebar-section">
                <h4 class="content-sidebar-sub-header">Length</h4>
                <div class="content-sidebar-short-description">{{ movie.runtime ? movie.runtime : movie.episode_run_time }} min</div>
            </div><!-- close .content-sidebar-section -->

            <div class="content-sidebar-section">
                <h4 class="content-sidebar-sub-header">Genres</h4>
                <div class="content-sidebar-short-description" v-for="genre in movie.genres">{{ genre.name }}</div>
            </div><!-- close .content-sidebar-section -->

            <div class="content-sidebar-section">
                <h4 class="content-sidebar-sub-header">Budget</h4>
                <div class="content-sidebar-short-description">{{ movie.budget }}$</div>
            </div><!-- close .content-sidebar-section -->

            <div class="content-sidebar-section">
                <h4 class="content-sidebar-sub-header">Revenue</h4>
                <div class="content-sidebar-short-description">{{ movie.revenue }}$</div>
            </div><!-- close .content-sidebar-section -->

            <div class="content-sidebar-section">
                <h4 class="content-sidebar-sub-header">User Rating</h4>
                <div class="content-sidebar-short-description">{{ movie.vote_average }}</div>
            </div><!-- close .content-sidebar-section -->


        </div>
        <main id="col-main-with-sidebar">

                <img id="movie-detail-header-pro" :src="movie.backdrop_path
                                ? 'https://image.tmdb.org/t/p/w500/' +
                                  movie.backdrop_path
                                : '../../static/images/unnamed.jpg'" alt="Movie Poster">


            <div id="movie-detail-rating">
                <div class="dashboard-container">
                    <div class="row">
                        <div class="col-sm">
                            <h5>Rate {{ movie.title }}</h5>

                            <div class="rating-pro">
                                <label>
                                    <input type="radio" name="rating-pro" value="10" title="10 stars"> 10
                                </label>
                                <label>
                                    <input type="radio" name="rating-pro" value="9" title="9 stars"> 9
                                </label>
                                <label>
                                    <input type="radio" name="rating-pro" value="8" title="8 stars"> 8
                                </label>
                                <label>
                                    <input type="radio" name="rating-pro" value="7" title="7 stars"> 7
                                </label>
                                <label>
                                    <input type="radio" name="rating-pro" value="6" title="6 stars"> 6
                                </label>
                                <label>
                                    <input type="radio" name="rating-pro" value="5" title="5 stars"> 5
                                </label>
                                <label>
                                    <input type="radio" name="rating-pro" value="4" title="4 stars"> 4
                                </label>
                                <label>
                                    <input type="radio" name="rating-pro" value="3" title="3 stars"> 3
                                </label>
                                <label>
                                    <input type="radio" name="rating-pro" value="2" title="2 stars"> 2
                                </label>
                                <label>
                                    <input type="radio" name="rating-pro" value="1" title="1 star"> 1
                                </label>
                            </div>

                        </div>
                    </div><!-- close .row -->
                </div><!-- close .dashboard-container -->
            </div><!-- close #movie-detail-rating -->

            <div class="dashboard-container">


                <div class="movie-details-section">
                    <h2>Overview</h2>
                    <p>{{ movie.overview }}</p>
                </div><!-- close .movie-details-section -->

            </div><!-- close .dashboard-container -->
        </main>

    </div>
</template>

<script>
    import bus from "../main";
    import axios from "axios";

    export default {
        name: "overview",
        data() {
            return {
                key: '2fcb73980db9cd248599953a2855498b',
                movie: {},
            }
        },
        mounted() {
            if(this.$route.params.route === 'movie'){
                axios(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${this.key}&language=en-US`)
                    .then(res => {
                        this.movie = res.data
                    }).catch(err => console.log(err))
            } else if (this.$route.params.route === 'tv') {
                axios(`https://api.themoviedb.org/3/tv/${this.$route.params.id}?api_key=${this.key}&language=en-US`)
                    .then(res => {
                        this.movie = res.data
                    }).catch(err => console.log(err))
            }

        },

    }
</script>

<style scoped>

</style>
