const arr = [
	{
		name: "manish",
		year: 2021
	},
	{
		name: "manisha",
		year: 2019
	},
	{
		name: "manishq",
		year: 2014
	},
	{
		name: "manishh",
		year: 2012
	},
	{
		name: "manishj",
		year: 2010
	}
];

// const arr2 = arr.sort((a, b) => {
// 	if (a.year > b.year) return 1;
// 	return -1;
// });
// console.log(arr2);

const res = ["app", "apple", "mapple"].filter(elm => elm.indexOf("le") !== -1);
console.log(res);
console.log("apple".indexOf("apple"));
function customSort(arr) {
	let temp = [];
	arr.sort((a, b) => {
		return b.year - a.year;
	});
	console.log("h1", [...temp, ...arr]);
}

const sortedData = customSort(arr);
console.log("sortedData :: ", sortedData);

function Person(name) {
	if (!(this instanceof Person)) {
		throw new TypeError("Cannot call class as function");
	}
	this.name = name;
}

new Person("Manish");
// Person("Manish");

var anotherObject = {
	a: 2
};

// create an object linked to `anotherObject`
var myObject = Object.create(anotherObject);

for (var k in myObject) {
	console.log("found: " + k);
}
// found: a

"a" in myObject; // true
