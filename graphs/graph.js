function Graph() {
	this.nodes = {};
}

Graph.prototype.addNode = function(value) {
	if (value === undefined) return;
	this.nodes[value] = this.nodes[value] || [];
};

Graph.prototype.addEdge = function(value1, value2) {
	if (!this.nodes[value1] || !this.nodes[value2]) return false;
	this.nodes[value1].push(value2);
	this.nodes[value2].push(value1);
};

const g = new Graph();
g.addNode(2);
g.addNode(3);
g.addNode(4);
g.addEdge(2, 3);
g.addEdge(3, 4);
g.addEdge(2, 4);
console.log(g);
