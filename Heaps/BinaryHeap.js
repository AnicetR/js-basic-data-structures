class BinaryHeap {
  data = [];
  type = 'min';

  insert(number) {
    this.data.push(number);
    this.bubbleUp(this.data.length - 1);
  }

  swap(i1, i2) {
    let tmp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = tmp;
  }

  pop() {
    this.swap(0, this.data.length - 1);
    this.data.pop();
    this.sinkDown(0);
  }

  remove(num){
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i] !== num){
        continue;
      }
      this.swap(i, this.data.length - 1);
      this.data.pop();
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    } 
  }

  findParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  findChildrenIndexes(i) {
    return [i * 2 + 1, i * 2 + 2];
  }

  bubbleUp(currentIndex) {
    let currentValue = this.data[currentIndex];
    while (currentIndex > 0) {
      let parentIndex = this.findParentIndex(currentIndex);
      let parent = this.data[parentIndex];

      if (currentValue >= parent)
        break;
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }

  sinkDown(currentIndex) {
    while (true) {
      let currentValue = this.data[currentIndex];
      let [leftChildIndex, rightChildIndex] = this.findChildrenIndexes(currentIndex);
      let leftChild = this.data[leftChildIndex];
      let rightChild = this.data[rightChildIndex];
      let toSwap = null;

      if (leftChild <= currentValue) {
        toSwap = leftChildIndex;
      }
      if (rightChild <= currentValue && rightChild < leftChild) {
        toSwap = rightChildIndex;
      }

      if(toSwap !== null){
        this.swap(currentIndex, toSwap);
        currentIndex = toSwap;
        continue;
      }
      break;
    }
  }

  //Not functionnal but good enough to visualize easily small sets
  displayAsTree() {
    let i = 0;
    let rowContentCount = 1;
    let string = "";
    while (i < this.data.length) {
      let currentRowCount = 0;
      for (let spaces = 0; spaces < (this.data.length / 2 / rowContentCount); spaces++) {
        string += " ";
      }
      while (currentRowCount < rowContentCount && i < this.data.length) {
        string += "" + this.data[i + currentRowCount] + "\t";
        currentRowCount++;
      }
      string += "\n";
      rowContentCount *= 2;
      i = i + currentRowCount;
    }
    return string;
  }
}

const binaryHeapTest = new BinaryHeap();
binaryHeapTest.type = 'max';
binaryHeapTest.insert(0);
binaryHeapTest.insert(12);
binaryHeapTest.insert(24);
binaryHeapTest.insert(6);
binaryHeapTest.insert(32);
binaryHeapTest.insert(7);
binaryHeapTest.insert(64);
binaryHeapTest.insert(12);
binaryHeapTest.insert(1);
binaryHeapTest.insert(26);
binaryHeapTest.insert(1);
binaryHeapTest.insert(24);
binaryHeapTest.insert(36);
binaryHeapTest.insert(105);
binaryHeapTest.insert(38);
binaryHeapTest.insert(67);
console.log(binaryHeapTest.data);
console.log(binaryHeapTest.displayAsTree());
binaryHeapTest.pop();
binaryHeapTest.remove(105);
binaryHeapTest.remove(6);
console.log(binaryHeapTest.data);
console.log(binaryHeapTest.displayAsTree());
