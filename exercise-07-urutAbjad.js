function urutkanAbjad(str) {
    var alp = 'abcdefghijklmnopqrstuvwxyz'
    var urut = '';
    for(var i = 0; i < alp.length; i ++) {
        for(var j = 0; j < str.length; j ++) {
            if(str[j] === alp[i]) {
                urut += alp[i];
            }
        }
    }
    return urut;
}
  
  
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

console.log(urutkanAbjad('zabuza'));
console.log(urutkanAbjad('wawawawa'));