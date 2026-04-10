// Install readline-sync by running: npm install readline-sync

const readline = require("readline-sync");

// Singly Linked List Implementation
class Node {
    constructor(data) {
        this.data = data;
        this.link = null;
    }
}

class SinglyLinkList {
    constructor() {
        this.start = null;
    }

    createNode(data) {
        return new Node(data);
    }

    insertBeginning(data) {
        let n = this.createNode(data);
        if (this.start === null) {
            this.start = n;
        } else {
            n.link = this.start;
            this.start = n;
        }
        console.log("Inserted at Beginning -> " + n.data);
    }

    insertEnd(data) {
        let n = this.createNode(data);
        if (this.start === null) {
            this.start = n;
        } else {
            let tr = this.start;
            while (tr.link !== null) {
                tr = tr.link;
            }
            tr.link = n;
        }
        console.log("Inserted at End -> " + n.data);
    }

    insertSpecifiedPosition(pos, data) {
        if (this.start === null) {
            this.insertEnd(data);
            console.log("List had less than 2 nodes, inserted at End.");
        } else {
            let count = 0, tr = this.start;
            while (tr !== null) {
                count++;
                tr = tr.link;
            }
            if (count < 2) {
                this.insertEnd(data);
                console.log("List had less than 2 nodes, inserted at End.");
            } else {
                if (pos <= 1 || pos > count) {
                    console.log("Sorry || Invalid Position.");
                } else {
                    tr = this.start;
                    let n = this.createNode(data);
                    for (let i = 1; i < pos - 1; i++) {
                        tr = tr.link;
                    }
                    n.link = tr.link;
                    tr.link = n;
                    console.log("New Node successfully inserted at position " + pos);
                }
            }
        }
    }

    deleteFirstNode() {
        if (this.start === null) {
            console.log("Deletion not possible, List is Empty.");
        } else {
            let remove = this.start;
            console.log("Deleted Node -> " + remove.data);
            this.start = this.start.link;
            console.log("Deletion successful (First Node).");
        }
    }

    deleteEndNode() {
        if (this.start === null) {
            console.log("Deletion not possible, List is Empty.");
        } else if (this.start.link === null) {
            console.log("Deleted Node -> " + this.start.data);
            this.start = null;
            console.log("Deletion successful (End Node).");
        } else {
            let tr = null, remove = this.start;
            while (remove.link !== null) {
                tr = remove;
                remove = remove.link;
            }
            console.log("Deleted Node -> " + remove.data);
            tr.link = null;
            console.log("Deletion successful (End Node).");
        }
    }

    deleteSpecifiedPosition(pos) {
        if (this.start === null) {
            console.log("Deletion not possible, List is Empty.");
        } else {
            let count = 0, tr = this.start;
            while (tr !== null) {
                count++;
                tr = tr.link;
            }
            if (count < 2) {
                console.log("Deletion not possible, List has only 1 node.");
            } else {
                if (pos <= 1 || pos > count) {
                    console.log("Sorry || Invalid Position.");
                } else {
                    let n = this.start;
                    for (let i = 0; i < pos - 1; i++) {
                        tr = n;
                        n = n.link;
                    }
                    console.log("Deleted Item -> " + n.data);
                    tr.link = n.link;
                    console.log("Deletion successful at position " + pos);
                }
            }
        }
    }

    reverseList() {
        if (this.start === null || this.start.link === null) {
            console.log("List cannot be reversed.");
        } else {
            let prev = this.start;
            let curr = this.start.link;
            while (curr !== null) {
                let nextNode = curr.link;
                curr.link = prev;
                prev = curr;
                curr = nextNode;
            }
            this.start.link = null;
            this.start = prev;
            console.log("List reversed successfully.");
        }
    }

    traverseNodeList() {
        if (this.start === null) {
            console.log("Sorry || List is Empty.");
        } else {
            let tr = this.start;
            let result = [];
            while (tr !== null) {
                result.push(tr.data);
                tr = tr.link;
            }
            console.log("All List Node Items => " + result.join(" -> "));
        }
    }
}

// ---------------- Menu-Driven Program ----------------
const ll = new SinglyLinkList();

while (true) {
    console.log("\nPress:");
    console.log("1. Insert Node First Position");
    console.log("2. Insert Node End Position");
    console.log("3. Insert Node Specified Position");
    console.log("4. Delete First Node Position");
    console.log("5. Delete End Node Position");
    console.log("6. Delete Node Specified Position");
    console.log("7. Linked List Reverse");
    console.log("8. Traverse Node List");
    console.log("9. Exit");

    let choice = readline.questionInt("Enter Your Choice => ");

    switch (choice) {
        case 1:
            let data1 = readline.questionInt("Enter Node Value => ");
            ll.insertBeginning(data1);
            break;
        case 2:
            let data2 = readline.questionInt("Enter Node Value => ");
            ll.insertEnd(data2);
            break;
        case 3:
            let pos = readline.questionInt("Enter Position => ");
            let data3 = readline.questionInt("Enter Node Value => ");
            ll.insertSpecifiedPosition(pos, data3);
            break;
        case 4:
            ll.deleteFirstNode();
            break;
        case 5:
            ll.deleteEndNode();
            break;
        case 6:
            let delPos = readline.questionInt("Enter Position to Delete => ");
            ll.deleteSpecifiedPosition(delPos);
            break;
        case 7:
            ll.reverseList();
            break;
        case 8:
            ll.traverseNodeList();
            break;
        case 9:
            console.log("Exiting...");
            process.exit(0);
        default:
            console.log("Sorry || Invalid Choice.");
    }
}
