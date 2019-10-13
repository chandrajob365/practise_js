const parent = {
	a: [1, 2, 3, 4, 5],
	b: 32
};

const child = Object.create(parent);
console.log(child.a);
child.a.push(8);
child.a.pop();
child.a.pop();
delete child.a;
console.log(parent.a);
console.log(child.a);

console.log(child.b);
console.log(child);
console.log(parent.b);
delete child.b;
child.b = 43;
console.log(child);
console.log(parent.b);
