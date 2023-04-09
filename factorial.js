function factorial(n){
  let result = 1n;
  for(let i = 2n; i<n; i++){
    result *= i;
  }

  return result;
}

console.log('10000的阶乘', factorial(10000));