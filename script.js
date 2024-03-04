//Factory function for creating nodes
function node(value = null, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
}

//Factory function for creating linked lists
function LinkedList() {
  let headNode = null,
    tailNode = null;
  //Add elements to the end of the list
  const append = (value) => {
    const Node = node(value);

    if (headNode === null) {
      headNode = Node;
    } else {
      let currentNode = headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = Node;
      tailNode = Node;
    }
  };
  //Add elements to the beggining of the list
  const prepend = (value) => {
    const Node = node(value);

    if (headNode === null) {
      headNode = node;
    } else {
      //   console.log("headNode nextNode is: " + headNode.nextNode.value);
      Node.nextNode = headNode;
      headNode = Node;
    }
  };
  //Return the numbers of elements stored in the list
  const size = () => {
    let currentNode = headNode;
    let size = 0;

    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      size++;
    }

    return size;
  };
  //Return the head of the list
  const head = () => {
    return headNode.value;
  };
  //Return the tail of the list
  const tail = () => {
    return tailNode.value;
  };
  //Return the vlaue of the element at the given index
  const at = (index) => {
    let currentNode = headNode;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  };
  //Remove the last element of the list
  const pop = () => {
    let currentNode = headNode;
    while (currentNode.nextNode !== tailNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
    tailNode = currentNode;
  };
  //Returns true if the passed in value is in the list and otherwise returns false
  const contains = (value) => {
    let contain = false;
    let currentNode = headNode;

    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) {
        contain = true;
        break;
      }
      currentNode = currentNode.nextNode;
    }

    return contain;
  };
  //Returns true if the passed in value is in the list and otherwise returns false
  const find = (value) => {
    let currentNode = headNode;
    let index = 0;
    let containsAt = null;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        console.log("Value is: " + currentNode.value);
        containsAt = index;
        break;
      }
      index++;
      currentNode = currentNode.nextNode;
    }

    return containsAt;
  };
  //Represent the objects in the list as strings
  const toString = () => {
    let string = "";
    let currentNode = headNode;

    while (currentNode !== null) {
      string += `( '${currentNode.value}' ) -> `;
      currentNode = currentNode.nextNode;
    }
    string += "null";

    return string;
  };
  //Adds an element at a given index
  const insertAt = (index, value) => {
    if (index > size()) {
      console.log(size());
      throw "Index out of bounce!";
    } else {
      let prevNode = null;
      let currentNode = headNode;
      let newNode = node(value);
      for (let i = 0; i < index; i++) {
        console.log("Interation: " + i);
        if (i === index - 1 && index !== 0) {
          prevNode = currentNode;
        }
        currentNode = currentNode.nextNode;
      }
      newNode.nextNode = currentNode;
      if (prevNode !== null) {
        prevNode.nextNode = newNode;
      } else {
        headNode = newNode;
      }
    }
  };
  const removeAt = (index) => {
    if (index >= size()) {
      throw "Index out of bounce!";
    } else {
      let currentNode = headNode;
      let prevNode = null;
      for (let i = 0; i < index; i++) {
        if (i === index - 1 && index !== 0) {
          prevNode = currentNode;
        }
        currentNode = currentNode.nextNode;
      }
      if (prevNode !== null) {
        prevNode.nextNode = currentNode.nextNode;
      } else {
        headNode = currentNode.nextNode;
      }
      console.log("size is: " + size());
      console.log(currentNode.value);
      if (index == size()) {
        tailNode = prevNode;
      }
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const list = LinkedList();
list.append("A");
list.append("B");
list.append("C");
list.append("D");
list.prepend("X");
console.log(list.toString());
console.log("head is: " + list.head());
console.log("tail is: " + list.tail());
console.log(list.size());
console.log(list.at(0));
console.log(list.toString());
console.log("tail is: " + list.tail());
console.log("Cotains X?: " + list.contains("X"));
console.log("Return the index of ('B'): " + list.find("B"));
console.log(list.toString());
console.log(list.toString());
list.insertAt(4, "Z");
console.log(list.toString());
list.pop();
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());
console.log("head is: " + list.head());
console.log("tail is: " + list.tail());
