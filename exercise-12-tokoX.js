function countProfit(shoppers) {
    let listBarang = [ 
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];
  
    // you can only write your code here!
    var arrBarang = [];
    for(var i = 0; i < listBarang.length; i ++) {
        var objBarang = {};
        objBarang.product = listBarang[i][0];
        objBarang.shoppers = [];
        objBarang.leftOver = listBarang[i][2]
        objBarang.totalProfit = 0;
        arrBarang.push(objBarang);
    };
    // console.log(arrBarang);
    
    if(shoppers.length === 0) {
        return [];
    } else {
        for(var k = 0; k < arrBarang.length; k ++) {
            for(var l = 0; l < shoppers.length; l ++) {
                if(arrBarang[k].product === shoppers[l].product) {
                    arrBarang[k].shoppers.push(shoppers[l].name);
                    arrBarang[k].leftOver -= shoppers[l].amount;
                    arrBarang[k].totalProfit += (listBarang[k][1] * shoppers[l].amount);
                } 
                else if(arrBarang[k].leftOver < shoppers[l].amount) {
                        objBarang.shoppers = objBarang.shoppers;
                        objBarang.leftOver = objBarang.leftOver;
                        objBarang.totalProfit = objBarang.totalProfit;
                }
            }
        }
        return arrBarang;
    }
}
  

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]