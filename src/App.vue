<template>
    <div>
        <div v-if="token" id="sidebar-bg">
            <app-header />
            <app-sidebar />
            <router-view />
        </div>
        <router-view v-else></router-view>
    </div>

</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";

export default {
    components: {
        AppHeader,
        AppSidebar
    },
    data() {
        return {
            token: !!localStorage.token,
        }
    },

};
</script>

<style></style>
