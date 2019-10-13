function foo(i) {
	this.count++;
}

foo.count = 0;

for (let i = 0; i < 10; i++) {
	if (i > 5) {
		foo.call(foo, i);
	}
}

console.log(foo.count);

function foo() {
	var a = 2;
	this.bar();
}

function bar() {
	console.log(this.a); // undefined
}

foo();
