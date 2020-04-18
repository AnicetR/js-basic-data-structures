class Queue{
    array = [];

    //Adds one item at the end of the queue.
    enqueue(item){
        return this.array.push(item);
    }

    //Returns and remove the first item of the queue.
    dequeue(item){
        return this.array.shift();
    }

    //Returns the length of the queue
    getLength(){
        return this.array.length;
    }

    //Returns if the queue is empty or not
    isEmpty(){
        return this.array.length === 0;
    }

    //Returns first item of the queue without deleting it
    peek(){
        return this.array[0];
    }
}

//Tests cases : 
let queue = new Queue();

//Enqueuing
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue);

//Dequeuing
queue.dequeue();
console.log(queue);

console.log(queue.getLength());
console.log(queue.isEmpty());
console.log(queue.peek());