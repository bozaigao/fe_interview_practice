function unique(array){
    let set = new Set(array);
    let targetArr = Array.from(set);
    return targetArr;
}

let test1 = [1,1,2,3,4,5,5,6];
let test2 = ['1','1','2','3','4','5','5','6'];
console.log('数组去重',unique(test1),unique(test2));