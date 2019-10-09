/* tanpa method .split */
// function ubahHuruf(kata) {
//     var alp = 'abcdefghijklmnopqrstuvwxyz';    
//     var arrKata = [];
//     for(var a = 0; a < kata.length; a ++) {
//         arrKata.push(kata[i]);
//     }
//     for(var a = 0; a < kata.length; a ++) {
//         arrKata.push(kata[a]);
//     }
//     var kataBaru = []
//     for(var i = 0; i < arrKata.length; i ++) {
//         if(arrKata[i] === 'z') {
//             kataBaru.push('a')
//         } else {
//             for(var j = 0; j < alp.length; j ++) {
//                 if(arrKata[i] === alp[j]) {
//                     kataBaru.push(alp[j + 1]);       
//                 }
//             }
//         }
//     }
//     var stringKata = '';
//     for(var k = 0; k < kataBaru.length; k ++) {
//         stringKata += kataBaru[k];
//     }
//     return stringKata;
// }


/* dengan method split */
function ubahHuruf(kata) {
    var alp = 'abcdefghijklmnopqrstuvwxyz';
    var arrKata = kata.split('');
    var kataBaru = []
    for(var i = 0; i < arrKata.length; i ++) {
        if(arrKata[i] === 'z') {
            kataBaru.push('a')
        } else {
            for(var j = 0; j < alp.length; j ++) {
                if(arrKata[i] === alp[j]) {
                    kataBaru.push(alp[j + 1]);       
                }
            }
        }
    }
    var stringKata = '';
    for(var k = 0; k < kataBaru.length; k ++) {
        stringKata += kataBaru[k];
    }
    return stringKata;
}



console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

console.log(ubahHuruf('z')); // a
console.log(ubahHuruf('banzai')); // cboabj