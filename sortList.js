class ListNode {
    constructor(val,next){
        this.val = val;
        this.next = next===undefined? null: next;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(3);
let node3 = new ListNode(2);
let node4 = new ListNode(5);
let node5 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function print(listNode){
    let current = listNode;
    while(current){
        console.log('current',current.val);
        current = current.next;
    }
}

function sortList(listNode){
  let arr = [];
  let current = listNode;
    while(current){
        arr.push(current.val);
        current = current.next;
    }

    arr.sort((a,b)=>a-b);

    current = listNode;
    let i = 0;
    while(current){
        current.val = arr[i];
        current = current.next;
        i++;
    }

    return listNode;

}

console.log('排序', print(sortList(node1)));