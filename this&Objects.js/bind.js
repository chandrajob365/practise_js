function foo(something) {
	console.log(this.a + something);
	return this.a + something;
}
// bind(..) returns a new function that is hard-coded to call the original function with the this context set as you specified.
function bind(fn, obj) {
	return function() {
		return fn.apply(obj, arguments);
	};
}

let obj = { a: 2 };
let bar = bind(foo, obj);
let b = bar(3);
console.log(b);
