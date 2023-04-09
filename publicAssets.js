function intersection(arr1,arr2){

    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let common = [];

    for(let i of set1){
        if(set2.has(i)){
            common.push(i);
        }
    }

    return common;
}

console.log('公共数据', intersection([1,2,3,4,5],[3,4,5,6]));