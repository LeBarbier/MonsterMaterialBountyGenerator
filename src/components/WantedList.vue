<template>
    <div>
        <h1>Wanted List</h1>

        <div class="generation">
            <button @click="generate">Regenerate</button>
        </div>        

        <table class="tableList">
            <tr>
                <th>Part</th>
                <th>Price</th>
            </tr>
            <tr v-for="part in partList" :key="part.name">
                <td>{{part.name}}</td>
                <td>{{part.price}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
    import MonsterDataService from '@/dataService/monster.data.service.js';

    export default {
        name: "WantedList",
        data() {
            return {
                partList: []
            }
        },
        created() {
            this.generate();
        },
        computed: {
            monsters() {
                return MonsterDataService.getMonsters();
            }
        },
        methods: {
            generate() {
                var monsterParts = MonsterDataService.getParts();
                var dragonCount = 0;
                this.partList = [];

                while (this.partList.length <= 50) {
                    var index = [Math.floor(Math.random() * (monsterParts.length - 1))];
                    if (monsterParts[index].name.toLowerCase().includes("dragon")) {
                        if (dragonCount > 5) {
                            continue;
                        }
                        dragonCount++;
                    }
                    this.partList.push(monsterParts.splice(index, 1)[0]);
                }

                this.partList.sort((a, b) => b.price - a.price);
            }
        }
    }
</script>

<style scoped>
    .tableList {
        margin: 0 auto;
        padding: 2px 8px;
        min-width: 350px;
    }

    th {
        font-size: 20px;
    }

    tr td:nth-child(2){
        text-align: right;
    }

    tr td:nth-child(2):after {
        content: " gp";
    }
     
    .generation {
        width: 80%;
        text-align: right;
    }
</style>