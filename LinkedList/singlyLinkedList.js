class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class singlyLinkedList {
	head = null;
	length = 0;
	getLength = () => this.length;
	getHead = () => this.head;

	append = data => {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
			this.length++;
			return;
		}
		let currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = node;
		this.length++;
		return;
	};

	addAt = (pos, data) => {
		let length = this.getLength();
		if (isNaN(pos) || pos > length) {
			return false;
		}
		let node = new Node(data);
		let currentNode = this.getHead();
		if (pos == 0) {
			node.next = currentNode;
			this.head = node;
			this.length++;
			return;
		}
		let currentPos = 0;
		let previousNode = null;
		console.log("currentNode = ", currentNode);
		while (currentPos < pos) {
			previousNode = currentNode;
			currentNode = currentNode.next;
			currentPos++;
		}
		previousNode.next = node;
		node.next = currentNode;
		this.length++;
	};

	delete = data => {
		let currentNode = this.getHead();
		if (currentNode.data === data) {
			this.head = currentNode.next;
			this.length--;
			return;
		}
		let previuosNode = null;
		while (currentNode && currentNode.data !== data) {
			previuosNode = currentNode;
			currentNode = currentNode.next;
		}
		previuosNode.next = currentNode.next;
		currentNode = null;
		this.length--;
	};
	deleteAt = pos => {
		let length = this.getLength();
		if (isNaN(pos) || pos > length - 1) {
			return false;
		}
		let currentNode = this.getHead();
		if (pos == 0) {
			this.head = currentNode.next;
			this.length--;
			return;
		}
		let previuosNode = null;
		let currentIndex = 0;
		while (currentIndex < pos) {
			previuosNode = currentNode;
			currentNode = currentNode.next;
			currentIndex++;
		}
		previuosNode.next = currentNode.next;
		currentNode = null;
		this.length--;
	};

	removeDuplicates = () => {
		let currentNode = this.getHead();
		if (!currentNode) return false;
		let hashTable = {};
		let previuosNode = null;
		while (currentNode) {
			if (currentNode.data && hashTable[currentNode.data]) {
				previuosNode.next = currentNode.next;
				// currentNode = null;
				this.length--;
			} else {
				previuosNode = currentNode;
				hashTable[currentNode.data] = true;
			}
			currentNode = currentNode.next;
		}
	};
}

const ll = new singlyLinkedList();
console.log(ll);
ll.append(23);
ll.append(23);
ll.append(23);
console.log(ll);
ll.addAt(1, 20);
console.log(ll.getHead());
ll.addAt(0, 23);
console.log(ll.getHead());
console.log(ll.getLength());
ll.addAt(4, 29);
console.log(JSON.stringify(ll.getHead()));
console.log(ll.getLength());
// ll.delete(18);
// console.log(JSON.stringify(ll.getHead()));
// console.log(ll.getLength());
// ll.delete(20);
// console.log(JSON.stringify(ll.getHead()));
// console.log(ll.getLength());
// ll.deleteAt(0);
// console.log(JSON.stringify(ll.getHead()));
// console.log(ll.getLength());
// console.log("---------------------");
// ll.deleteAt(2);
// console.log(JSON.stringify(ll.getHead()));
// console.log(ll.getLength());
// ll.deleteAt(4);
ll.removeDuplicates();
console.log(JSON.stringify(ll.getHead()));
console.log(ll.getLength());
