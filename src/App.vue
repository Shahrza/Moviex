<template>
    <div id="sidebar-bg">
        <app-header />
        <app-sidebar />
        <router-view />
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";

export default {
    components: {
        AppHeader,
        AppSidebar
    }
};
</script>

<style></style>
