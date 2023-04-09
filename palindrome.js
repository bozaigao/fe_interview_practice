function isPalindrome(str){
    for(let i=0; i<str.length/2; i++){
        if(str[i] !== str[str.length - 1 - i])
        return false;
    }

    return true;
}

console.log('回文字符串', isPalindrome('1121'))