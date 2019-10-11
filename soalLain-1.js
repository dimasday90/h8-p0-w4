/*
Function belanjaLagi akan mengembalikan berupa dataList array of object yang berisikan dengan dataList
total penjualan yang telah disediakan

-nama product
-list nama yang belanja product tersebut
-total stock yang tesrsedia
-harga dari masing masing product tersebut


Note;
1. Tidak boleh menggunakan built fucntion apapun kecuali .push();


*/



function belanjaLagi(dataList) {
  let listGoods = [
    ['Ipong', 1500000, 6],
    ['Semsang', 1000000, 8],
    ['Siomi', 750000, 10]
  ]

  var arrGoods = [];
  for(var i = 0; i < listGoods.length; i ++) {
    var objGoods = {};
    objGoods.product = listGoods[i][0];
    objGoods.listName = [];
    objGoods.productLeft = listGoods[i][2];
    objGoods.totalCost = 0;
    arrGoods.push(objGoods);
  }
  if(dataList.length === 0) {
    return [];
  } else {
      for(var j = 0; j < arrGoods.length; j ++) {
        for(var k = 0; k < dataList.length; k ++) {
          if(arrGoods[j].product === dataList[k].product && arrGoods[j].productLeft > dataList[k].amount) {
            arrGoods[j].listName.push(dataList[k].name);
            arrGoods[j].productLeft -= dataList[k].amount;
            arrGoods[j].totalCost += (listGoods[j][1] * dataList[k].amount)
          } 
        }
      }
      return arrGoods;
    } 
};



console.log(belanjaLagi([{
  name: 'Shafur',
  product: 'Ipong',
  amount: 2
}, {
  name: 'Danang',
  product: 'Semsang',
  amount: 3
}, {
  name: 'Alif',
  product: 'Semsang',
  amount: 2
}]));
console.log("====================================================");
/*
[ { product: 'Ipong',
    listName: [ 'Shafur' ],
    productLeft: 4,
    totalCost: 3000000 },
  { product: 'Semsang',
    listName: [ 'Danang', 'Alif' ],
    productLeft: 3,
    totalCost: 5000000 },
  { product: 'Siomi', 
    listName: [], 
    productLeft: 10, 
    totalCost: 0 } ]
*/
console.log(belanjaLagi([{
  name: 'Shafur',
  product: 'Siomi',
  amount: 5
}, {
  name: 'Danang',
  product: 'Ipong',
  amount: 4
}, {
  name: 'Alif',
  product: 'Ipong',
  amount: 3
}]));
console.log("====================================================");

// [ { product: 'Ipong',
//     listName: [ 'Danang'],
//     productLeft: 2,
//     totalCost: 6000000 },
//   { product: 'Semsang', 
//     listName: [], 
//     productLeft: 8, 
//     totalCost: 0 },
//   { product: 'Siomi',
//     listName: [ 'Shafur' ],
//     productLeft: 5,
//     totalCost: 3750000 } ]

console.log(belanjaLagi([{
  name: 'Shafur',
  product: 'Semsang',
  amount: 4
}, {
  name: 'Danang',
  product: 'Siomi',
  amount: 5
}]));
console.log("====================================================");

// [ { product: 'Ipong', 
//     listName: [], 
//     productLeft: 6, 
//     totalCost: 0 },
//   { product: 'Semsang',
//     listName: [ 'Shafur' ],
//     productLeft: 4,
//     totalCost: 4000000 },
//   { product: 'Siomi',
//     listName: [ 'Danang' ],
//     productLeft: 5,
//     totalCost: 3750000 } ]
// */
console.log(belanjaLagi([])); // []