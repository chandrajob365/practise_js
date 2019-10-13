let dog = {
	sound: "woof",
	talk: function() {
		console.log(this.sound);
	}
};

const talkFunction = dog.talk;
talkFunction.call(dog);
const boundFunction = talkFunction.bind(dog);
boundFunction();

let talk = function() {
	console.log(this.sound);
};

const boro = {
	speak: talk,
	sound: "lets talk"
};

boro.speak();
