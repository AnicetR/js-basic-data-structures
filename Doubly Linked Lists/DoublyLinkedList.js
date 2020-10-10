class Node {
  constructor(elem) {
    this.elem = elem;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  size = 0;

  //Add a node in list
  add(elem) {
    const node = new Node(elem);

    //First insert
    if (this.size === 0) {
      this.head = node;
    } else {
      //Insert Last
      let last = this.head;
      while (last.next !== null) {
        last = last.next;
      }
      last.next = node;
      node.prev = last;
    }
    this.size++;
  }

  //Insert element at defined position. If position is > than size, we will insert it at the end
  insertAt(elem, position) {
    if (position > 0 && position > this.size) {
      return false;
    } else {
      let node = new Node(elem);

      if (position == 0) {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else {
        let i = 1;
        let cursor = this.head;

        while (i < position) {
          cursor = cursor.next;
          i++;
        }
        if (cursor.prev != null) {
          node.next = cursor;
          node.prev = cursor.prev;
          cursor.prev = node;
          prev.next = node;
        } else {
          node.next = cursor;
          cursor.prev = node;
          cursor = node;
        }
      }
      this.size++;
    }
  }

  //Delete an element from a given position
  removeFrom(position) {
    if (position < this.size) {
      if (position === 0) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        let cursor = this.head;
        let i = 0;

        while (i < position) {
          cursor = cursor.next;
          i++;
        }
        cursor.prev.next = cursor.next;
        cursor.next.prev = cursor.prev;
      }
      this.size--;
    } else {
      return -1;
    }
  }

  //Remove the selected element
  removeElement(elem) {
    if (this.size <= 1) {
      this.head = null;
    } else {
      let cursor = this.head;
      while (cursor.elem !== elem) {
        cursor = cursor.next;
      }
      if (cursor.prev !== null) {
        cursor.prev.next = cursor.next;
        cursor.next.prev = cursor.prev;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.size--;
    }
  }
}

//Test cases
let linkedList = new LinkedList();
linkedList.add("head");
linkedList.add("test2");
linkedList.add("test3");
linkedList.add("test4");
console.log(linkedList);
linkedList.insertAt("testInsertHead", 0);
console.log(linkedList);
linkedList.removeElement("testInsertHead");
console.log(linkedList);
linkedList.removeFrom(1);
console.log(linkedList);
