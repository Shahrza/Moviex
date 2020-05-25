<template>
    <nav id="sidebar-nav">
        <!-- Add class="sticky-sidebar-js" for auto-height sidebar -->
        <ul id="vertical-sidebar-nav" class="sf-menu">
            <li class="normal-item-pro">
                <router-link to="/tv-series" tag="a">
                    <span class="icon-Old-TV"></span>
                    TV Series
                </router-link>
            </li>
            <li class="normal-item-pro">
                <router-link to="/" tag="a">
                    <span class="icon-Reel"></span>
                    Movies
                </router-link>
            </li>
            <li class="normal-item-pro">
                <a href="dashboard-playlists.html">
                    <span class="icon-Movie"></span>
                    Playlists
                </a>
            </li>
            <li class="normal-item-pro">
                <a href="dashboard-new-arrivals.html">
                    <span class="icon-Movie-Ticket"></span>
                    New Arrivals
                </a>
            </li>
            <li class="normal-item-pro">
                <a href="dashboard-coming-soon.html">
                    <span class="icon-Clock"></span>
                    Coming Soon
                </a>
            </li>
        </ul>
        <div class="clearfix"></div>
    </nav>
</template>

<script>
export default {};
</script>

<style></style>
