class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function create(data){
    const head = new Node(data);
    return head;
}

function insert(head, data){
    while(head.next !== null){
        head = head.next;
    }
    head.next = new Node(data);
}

function print(head){
    while(head !== null){
        console.log(head.data);
        head = head.next;
    }
}

function reverse(head){
    let tail = head.next;
    head.next = null;
    while(tail){
        let temp = tail;
        tail = tail.next;
       
        temp.next = head;
        head = temp;
    }
    return head;
}

const head = create(2);
insert(head, 3);
insert(head, 5);
insert(head, 7);
insert(head, 9);
print(head);

console.log("Reversed Linked list :")
const newHead = reverse(head);
print(newHead);