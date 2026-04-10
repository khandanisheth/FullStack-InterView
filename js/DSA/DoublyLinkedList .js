// Agar Node.js mein run karna hai to prompt-sync install karein
// npm install prompt-sync

const prompt = require('prompt-sync')({ sigint: true });

class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.start = null;
    }

    createNode() {
        let value = parseInt(prompt("Enter Node Item -> "));
        let node = new Node(value);
        return node;
    }

    insertFirst() {
        let node = this.createNode();
        if (!this.start) {
            this.start = node;
        } else {
            node.next = this.start;
            this.start.prev = node;
            this.start = node;
        }
        console.log("New Node Successfully inserted at Start.");
    }

    insertEnd() {
        let node = this.createNode();
        if (!this.start) {
            this.start = node;
        } else {
            let current = this.start;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
        }
        console.log("New Node Successfully inserted at End.");
    }

    insertAtPosition() {
        if (!this.start) {
            this.insertEnd();
            return;
        }

        let count = 0;
        let current = this.start;
        while (current) {
            count++;
            current = current.next;
        }

        if (count < 2) {
            this.insertEnd();
            return;
        }

        let pos = parseInt(prompt(`Enter Node Position 2 to ${count} -> `));
        if (pos <= 1 || pos > count) {
            console.log("Please enter a valid position.");
            return;
        }

        let node = this.createNode();
        current = this.start;
        for (let i = 1; i < pos - 1; i++) {
            current = current.next;
        }

        node.next = current.next;
        node.prev = current;
        if (current.next) {
            current.next.prev = node;
        }
        current.next = node;

        console.log(`New Node Successfully inserted at position ${pos}.`);
    }

    deleteFirst() {
        if (!this.start) {
            console.log("List is empty!");
            return;
        }
        let node = this.start;
        console.log("Deleted Node ->", node.data);
        this.start = node.next;
        if (this.start) {
            this.start.prev = null;
        }
        console.log("First Node Successfully Deleted.");
    }

    deleteEnd() {
        if (!this.start) {
            console.log("List is empty!");
            return;
        }

        if (!this.start.next) {
            console.log("Deleted Node ->", this.start.data);
            this.start = null;
            console.log("End Node Successfully Deleted.");
            return;
        }

        let current = this.start;
        while (current.next) {
            current = current.next;
        }

        console.log("Deleted Node ->", current.data);
        current.prev.next = null;
        console.log("End Node Successfully Deleted.");
    }

    deleteAtPosition() {
        if (!this.start) {
            console.log("List is empty!");
            return;
        }

        let count = 0;
        let current = this.start;
        while (current) {
            count++;
            current = current.next;
        }

        if (count <= 2) {
            console.log("List has not enough nodes for this operation.");
            return;
        }

        let pos = parseInt(prompt(`Enter Node Position to delete (2 to ${count - 1}) -> `));
        if (pos <= 1 || pos >= count) {
            console.log("Invalid position!");
            return;
        }

        current = this.start;
        for (let i = 1; i < pos - 1; i++) {
            current = current.next;
        }

        let nodeToDelete = current.next;
        console.log("Deleted Node ->", nodeToDelete.data);

        current.next = nodeToDelete.next;
        if (nodeToDelete.next) {
            nodeToDelete.next.prev = current;
        }
        console.log(`Node at position ${pos} successfully deleted.`);
    }

    traverse() {
        if (!this.start) {
            console.log("List is empty!");
            return;
        }
        console.log("List items:");
        let current = this.start;
        while (current) {
            process.stdout.write(current.data + " ");
            current = current.next;
        }
        console.log();
    }
}

// Main Program
function main() {
    let dll = new DoublyLinkedList();
    let scanner = prompt;

    while (true) {
        console.log("\n*** Doubly Linked List Menu ***");
        console.log("1. Insert Node at First Position");
        console.log("2. Insert Node at End Position");
        console.log("3. Insert Node at Specified Position");
        console.log("4. Delete First Node");
        console.log("5. Delete End Node");
        console.log("6. Delete Node at Specified Position");
        console.log("7. Traverse List");
        console.log("8. Exit");

        let choice = parseInt(scanner("Enter your choice -> "));

        switch (choice) {
            case 1:
                dll.insertFirst();
                break;
            case 2:
                dll.insertEnd();
                break;
            case 3:
                dll.insertAtPosition();
                break;
            case 4:
                dll.deleteFirst();
                break;
            case 5:
                dll.deleteEnd();
                break;
            case 6:
                dll.deleteAtPosition();
                break;
            case 7:
                dll.traverse();
                break;
            case 8:
                console.log("Exiting...");
                process.exit(0);
            default:
                console.log("Invalid choice! Try again.");
        }
    }
}

main();



/*const prompt = require('prompt-sync')({ sigint: true });

// Node banana factory function se
function createNode(data) {
    return {
        data: data,
        prev: null,
        next: null
    };
}

// Doubly Linked List object
const doublyLinkedList = {
    start: null,

    insertFirst() {
        let data = parseInt(prompt("Enter Node Item -> "));
        let node = createNode(data);

        if (!this.start) {
            this.start = node;
        } else {
            node.next = this.start;
            this.start.prev = node;
            this.start = node;
        }
        console.log("New Node Successfully inserted at Start.");
    },

    insertEnd() {
        let data = parseInt(prompt("Enter Node Item -> "));
        let node = createNode(data);

        if (!this.start) {
            this.start = node;
        } else {
            let current = this.start;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
        }
        console.log("New Node Successfully inserted at End.");
    },

    traverse() {
        if (!this.start) {
            console.log("List is empty!");
            return;
        }
        console.log("List items:");
        let current = this.start;
        while (current) {
            process.stdout.write(current.data + " ");
            current = current.next;
        }
        console.log();
    }
};

// Main program
function main() {
    while (true) {
        console.log("\n*** Doubly Linked List Menu ***");
        console.log("1. Insert Node at First Position");
        console.log("2. Insert Node at End Position");
        console.log("3. Traverse List");
        console.log("4. Exit");

        let choice = parseInt(prompt("Enter your choice -> "));

        switch (choice) {
            case 1:
                doublyLinkedList.insertFirst();
                break;
            case 2:
                doublyLinkedList.insertEnd();
                break;
            case 3:
                doublyLinkedList.traverse();
                break;
            case 4:
                console.log("Exiting...");
                process.exit(0);
            default:
                console.log("Invalid choice! Try again.");
        }
    }
}

main();
*/