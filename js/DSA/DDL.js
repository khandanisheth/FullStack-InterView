class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DDL {
    constructor() {
        this.start = null;
    }

    CreateNode(data) {
        return new Node(data);
    }

    FirstInsertNode(data) {
        let item = this.CreateNode(data);
        if (!this.start) {
            // List is empty
            this.start = item;
        } else {
            // List has elements
            item.next = this.start;
            this.start.prev = item;
            this.start = item;
        }
        console.log("New Node Successfully inserted at Start. ->" + item.data);
    }
    LastIndexInsert(data) {
        let item = this.CreateNode(data);
        if (this.start === null) {
            this.start = item;
        }
        else {
            let tr = this.start;
            while (tr.next) {
                tr = tr.next;
            }
            tr.next = item;
            item.prev = tr;
        }
        console.log("New Node Successfully inserted at End. ->" + item.data);
    }

    insertAtPosition(pos, data) {
        if (this.start === null) {
            this.LastIndexInsert(data);
            return;
        }
        else {
            let tr = this.start, count = 0;

            while (tr) {
                count++;
                tr = tr.next;
            }
            if (count < 2) {
                this.LastIndexInsert(data);
                return;
            }
            if (pos <= 1 || pos > count) {
                console.log("Please enter a valid position.");
                return;
            }
            else {
                let item = this.CreateNode(data);
                tr = this.start;
                for (let i = 1; i < pos - 1; i++) {
                    tr = tr.next;
                }

                item.prev = tr;
                item.next = tr.next;
                tr.next.prev = item;
                tr.next = item;
                console.log(`New Node Successfully inserted at position ${pos}.`);
            }
        }
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

        let del = this.start;
        while (del.next) {
            del = del.next;
        }

        console.log("Deleted Node ->", del.data);
        del.prev.next = null;
        console.log("End Node Successfully Deleted.");
    }




    deleteAtPosition(pos) {
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
    ListPrint() {
        if (!this.start) {
            console.log("List is empty!");
            return;
        }
        let tr = this.start;
        let res = [];
        while (tr !== null) {
            res.push(tr.data);
            tr = tr.next;
        }
        console.log("All List Node Items => " + res.join(" -> "));
    }
}

let ddl = new DDL();

ddl.FirstInsertNode(1);
ddl.FirstInsertNode(11);
ddl.FirstInsertNode(21);
ddl.LastIndexInsert(310);
ddl.LastIndexInsert(410);
ddl.insertAtPosition(2, 10);
ddl.insertAtPosition(3, 100);
ddl.insertAtPosition(4, 1000);

ddl.ListPrint();

ddl.deleteFirst();
ddl.deleteEnd();
ddl.ListPrint();
ddl.deleteAtPosition(3)

ddl.ListPrint();