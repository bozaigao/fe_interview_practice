function flatArray(array){
    let res = [];

    for(let element of array){
        if(Array.isArray(element)){
            res = res.concat(flatArray(element));
        }else{
            res.push(element);
        }
    }
    return res;
}

console.log(flatArray([1,2,3,[[[[[2,3,4],2]]]]]))