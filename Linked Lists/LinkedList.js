class Node {
  constructor(elem) {
    this.elem = elem;
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
      let cursor = this.head;
      while (cursor.next !== null) {
        cursor = cursor.next;
      }
      cursor.next = node;
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
        this.head = node;
      } else {
        let i = 1;
        let cursor = this.head;
        let prev = null;

        while (i < position) {
          prev = cursor;
          cursor = cursor.next;
          i++;
        }

        if (prev != null) {
          node.next = cursor;
          prev.next = node;
        } else {
          node.next = cursor;
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
      } else {
        let cursor = this.head;
        let prev = null;
        let i = 0;

        while (i < position) {
          prev = cursor;
          cursor = cursor.next;
          i++;
        }
        prev.next = cursor.next;
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
      let prev = null;

      while (cursor.elem !== elem) {
        prev = cursor;
        cursor = cursor.next;
      }
      if (prev !== null) {
        prev.next = cursor.next;
      } else {
        this.head = cursor.next;
      }
      this.size--;
    }
  }
}

//Test cases
let linkedList = new LinkedList();
linkedList.add("test");
linkedList.add("test2");
linkedList.add("test3");
linkedList.add("test4");
console.log(linkedList);
linkedList.removeElement("test");
console.log(linkedList);
linkedList.insertAt("testInserted", 2);
console.log(linkedList);
linkedList.removeFrom(0);
console.log(linkedList);
