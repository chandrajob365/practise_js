const food = {
	init: type => {
		this.type = type;
	},
	eat: () => {
		console.log("You ate the ", this.type);
	}
};

food.init("Mango");
food.eat();

const waffle = Object.create(food);
waffle.init("waffle");
waffle.eat();
