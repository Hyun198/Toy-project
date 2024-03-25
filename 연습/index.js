class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }


    isFull() {
        return this.currentLength === this.capacity
    }
    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = element
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peak() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty')
        } else {
            let i
            let str = ''
            for (i = this.front; i < this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + " "
            }
            str += this.items[i]
            console.log(str);
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
        }
        this.size++
    }
}

const list = new LinkedList()
list.prepend(10)
list.prepend(20)
list.prepend(30)