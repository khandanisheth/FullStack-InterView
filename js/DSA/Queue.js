class QueueArr {
    constructor(capacity) {
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(capacity);
        this.capacity = capacity;
    }

    enQueue() {
        if (this.rear === this.capacity - 1) {
            alert("Queue Is Overflow");
        } else {
            let item = parseInt(prompt("Enter Queue Item ->"));
            this.rear++;
            this.queue[this.rear] = item;
            if (this.front === -1) {
                this.front = 0;
            }
            alert("Queue Item Successfully EnQueued");
        }
    }

    deQueue() {
        if (this.front === -1 || this.front > this.rear) {
            alert("Queue Is Underflow");
            this.front = this.rear = -1;
        } else {
            let item = this.queue[this.front];
            alert("DeQueue Item -> " + item);
            if (this.front === this.rear) {
                this.front = this.rear = -1;
            } else {
                this.front++;
            }
            alert("DeQueue Successfully Done");
        }
    }

    peek() {
        if (this.front === -1 || this.front > this.rear) {
            alert("Queue Is Empty");
        } else {
            alert("Peek Element -> " + this.queue[this.front]);
        }
    }

    display() {
        if (this.front === -1 || this.front > this.rear) {
            alert("Queue Is Empty");
        } else {
            let elements = "Queue Elements ->\n";
            for (let i = this.front; i <= this.rear; i++) {
                elements += this.queue[i] + "\n";
            }
            alert(elements);
        }
    }
}

function main() {
    let n = parseInt(prompt("Enter Queue Capacity =>"));
    let q = new QueueArr(n);

    while (true) {
        let choice = parseInt(prompt(
            "Press:\n" +
            "1. EnQueue Operation\n" +
            "2. DeQueue Operation\n" +
            "3. Peek Element\n" +
            "4. Queue Display\n" +
            "5. Exit\n\n" +
            "Enter Your Choice =>"
        ));

        switch (choice) {
            case 1:
                q.enQueue();
                break;
            case 2:
                q.deQueue();
                break;
            case 3:
                q.peek();
                break;
            case 4:
                q.display();
                break;
            case 5:
                alert("Exiting...");
                return;
            default:
                alert("Please Enter a Valid Choice.");
        }
    }
}

main();
