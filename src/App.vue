<template>
    <div id="app">
        <mmbg-navbar></mmbg-navbar>
        <div class="conteneur">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import NavBar from '@/components/navbar.vue';

    export default {
        name: 'app',
        components: {
            'mmbg-navbar': NavBar
        }
    };
</script>

<style scoped>
    .conteneur {
        padding: 6px 7%;
        margin: 0 auto;
    }
</style>

