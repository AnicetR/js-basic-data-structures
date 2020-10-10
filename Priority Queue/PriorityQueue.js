import BinaryHeap from '../Heaps/BinaryHeap';

class PriorityQueue{
  
  heap = null;
  constructor(){
    this.heap = new BinaryHeap();
  }

  enqueue(e){
    this.heap.insert(e);
  }

  dequeue(){
    return this.heap.pop();
  }

  peek(){
    return this.heap.data[0];
  }

}

let testPQ = new PriorityQueue();
testPQ.enqueue(1);
testPQ.enqueue(2);
testPQ.enqueue(3);
testPQ.enqueue(4);
testPQ.enqueue(5);
testPQ.enqueue(6);
testPQ.enqueue(0);
testPQ.enqueue(0);
testPQ.enqueue(0);
testPQ.enqueue(0);
testPQ.enqueue(0);
testPQ.enqueue(1000);
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());
console.log(testPQ.dequeue());