//es5中  变量的作用域区别{}
function fn() {
    var a = 10;
    var b = 20;
}
//es6  ts
{
    var a = 10;
    var b = 20;
    console.log(a);
}
console.log(b);
var c = [];
var _loop_1 = function (i) {
    c[i] = function () {
        console.log(i);
    };
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
console.log(c[5]);
c[5]();
