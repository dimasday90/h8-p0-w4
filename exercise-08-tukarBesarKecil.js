/* tanpa charAt */
// function tukarBesarKecil(kalimat) {
//     var newStr = '';
//     for(var i = 0; i < kalimat.length; i ++) {
//         if(kalimat[i] === kalimat[i].toUpperCase()) {
//             newStr += kalimat[i].toLowerCase();
//         } else {
//             newStr += kalimat[i].toUpperCase();
//         }
//     }
//     return newStr;
// }


/* dengan chatAt */
function tukarBesarKecil(kalimat) {
    var newStr = '';
    for(var i = 0; i < kalimat.length; i ++) {
        if(kalimat.charAt(i) === kalimat.charAt(i).toUpperCase()) {
            newStr += kalimat.charAt(i).toLowerCase();
        } else {
            newStr += kalimat.charAt(i).toUpperCase();
        }
    }
    return newStr;
}



console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"