var monsters = require('../assets/monsters.json');

function getMonsters() {
    return monsters;
}

function getParts() {
    var parts = [];

    for (const [monsterName, monster] of Object.entries(monsters)) {
        for (const [raceName, race] of Object.entries(monster)) {
            for (const [partName, part] of Object.entries(race)) {
                var notBaseRaceName = raceName !== 'base' ? ' (' + raceName + ') ' : '';
                var partModel = {
                    name: monsterName + "'s " + partName + notBaseRaceName,
                    price : part.value
                };

                parts.push(partModel);
            }   
        }
    }
    return parts;
}

export default {
    getMonsters,
    getParts
}