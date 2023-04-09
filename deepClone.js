let object = {
    name:'xiaoming',
    age:30,
    inter:['篮球','游泳','街舞'],
    print:function(){
        console.log('信息',this.name, this.age);
    }
}

let targetObject = {};
function deepClone(copyObject){

    for(key in copyObject){
        let type = Object.prototype.toString.call(copyObject[key]).substring(0,8);
        if(type === 'object'){
            targetObject[key] = deepClone(copyObject[key]);
        }else if(type === 'array')
        {
            targetObject[key] = [].concat(copyObject[key]);
        }else{
            targetObject[key] = copyObject[key];
        }
    }
    return targetObject;
}

console.log('对象深度拷贝', object, deepClone(object));