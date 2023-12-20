db.getCollection('pokemons').find(
  { next_evolution: { $exists: true } },
  { name: 1, num: 1, spawn_time: 1, _id: 0 }
);