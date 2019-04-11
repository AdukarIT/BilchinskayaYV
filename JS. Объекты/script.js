alert("Задача № 1.")

let film = {
	name: "Straight Outta Compton",
	genre: "biography",
	year: 2015
};

function checkObject(object, string) {
	if (string in object) {
		return true
	} else 
		return false
}

console.log(checkObject(film, "name"));

alert("Задача № 2.")
console.clear();

let recipeDishes = {
	name: "Lasagna",
	Ingredients: {
		lasagnaSheets: 250,
		chickenFillet: 700,
		mushrooms: 300,
		tomatoes: 500,
		cheese: 300,
		onion: 150,
		butter: 100,
		flour: 5,
		milk: 1,
	},
	portions: 8,
};
let onePortions = {};

function singlePortionsIngredients(recipeDishes) {
	for(let key in recipeDishes.Ingredients) {
		onePortions[key] = recipeDishes.Ingredients[key];
			onePortions[key] = recipeDishes.Ingredients[key] / 8;
		}
			onePortions.portions = recipeDishes.portions / 8;
		return onePortions;
}

console.log(singlePortionsIngredients(recipeDishes));

alert("Задача № 3.")
console.clear();

let cylinder = {
	radius: 4,
	height: 8,

getVolume: function() {
	console.log((Math.pow(this.radius,2) * Math.PI) * this.height);
}
};
cylinder.getVolume();

alert("Задача № 4.")
console.clear();

let fictionalPenguins = {
	name: "Cody Maverick",
	origin: "Surf's Up", 
	hobby: "surfer",
	
sayHello: function() {
	console.log("Hi! My name is " + this.name + " and I am the best surfer!");
},
fly: function() {
	if(this.canFly = false) {
		return console.log("I can fly.");
	}
		return console.log("I don't fly in the sky, but I can fly on the waves!");
	}
};

fictionalPenguins.sayHello();
fictionalPenguins.fly();


