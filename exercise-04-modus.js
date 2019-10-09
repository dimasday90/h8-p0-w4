function cariModus(arr) {
    count = 0;
    var boolean = false;
    var patokan = arr[0]
    for(var i = 0; i < arr.length; i ++) {
        var temp = 0;
        for(var j = 0; j < arr.length; j ++) {
            if(arr[i] === arr[j]) {
                temp ++;
            } else {
                boolean = true;
            }
        }
        if(temp > count) {
            patokan = arr[i];
            count = temp;
        }
    }
    // return patokan + '-' + count;
    if(boolean = false) {
        return -1;
    } else if(count === arr.length) {
        return -1;
    } else {
        return patokan;
    }
}

console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

console.log(cariModus([10, 4, 5, 2, 4, 10])); // 10
console.log(cariModus([5, 10, 2, 10, 2, 2, 6, 5])); // 2 
console.log(cariModus([3, 5, 2, 5, 2, 2, 5, 5])); // 5
console.log(cariModus([7, 7, 7, 7, 7, 7, 7])); // -1
console.log(cariModus([8, 8, 8, 8])); // -1
console.log(cariModus([8, 8, 2, 8, 8])); // 8
