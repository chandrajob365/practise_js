function talk() {
	console.log(this.sound);
}

const animal = {
	talk,
	arr: [1, 2, 4, 5]
};

const cat = {
	sound: "meow"
};

Object.setPrototypeOf(cat, animal);
cat.talk();
console.log(cat.taste);
animal.taste = "good";
console.log(animal.taste);
console.log(cat.taste);
delete animal.taste;
console.log("------");
console.log(animal.arr);
console.log(cat.arr);
cat.arr.push(23);
console.log("------");
console.log(animal.arr);
console.log(cat.arr);
cat.arr.pop(23);
console.log("------");
console.log(animal.arr);
console.log(cat.arr);
