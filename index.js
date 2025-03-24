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
            belongings:["hat","sunglasses","breifcase"],//object inside an object, inside an object
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`) //method for "dice roll"
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
        console.log(`${this.name} rolled a ${result}.`) 
    }
  }
     const robin = new Character("Robin");
     robin.inventory = ["sword", "potion", "artifact"];
     robin.companion = new Character("Leo");
     robin.companion.type = "Cat";
     robin.companion.companion = new Character("Frank");
     robin.companion.companion.type = "Flea";
     robin.companion.companion.inventory = ["small hat", "sunglasses", "briefcase"];
         console.log(robin); 

//Part 3 - Class Features
class Adventurer extends Character {
    constructor(name, role, companion) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
      this.actions = ["attack", "defend", "run"];
      this.wardrobe = ["sword", "boots", "cape"];
      this.companion = companion; // Companion is now an attribute of Adventurer
    }
    
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
  
  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
      this.superpower = ["teleportation", "flight", "invisibility"];
    }
  }
  