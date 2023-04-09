class ListNode {
    constructor(val, next) {
      this.val = val;
      this.next = next === undefined ? null : next;
    }
  }

function mergeTwoLists(l1,l2){
    if(l1 === null){
        return l2;
    }
    if(l2 === null){
        return l1;
    }

    if(l1.val <= l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

let node1_1 = new ListNode(1);
let node2_1 = new ListNode(2);
let node3_1 = new ListNode(3);
node1_1.next = node2_1;
node2_1.next = node3_1;

function print(listNode){
    let current = listNode;
    while(current){
        console.log('current',current.val);
        current = current.next;
    }
}

console.log('链表',print(mergeTwoLists(node1,node1_1)));