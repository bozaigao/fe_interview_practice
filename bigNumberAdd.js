function bigNumberAdd(number1,number2){

    let result = '',carry = false;
    number1 = number1.split('');
    number2 = number2.split('');
    while(number1.length || number2.length || carry){
        carry += ~~number1.pop() + ~~number2.pop();
        result = carry % 10 + result;
        carry = carry > 9;
    }

    return result;
}
console.log(bigNumberAdd('12345234523452345234523452','123412341234132413413411414'));
console.log('大数相加', (12345234523452345234523452n+123412341234132413413411414n).toString());