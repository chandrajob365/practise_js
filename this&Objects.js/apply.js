function foo(something) {
	console.log(this.a + something);
	return this.a + something;
}

let obj = { a: 2 };
function bar() {
	return foo.apply(obj, arguments);
}

let b = bar(3);
console.log(b);
