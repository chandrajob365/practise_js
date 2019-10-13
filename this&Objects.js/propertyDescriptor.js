let myObject = { a: 2 };

let newObj = Object.assign({}, myObject);
console.log(myObject === newObj);
console.log(newObj);
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(newObj, "a"));

Object.defineProperty(newObj, "a", {
	value: 2,
	writable: false,
	configurable: true,
	enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(newObj, "a"));
newObj.a = 3;
console.log(newObj);

let myObject2 = {
	// define a getter for `a`
	get a() {
		return this._a_;
	},
	// define a setter for `a`
	set a(val) {
		this._a_ = val;
	}
};

Object.defineProperty(
	myObject2, // target
	"b", // property name
	{
		// descriptor
		// define a getter for `b`
		get: function() {
			return this.a * 2;
		},

		// make sure `b` shows up as an object property
		enumerable: true
	}
);
myObject2.a = 4;
console.log(myObject2);
console.log(myObject2.a);
console.log(myObject2.b);
// `in` operator will check to see if the property is in the object, or if it exists at any higher level of the [[Prototype]] chain object traversal
console.log("a" in myObject2);
console.log("b" in myObject2);
console.log("c" in myObject2);
// `hasOwnProperty(..)` checks to see if only myObject has the property or not, and will not consult the [[Prototype]] chain.
// `hasOwnProperty(..)` is accessible for all normal objects via delegation to Object.prototype
console.log(myObject2.hasOwnProperty("a"));
console.log(myObject2.hasOwnProperty("b"));
console.log(myObject2.hasOwnProperty("c"));
