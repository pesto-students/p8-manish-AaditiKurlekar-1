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

function print(head) {
  while (head !== null) {
    console.log(head.data);
    head = head.next;
  }
}

function rotate(originalhead, k) {
  let head = originalhead;

  for (let i = 0; i < k; i++) {
    let lastnode = head;
    let current = head;
    head = head.next;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = lastnode;
    lastnode.next = null;
  }

  return head;
}

const head = create(2);
insert(head, 3);
insert(head, 5);
insert(head, 7);
insert(head, 9);
print(head);

console.log("Rotated Linked list :");
const newHead = rotate(head, 3);
print(newHead);
