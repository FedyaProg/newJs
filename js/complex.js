
let num = 266219;
mult = ('' + num).split('');
// console.log(mult);
p = 1;

for(var i = 0; i < mult.length; i++) {
    p *= mult[i];
}
console.log(p);
p = p*p*p;
console.log(('' + p).substring(0, 2));

