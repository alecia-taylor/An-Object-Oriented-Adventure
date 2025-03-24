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
            belongings:["hat","sunglasses","breif case"],//object inside an object, inside an object
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`) //method for "dice roll
    }
}
            
    for (const item of adventurer.inventory) {
        console.log(item);
    } //Practice loop
      console.log(adventurer.roll()); //Practice method

// Part 2 - Class Fantasy
class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`) //method for "dice roll
    }
  }
