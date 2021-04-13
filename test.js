let str = ' ziA';
// console.log(str[0] == str[0].toUpperCase());
// console.log(str[0] == str[0].toLowerCase());
// console.log(str[0] == Number.isInteger(str[0]));
// console.log(/\s/.test(str));


const checkFirst = (string, pos) => {
    // let str = Array.from(string.trim());
    let str = string.trim();
    console.log(reg.test(str[pos]));
}
// checkFirst(str, 2)
// console.log(checkFirst(str));
// (function () {
//     var a = 10;
//     var b = 5;
//     var add = function () {
//         return a + b;
//     };
//     console.log(add());
//     console.dir(add);
//     a = 20;
//     b = 25;
//     console.log(add());
//     console.dir(add);
// })();
// var sum = 0;
// function doSome(a) {
//     return function (b) {
//         return a + b;
//     };
// }
// var temp = doSome(2);
// sum = sum + temp(8);
// console.dir(temp);

// !(function msg() {
//     console.log('Hello World!');
// })();

// +(function test() {
//     console.log('This is Test...');
// })()
//result = Hello World! This is Test... (NaN)

// for (var x = 0; x < 3; x++){
//     setTimeout(function() {
//         console.log();
//     }, 2000);
// };
//result = 3 3 3

for (var i = 1; i <= 3; i++) {
    (function(index) {
        setTimeout(function() { console.log(index); },2000);
    })(i);
}



// function Counter() {
//     let count = 0;
//     this.up = function () {
//         return ++count;
//     };
//     this.down = function () {
//         return --count;
//     };
// };

// let counter = new Counter();
// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down());