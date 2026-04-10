// Singly Linked List implementation in JavaScript
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

    // Create Node
    createNode(data) {
        return new Node(data);
    }

    // Insert at Beginning
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

    // Insert at End
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

    // Insert at Specific Position
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

    // Delete First Node
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

    // Delete End Node
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

    // Delete at Specific Position
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


    // Delete at Specific Position
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


    // Reverse List
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

    // Traverse List
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

// ------------------- Testing -------------------
const ll = new SinglyLinkList();
ll.insertBeginning(10);
ll.insertEnd(20);
ll.insertEnd(30);
ll.traverseNodeList();   // 10 -> 20 -> 30
ll.insertSpecifiedPosition(2, 15);
ll.traverseNodeList();   // 10 -> 15 -> 20 -> 30
ll.deleteFirstNode();
ll.traverseNodeList();   // 15 -> 20 -> 30
ll.deleteEndNode();
ll.traverseNodeList();   // 15 -> 20
ll.reverseList();
ll.traverseNodeList();   // 20 -> 15
