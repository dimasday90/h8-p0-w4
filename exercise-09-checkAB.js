function checkAB(num) {
    var jarakAB = 0;
    for(var i = 0; i < num.length; i ++) {
        for(var j = num.length - 1; j > i; j --) {
            if(num[i]=== 'a' && num[j] === 'b') {
                jarakAB = j - i;
            }
        }
    }
    if(jarakAB >= 3) {
        return true;
    } else if(jarakAB < 3) {
        return false;
    }
}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false