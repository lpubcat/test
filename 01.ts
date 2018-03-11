//es5中  变量的作用域区别{}
function fn(){
	var a = 10;
	var b = 20;
}


//es6  ts
{
	let a = 10;
	//let a = 20;let 不能有重名
	var b = 20;
	var b = 30;
	console.log(a);
	const ICN = 000;
	//ICN = 1000;常量不能被重新赋值
	const obj = {
		name:"脏三"
	}
	obj.name = "李思"
	//
}
console.log(b);



/*var c = []
for(let i =0;i<10;i++){
	c[i] = function(){
		console.log(i);
	}
}//用var时   i>=10的时候跳出循环，之后又执行c[5]()   i的值就是10

console.log(c[5]);
c[5]();//用let时   i变成局部的
*/