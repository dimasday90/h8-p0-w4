function digitPerkalianMinimum(angka) {
    var arrAngka = [];
    for(var i = 1; i <= angka; i ++) {
        for(var j = angka; j >= i; j --) {
            if((j * i) === angka) {
                arrAngka.push(String(i)+String(j));
            }
        }
    }
    // console.log(arrAngka);
    var min = arrAngka[0].length;
    for(var j = 0; j < arrAngka.length; j ++) {
        if(arrAngka[j].length < min) {
            min = arrAngka[j].length;
        }
    }
    return min;
}
  
  
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

console.log(digitPerkalianMinimum(99)); // 3
console.log(digitPerkalianMinimum(36)); // 2
console.log(digitPerkalianMinimum(23)); // 3