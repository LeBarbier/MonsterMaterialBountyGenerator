<template>
    <div class="navbar">
        <ul>
            <router-link to="/">Home</router-link>
            <router-link to="/Monsters">Monsters</router-link>
            <router-link to="/WantedList">Wanted List</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .navbar {
        background-color: black;
    }

    ul, li {
        list-style-type: none;
        display: inline-block;
    }

    a {
        padding: 0 6px;
        font-size: 24px;
        letter-spacing: 2px;
        font-weight: bold;
        color: white;
    }

    li:not(:last-child):after {
        content: " - ";
    }
</style>