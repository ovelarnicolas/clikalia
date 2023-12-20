db.getCollection('pokemons').find({
    prev_evolution: { $size: 1 },
    next_evolution: { $exists: true},
    avg_spawns: { $gt: 4 }
},
    { name: 1, num: 1, _id: 0 }
);