class Queue{
    array = [];
    //ignoredLength is used to save the amount of length we have to ignore to optimize the queue and not shift at every dequeue.
    ignoredLength = 0;

    //Adds one item at the end of the queue.
    enqueue(item){
        return this.array.push(item);
    }

    //Returns and remove the first item of the queue.
    dequeue(){
        if(!this.isEmpty()){
            if(this.ignoredLength < 10){
                this.ignoredLength++;
                return this.peek();
            }else{
                this.array = this.array.slice(this.ignoredLength);
                this.ignoredLength = 0;
                return this.dequeue();
            } 
        }
    }

    //Returns the length of the queue
    getLength(){
        return this.array.length -  this.ignoredLength;
    }

    //Returns if the queue is empty or not
    isEmpty(){
        return this.getLength() === 0;
    }

    //Returns first item of the queue without deleting it
    peek(){
        if(this.array.length == this.getLength()){
            return this.array[0];
        }else{
            return this.array[this.ignoredLength];
        }
        
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
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
console.log(queue);

//Dequeuing
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.dequeue());
console.log(queue);

console.log(queue.getLength());
console.log(queue.isEmpty());
console.log(queue.peek());