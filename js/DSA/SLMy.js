class Node {
    constructor(data) {
        this.data = data;
        this.link = null;
    }
}

class SinglyLinkListMy {
    constructor() {
        this.start = null;
    }

    CreateNode(data) {
        return new Node(data);
    }

    FirstIndex(data) {
        let n = this.CreateNode(data);
        if (this.start === null) {
            this.start = n;
        }
        else {
            n.link = this.start;
            this.start = n;
        }
        console.log("Inserted at Beginning -> " + n.data);
    }

    // Last Insert
    LastIndex(data) {
        let n = this.CreateNode(data);
        if (this.start === null) {
            this.start = n;
        }
        else {
            let tr = this.start;
            while (tr.link) {
                tr = tr.link;
            }
            tr.link = n;
        }
        console.log("Inserted at End -> " + n.data);
    }

    // Insert at Specific Position
    insertSpecifiedPosition(pos, data) {
        // अगर list खाली है तो beginning पर डालो
        if (this.start === null) {
            this.FirstIndex(data);
            console.log("List was empty — inserted at Beginning.");
            return;
        }

        // Count nodes
        let count = 0, tr = this.start;
        while (tr !== null) {
            count++;
            tr = tr.link;
        }

        // अगर nodes बहुत कम हों तो भी beginning पर डाल दो (आपका original behavior)
        if (count < 2) {
            this.FirstIndex(data);
            console.log("List had less than 2 nodes — inserted at Beginning.");
            return;
        }

        // Position validation (आपका original: allow positions 2..count)
        if (pos <= 1 || pos > count) {
            console.log("Sorry || Invalid Position.");
            return;
        }

        // Insert at position (2..count)
        tr = this.start;
        let n = this.CreateNode(data);   // <-- FIXED: use CreateNode (same case)
        for (let i = 1; i < pos - 1; i++) {
            tr = tr.link;
        }
        n.link = tr.link;
        tr.link = n;
        console.log("New Node successfully inserted at position " + pos);
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

    findMiddle() {
        let tr = this.start, count = 0;
        if (this.start === null) {
            console.log("List is empty");
            return null;
        }

        // Count total nodes
        while (tr) {
            count++;
            tr = tr.link;
        }

        // Calculate middle position
        let pos = Math.floor(count / 2);

        tr = this.start;
        for (let i = 0; i < pos; i++) {
            tr = tr.link;
        }

        console.log("Middle Data -> " + tr.data);
        return tr.data;
    }



    findMiddle1() {
        let tr = this.start, count = 0;
        if (this.start === null) {
            return;
        }
        else {
            while (tr) {
                count++;
                tr = tr.link;
            }
            if (count % 2 == 0) {
                let pos = count / 2;
                tr = this.start;
                for (let i = 0; i < pos; i++) {
                    tr = tr.link;
                }
                console.log("Middle Data even Number -> " + tr.data);
                return;
            }
            else {
                let pos = count / 2;
                tr = this.start;
                for (let i = 1; i < pos; i++) {
                    tr = tr.link;
                }
                console.log("Middle Data Odd Number -> " + tr.data);
                return 0;
            }
        }
    }


    deleteMiddle() {
        if (this.start === null || this.start.link === null) {
            console.log("List is empty or has only one node");
            this.start = null;
            return;
        }

        // Count total nodes
        let count = 0, tr = this.start;
        while (tr) {
            count++;
            tr = tr.link;
        }

        // Middle position (second middle if even)
        let pos = Math.floor(count / 2);

        // Traverse to node before middle
        tr = this.start;
        for (let i = 0; i < pos - 1; i++) {
            tr = tr.link;
        }

        // Delete middle node
        console.log("Deleting Middle Node -> " + tr.link.data);
        tr.link = tr.link.link;
    }


    PrintList() {
        if (this.start === null) {
            console.log("Sorry || List is Empty.");
        } else {
            let tr = this.start;
            let res = [];
            while (tr !== null) {
                res.push(tr.data);
                tr = tr.link;
            }
            console.log("All List Node Items => " + res.join(" -> "));
        }
    }
}




// ------------------- Testing -------------------
const ll = new SinglyLinkListMy();
ll.FirstIndex(10);
ll.FirstIndex(20);
ll.FirstIndex(30);

ll.LastIndex(100);
ll.LastIndex(200);
ll.LastIndex(300);
ll.LastIndex(400);

ll.LastIndex(1200);

ll.insertSpecifiedPosition(3, 113);
ll.insertSpecifiedPosition(6, 113);
ll.insertSpecifiedPosition(2, 113);
ll.PrintList();
ll.deleteFirstNode();
ll.deleteEndNode();
ll.PrintList();

ll.findMiddle();
ll.findMiddle1();

