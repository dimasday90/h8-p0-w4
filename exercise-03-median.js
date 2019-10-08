function cariMedian(arr) {
    if(arr.length % 2 !== 0) {
        return arr[(arr.length -1) / 2]
    } else {
        var med1 = arr[Math.floor((arr.length - 1) / 2)];
        // console.log(arr[Math.floor((arr.length - 1) / 2)]);
        var med2 = arr[arr.length / 2]
        // console.log(arr[arr.length / 2]);
        var sumMed = med1 + med2;
        var median = sumMed / 2;
        return median;
    }
}
  
 
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5