<template>
    <header id="videohead-pro" class="sticky-header">
        <div id="video-logo-background">
            <router-link to="/" tag="a"
            ><h2 style="margin: 22px 20px">Moviex</h2>
            </router-link>
        </div>

        <div id="video-search-header">
            <i id="search-icon-more" class="fas fa-filter"></i>
            <input
                v-model="search"
                type="text"
                placeholder="Search for Movies or TV Series"
                aria-label="Search"
            />
            <div id="video-search-header-filtering">
                <form id="video-search-header-filtering-padding">
                    <div class="row">
                        <div class="col-sm extra-padding">
                            <h5>Type:</h5>

                            <div class="row">
                                <div class="col-sm">
                                    <label class="checkbox-pro-container"
                                    >Movies
                                        <input
                                            checked
                                            type="radio"
                                            id="movies-type"
                                            name="movie-type"
                                            value="movie"
                                        />
                                        <span class="checkmark-pro"></span>
                                    </label>

                                    <label class="checkbox-pro-container"
                                    >TV Series
                                        <input
                                            type="radio"
                                            id="tv-type"
                                            name="movie-type"
                                            value="tv"
                                        />
                                        <span class="checkmark-pro"></span>
                                    </label>
                                </div>
                                <!-- close .col -->
                            </div>
                            <!-- close .row -->

                            <div class="dotted-dividers-pro"></div>
                        </div>
                        <!-- close .col -->
                        <div class="col-sm extra-padding">
                            <h5>Genres:</h5>
                            <select class="custom-select" v-model="genreId">
                                <option
                                    v-for="(genre, index) in genres"
                                    :key="index"
                                    :value="genre.id"
                                >
                                    {{genre.name}}
                                </option>
                            </select>
                            <div class="dotted-dividers-pro"></div>
                        </div>
                        <!-- close .col -->
                        <div class="col-sm extra-padding">
                            <h5>Year:</h5>
                            <select class="custom-select" v-model="year">
                                <option v-for="year in 125" :value="year+1899">{{year+1899}}</option>
                            </select>
                            <div class="dotted-dividers-pro"></div>
                        </div>
                        <!-- close .col -->
                    </div>
                    <!-- close .row -->
                    <div id="video-search-header-buttons">
                        <a href="#" @click="select" class="btn btn-green-pro"
                        >Filter Search</a
                        >
                        <a @click="reset" class="btn">Reset</a>
                    </div>
                    <!-- close #video-search-header-buttons -->
                </form>
                <!-- #video-search-header-filtering-padding -->
            </div>
            <!-- close #video-search-header-filtering -->
        </div>
        <!-- close .video-search-header -->

        <div id="mobile-bars-icon-pro" class="noselect">
            <i class="fas fa-bars"></i>
        </div>

        <div id="header-user-profile">
            <div id="header-user-profile-click" class="noselect">
                <i class="fas fa-user mr-1 mt-1" style="font-size: 20px" ></i>
                <div id="header-username">John Doe</div>
                <i class="fas fa-angle-down"></i>
            </div>
            <!-- close #header-user-profile-click -->
            <div id="header-user-profile-menu">
                <ul>
                    <li>
                        <a href="dashboard-profile.html"
                        ><span class="icon-User"></span>My Profile</a
                        >
                    </li>
                    <li>
                        <a href="dashboard-favorites.html"
                        ><span class="icon-Favorite-Window"></span>My Favorites</a
                        >
                    </li>
                    <li>
                        <a href="index.html"
                        ><span class="icon-Power-3"></span>Log Out</a
                        >
                    </li>
                </ul>
            </div>
            <!-- close #header-user-profile-menu -->
        </div>
        <!-- close #header-user-profile -->

        <div class="clearfix"></div>

        <nav id="mobile-navigation-pro">
            <ul id="mobile-menu-pro">
                <li>
                    <a href="dashboard-home.html">
                        <span class="icon-Old-TV"></span>
                        TV Series
                    </a>
                </li>

                <li></li>
                <li>
                    <a href="dashboard-movies.html">
                        <span class="icon-Reel"></span>
                        Movies
                    </a>
                </li>
                <li class="current-menu-item">
                    <a href="dashboard-playlists.html">
                        <span class="icon-Movie"></span>
                        Playlists
                    </a>
                </li>
                <li>
                    <a href="dashboard-new-arrivals.html">
                        <span class="icon-Movie-Ticket"></span>
                        New Arrivals
                    </a>
                </li>
                <li>
                    <a href="dashboard-coming-soon.html">
                        <span class="icon-Clock"></span>
                        Coming Soon
                    </a>
                </li>
                <li>
                    <a href="#!">
                        <i class="far fa-bell"></i>
                        <span class="user-notification-count">3</span>
                        Notifications
                    </a>
                </li>
            </ul>
            <div class="clearfix"></div>

            <div id="search-mobile-nav-pro">
                <input
                    type="text"
                    placeholder="Search for Movies or TV Series"
                    aria-label="Search"
                />
            </div>
        </nav>
    </header>
</template>

<script>
    import axios from "axios";
    import bus from "../main";

    export default {
        name: "Header",
        components: {},
        data() {
            return {
                key: '2fcb73980db9cd248599953a2855498b',
                page: '',
                genres: [],
                genre: null,
                genreId: '',
                year: '',
                link: null,
                search: '',
            };
        },
        methods: {
            select() {
                bus.$emit("genreId", this.genreId);
                bus.$emit("year", this.year);
            },

            reset() {
                window.location.reload()
            }

        },
        watch: {
            'search': (data) => {
                bus.$emit('search', data)
            },
            '$route': function(data){
                if (data.path === "/tv-series") {
                    this.page = "https://api.themoviedb.org/3/genre/tv/list?api_key=";
                } else if (data.path === "/") {
                    this.page = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
                }

                axios.get(this.page + this.key + "&language=en-US")
                    .then(res => {
                    this.genres = res.data.genres;
                });
            }
        },
    };
</script>

<style scoped></style>
