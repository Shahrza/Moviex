<template>
    <div>

        <div v-if="token" id="sidebar-bg">
            <app-header />
            <app-sidebar />
            <div>
                <router-view />
            </div>
        </div>
        <div v-else>
            <router-view />
        </div>

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
