<template>
    <div id="app">
        <mmbg-navbar></mmbg-navbar>
        <div>
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

<style>
</style>

