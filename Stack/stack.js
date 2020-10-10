class Stack {
  container = [];

  push(item) {
    this.container.push(item);
  }

  pop() {
    return this.container.pop();
  }

  peek(index) {
    return this.container[index];
  }

  size() {
    return this.container.length;
  }

  search(item) {
    return this.container.findIndex(element => element === item);
  }
}
let testStack = new Stack();
testStack.push('test1');
testStack.push('test2');
console.log(testStack.pop());
testStack.push('item');
console.log(testStack.pop());
console.log(testStack.peek(0));
console.log(testStack.search('test1'));

const validBracketString = "[{()}](){}";
const invalidBracketString = "()[]{{{(}}}";

const isBracketStringValid = function (string) {
  let stack = new Stack();
  let stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i++) {
    let element = stringArray[i];
    if (element === "["
      || element === "{"
      || element === "(") {
      stack.push(element);
    }
    else if (element === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    }
    else if (element === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    }
    else {
      if (stack.pop() !== "(") {
        return false;
      }
    }
  }
  return true;
}

console.log(isBracketStringValid(validBracketString));
console.log(isBracketStringValid(invalidBracketString));
