function quickSort(arr){
    if(arr.length<=1)
    return arr;
    let left = [],right = [],mid = arr[0];

    for(let i=1; i<arr.length; i++){
        if(arr[i]<=mid){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(mid,quickSort(right));
}

let arr = [2,3,5,3,2,7,8,10,11];
console.log('quickSort',quickSort(arr));