let stack1 = [];
let stack2 = [];

// Enqueue operation
function enqueue(element) {
    stack1.push(element);
    console.log("Stack-1 after enqueue:", stack1);
}

// Dequeue operation
function dequeue() {
    if (stack2.length === 0) {
        if (stack1.length === 0) {
            console.log("Queue is empty");
            return;
        }
        // Move all elements from stack1 to stack2
        while (stack1.length > 0) {
            stack2.push(stack1.pop());
        }
    }
    const removed = stack2.pop();
    console.log("Dequeued element:", removed);
}



// ✅ Problem Summary

// JavaScript me arrays ka use karke 2 stacks banayein.

// Enqueue → elements ko stack1 me add karein.

// Dequeue → stack1 ke elements ko stack2 me reverse karke pop karein taki FIFO behavior mile.

// ✅ Approach 1 – Simple enqueue then dequeue
// Idea:

// Enqueue karte waqt stack1 me elements add karo.

// Dequeue karne ke liye:

// stack1 se elements ko stack2 me transfer karo (reverse order).

// stack2 se pop karo.