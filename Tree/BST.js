class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	add(data) {
		const node = this.root;
		if (this.root === null) {
			this.root = new Node(data);
			return;
		}
		const search = node => {
			if (data < node.data) {
				if (!node.left) {
					node.left = new Node(data);
					return;
				}
				return search(node.left);
			} else {
				if (!node.right) {
					node.right = new Node(data);
					return;
				}
				return search(node.right);
			}
		};
		return search(node);
	}

	printInOrder() {
		const node = this.root;
		if (node === null) {
			return;
		}
		const traverse = node => {
			if (node === null) return;
			traverse(node.left);
			console.log(node.data);
			traverse(node.right);
		};
		return traverse(node);
	}

	printPostOrder() {
		const node = this.root;
		if (node === null) {
			return;
		}
		const traverse = node => {
			if (node === null) return;
			traverse(node.left);
			traverse(node.right);
			console.log(node.data);
		};
		return traverse(node);
	}

	printPreOrder() {
		const node = this.root;
		if (node === null) {
			return;
		}
		const traverse = node => {
			if (node === null) return;
			console.log(node.data);
			traverse(node.left);
			traverse(node.right);
		};
		return traverse(node);
	}

	findMin() {
		let current = this.root;
		while (current.left !== null) {
			current = current.left;
		}
		return current.data;
	}

	findMax() {
		let current = this.root;
		while (current.right !== null) {
			current = current.right;
		}
		return current.data;
	}

	isPresent(data) {
		let current = this.root;
		while (current) {
			if (data === current.data) return true;
			if (data > current.data) {
				current = current.right;
			} else {
				current = current.left;
			}
		}
		return false;
	}

	remove(data) {
		let node = this.root;
		const getLowestNodeToRight = node => {
			let temp = node.left;
			while (temp.left) {
				temp = temp.left;
			}
			return temp;
		};
		const deleteNode = (node, data) => {
			if (!node) {
				return null;
			}
			if (node.data > data) {
				node.left = deleteNode(node.left, data);
				return node;
			}
			if (node.data < data) {
				node.right = deleteNode(node.right, data);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				}
				if (!node.left) {
					return node.right;
				}
				if (!node.right) {
					return node.left;
				}
				const tempNode = getLowestNodeToRight(node.right);
				node.data = tempNode.data;
				node.right = deleteNode(node.right, tempNode.data);
				return node;
			}
		};
		return deleteNode(node, data);
	}

	depth() {
		const node = this.root;
		const getDepth = node => {
			if (!node) {
				return 0;
			}
			let lDepth = getDepth(node.left);
			let rDepth = getDepth(node.right);
			return lDepth > rDepth ? lDepth + 1 : rDepth + 1;
		};
		return getDepth(node);
	}

	sumAtMaxDepth() {
		let maxDepth = this.depth();
		const sumAtMaxDepthRec = (node, max) => {
			if (!node) return 0;
			if (max === 1) return node.data;
			return (
				sumAtMaxDepthRec(node.left, max - 1) +
				sumAtMaxDepthRec(node.right, max - 1)
			);
		};
		return sumAtMaxDepthRec(this.root, maxDepth);
	}
}

const bst1 = new BST();
bst1.add(50);
bst1.add(17);
bst1.add(72);
bst1.add(23);
bst1.add(12);
bst1.add(9);
bst1.add(14);
bst1.add(19);
bst1.add(67);
bst1.add(54);
bst1.add(76);
console.log(JSON.stringify(bst1));
console.log(bst1.findMin());
console.log(bst1.findMax());
console.log(bst1.isPresent(-1));
console.log("Inorder = ");
bst1.printInOrder();
console.log("depth :: ", bst1.depth());
console.log("sum at max depth :: ", bst1.sumAtMaxDepth());
console.log("============================");
console.log(JSON.stringify(bst1));
console.log(bst1.remove(50));
console.log("============================");
console.log(JSON.stringify(bst1));
// bst1.printInOrder();
// bst1.printPostOrder();
// bst1.printPreOrder();
