let arr = [1,2,3,56,2,8,10,11,12];
let min = arr[0], max = arr[0];
for(let i=0; i<arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
    }
    if(max < arr[i]){
        max = arr[i];
    }
}

console.log('最大与最小',max,min);