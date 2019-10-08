function fpb(angka1, angka2) {
    var arr1 = [];
    var arr2 = [];
    var arrSekutu = [];
    for(var i = 1; i <= angka1; i ++) {
        for(var j = angka1; j > 0; j --) {
            if((j * i) === angka1) {
                arr1.push(i)
            }
        }
    }
    // console.log(arr1);
    
    for(var k = 1; k <= angka2; k ++) {
        for(var l = angka2; l > 0; l --) {
            if((l * k) === angka2) {
                arr2.push(k)
            }
        }
    }
    // console.log(arr2);
    
    for(var m = arr1.length -1; m >= 0; m --) {
        for(var n = arr2.length -1; n >= 0; n --) {
            if(arr1[m] === arr2[n]) {
                arrSekutu.push(arr2[n])
            }
        }
    }
    // console.log(arrSekutu);
    return arrSekutu[0];
}
  
  
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1