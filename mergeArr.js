function mergeArr(arr1,arr2){

    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    let merge = [];
    let i = 0; j = 0;
    
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            merge.push(arr1[i]);
            i++;
        }else{
            merge.push(arr2[j]);
            j++;
        }
    }

    return merge.concat(arr1.slice(i)).concat(arr2.slice(i));
}

console.log('合并',mergeArr([1, 5, 5], [2, 6, 4,4]));