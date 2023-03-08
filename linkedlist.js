// Define Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define LinkedList class
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Append a node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.length++;
    }

    // Prepend a node to the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Reverse the first and last nodes in the list
    reverseFirstAndLast() {
        if (!this.head || !this.head.next) {
            console.log("List is too short to reverse");
            return;
        }
        let firstNode = this.head;
        let secondNode = firstNode.next;
        let lastNode = null;
        while (secondNode.next) {
            firstNode = firstNode.next;
            secondNode = secondNode.next;
        }
        lastNode = secondNode;
        firstNode.data = lastNode.data;
        lastNode.data = this.head.data;
        this.head.data = firstNode.data;
    }

    // Delete the first node in the list
    deleteFirstNode() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        this.head = this.head.next;
        this.length--;
    }

    // Find the size of the list
    size() {
        return this.length;
    }

    // Update a value in the list at the specified index
    updateValue(newValue, index) {
        if (index >= this.length || index < 0) {
            console.log("Invalid index");
            return;
        }
        let currentNode = this.head;
        let i = 0;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }
        currentNode.data = newValue;
    }

    // Traverse the list and display all values
    traverse() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

// Create linked list object
const linkedList = new LinkedList();

// Append node to linked list
linkedList.append(10);
linkedList.append(20);
linkedList.append(200);
linkedList.append(40);
linkedList.append(50);

// Prepend node to linked list
linkedList.prepend(5);

// Reverse first and last nodes
linkedList.reverseFirstAndLast();

// Delete first node
linkedList.deleteFirstNode();

// Find size of list
const size = linkedList.size();
console.log(`Size of list: ${size}`);

// Update a value in the list
linkedList.updateValue(30, 2);

// Traverse the linked list
linkedList.traverse();
