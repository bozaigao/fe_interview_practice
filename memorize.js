const memorize = (fn) => {
    const obj = {}
    return (...args) => {
        const key = JSON.stringify(args)
        if (obj[key]) {
            return obj[key]
        } else {
            return (obj[key] = fn.apply(this, args))
        }
    }
}


function sum(a,b){
    return a+b;
}

console.log(sum(1,2),memorize(sum)(1,2))