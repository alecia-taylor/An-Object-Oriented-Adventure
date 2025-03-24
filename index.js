// Part 1 - Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings:["hat","sunglasses","breif case"]
        }
    }
}

    for (const item of adventurer.inventory) {
        console.log(item);
    } //Practice loop
      