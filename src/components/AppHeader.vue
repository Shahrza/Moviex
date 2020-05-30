<template>
    <header id="videohead-pro" class="sticky-header">
        <div id="video-logo-background">
            <a href="dashboard-home.html"
                ><h2 style="margin: 22px 20px">Moviex</h2>
            </a>
        </div>

        <div id="video-search-header">
            <img
                id="search-icon-more"
                src="../../static/icons/fontawesome/webfonts/magnifying-glass.svg"
                alt=""
            />
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
                                            type="checkbox"
                                            checked="checked"
                                            id="movies-type"
                                        />
                                        <span class="checkmark-pro"></span>
                                    </label>

                                    <label class="checkbox-pro-container"
                                        >TV Series
                                        <input type="checkbox" id="tv-type" />
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
                            <select class="custom-select" v-model="genre">
                                <option
                                    v-for="(genre, index) in genres"
                                    :key="index"
                                >
                                    {{ genre.name }}
                                </option>
                            </select>
                            <div class="dotted-dividers-pro"></div>
                        </div>
                        <!-- close .col -->
                        <div class="col-sm extra-padding">
                            <h5>Country:</h5>
                            <select class="custom-select">
                                <option selected>All Countries</option>
                                <option value="1">Argentina</option>
                                <option value="2">Australia</option>
                                <option value="3">Bahamas</option>
                                <option value="4">Belgium</option>
                                <option value="5">Brazil</option>
                                <option value="6">Canada</option>
                                <option value="7">Chile</option>
                                <option value="8">China</option>
                                <option value="9">Denmark</option>
                                <option value="10">Ecuador</option>
                                <option value="11">France</option>
                                <option value="12">Germany</option>
                                <option value="13">Greece</option>
                                <option value="14">Guatemala</option>
                                <option value="15">Italy</option>
                                <option value="16">Japan</option>
                                <option value="17">asdfasdf</option>
                                <option value="18">Korea</option>
                                <option value="19">Malaysia</option>
                                <option value="20">Monaco</option>
                                <option value="21">Morocco</option>
                                <option value="22">New Zealand</option>
                                <option value="23">Panama</option>
                                <option value="24">Portugal</option>
                                <option value="25">Russia</option>
                                <option value="26">United Kingdom</option>
                                <option value="27">United States</option>
                            </select>
                            <div class="dotted-dividers-pro"></div>
                        </div>
                        <!-- close .col -->
                        <div class="col-sm extra-padding extra-range-padding">
                            <h5>Average Rating:</h5>
                            <input
                                class="range-example-rating-input"
                                type="text"
                                min="0"
                                max="10"
                                value="4,10"
                                step="1"
                            />
                            <!-- JS is under /js/script.jss -->
                        </div>
                        <!-- close .col -->
                    </div>
                    <!-- close .row -->
                    <div id="video-search-header-buttons">
                        <a href="#" @click="select" class="btn btn-green-pro"
                            >Filter Search</a
                        >
                        <a href="#!" class="btn">Reset</a>
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
                <img
                    src="../../static/images/demo/user-profile.jpg"
                    alt="Suzie"
                />
                <div id="header-username">Suzie Smith</div>
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
                            ><span class="icon-Favorite-Window"></span>My
                            Favorites</a
                        >
                    </li>
                    <li>
                        <a href="dashboard-account.html"
                            ><span class="icon-Gears"></span>Account Details</a
                        >
                    </li>
                    <li>
                        <a href="#!"
                            ><span class="icon-Life-Safer"></span
                            >Help/Support</a
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
            genres: [],
            genre: null,
            genreId: null,
            search: '',
        };
    },
    methods: {
        select() {
            for (let i = 0; i < this.genres.length; i++) {
                if (this.genre == this.genres[i].name) {
                    this.genreId = this.genres[i].id;
                    bus.$emit("genreId", this.genreId);
                }
            }
        }
    },
    watch: {
      'search': function (data) {
          bus.$emit('search', data)
      }
    },
    created() {
        let link;

        // if (this.$route.path === "/tv-series") {
        //     link = "https://api.themoviedb.org/3/genre/tv/list?api_key=";
        // } else if (this.$route.path === "/") {
            link = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
        // }

        let key = "2fcb73980db9cd248599953a2855498b";
        return axios.get(link + key + "&language=en-US").then(res => {
            this.genres = res.data.genres;
        });
    }
};
</script>

<style></style>
