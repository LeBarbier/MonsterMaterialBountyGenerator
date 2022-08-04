<template>
    <div>
        <h1>Monsters</h1>

        <ul v-for="(monster, monsterName) in monsters" :key="monsterName">
            {{monsterName}}
            <!--<li v-for="(race, raceName) in monster" :key="monsterName+raceName"> {{raceName}}
            <ul v-for="(component, componentName) in race" :key="componentName">{{componentName}}</ul>
            </li>-->
        </ul>

    </div>
</template>

<script>
    import MonsterDataService from '@/dataService/monster.data.service.js';

    export default {
        name: 'Monsters',
        computed: {
            monsters() {
                return MonsterDataService.getMonsters();
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

