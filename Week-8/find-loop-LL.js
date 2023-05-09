class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function create(data) {
  const head = new Node(data);
  return head;
}

function insert(head, data) {
  while (head.next !== null) {
    head = head.next;
  }
  head.next = new Node(data);
}

function createLoop(x) {
  const head = create(2);
  insert(head, 3);
  insert(head, 5);
  insert(head, 7);
  insert(head, 9);

  let current = head;
  for (let i = 0; i < x - 1; i++) {
    current = current.next;
  }

  let lastNode = head;
  while (lastNode.next != null) {
    lastNode = lastNode.next;
  }

  lastNode.next = current;
  return head;
}

function print(head) {
  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}

function detectLoop(head) {
  let current = head;
  let uniqueNodes = new Set();

  while (current !== null) {
    if(uniqueNodes.has(current)){
      break;
    }
    uniqueNodes.add(current);
    current = current.next;
  }

  if (current == null) {
    return "Loop does not exists";
  } else if (uniqueNodes.has(current)) {
    return "Loop exists, last node connected to " + current.data;
  }
}

const head = create(2);
insert(head, 3);
insert(head, 5);
insert(head, 7);
insert(head, 9);
print(head);
console.log(detectLoop(head));

const Newhead = createLoop(3);
console.log(detectLoop(Newhead));


