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
                                <option v-for="year in 83" :value="year+1939">{{year+1939}}</option>
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
                        <a href="" @click="reset" class="btn">Reset</a>
                    </div>
                    <!-- close #video-search-header-buttons -->
                </form>
                <!-- #video-search-header-filtering-padding -->
            </div>
            <!-- close #video-search-header-filtering -->
        </div>
        <!-- close .video-search-header -->
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
            },
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
                } else {
                    return
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
