function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if(arrPenumpang === []) {
        return [];
    } else {
        var arrBaru = [];
        for(var i = 0; i < arrPenumpang.length; i ++) {
            var obj = {};
            obj.penumpang = arrPenumpang[i][0];
            obj.naikDari = arrPenumpang[i][1];
            obj.tujuan = arrPenumpang[i][2];
            var tarif = 2000;
            var countRute = 0;
            var totalTarif = 0;
            for(var j = 0; j < rute.length; j ++) {
                for(var k = rute.length - 1; k > j; k --) {
                    if((rute[j] === obj.naikDari && rute[k] === obj.tujuan) || (rute[k] === obj.naikDari && rute[j] === obj.tujuan)) {
                        /* dengan Math.abs */
                        // countRute = Math.abs(j - k);
                        // totalTarif = countRute * tarif;
                        
                        /* tanpa Math.abs */
                        countRute = j - k;
                        if(countRute < 0) {
                            countRute *= -1
                            totalTarif = countRute * tarif;
                        } else {
                            totalTarif = countRute * tarif;
                        }
    
                    }
                }
            }
            obj.bayar = totalTarif;
            arrBaru.push(obj);
        }
        return arrBaru
    }
}
  
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

console.log(naikAngkot([['Dimas', 'B', 'E'], ['Icha', 'A', 'B'], ['Adam', 'D', 'A']]));