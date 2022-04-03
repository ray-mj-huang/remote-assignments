/* 

Assignment 1: Function and Array

Complete the function below to find the max number of the passing array of numbers.
Reminder: you cannot use built-in Math.max() or sort() to complete this assignment.

*/

function max(numbers){

	var max = numbers[0];

	for ( var i = 1; i < numbers.length; i++ ) {
		if ( numbers[i] > max ) {
			max = numbers[i];
		}
	}

	return max;


}
max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7





/* 

Assignment 2: Object

In JavaScript, there are many different sets of syntax for creating objects. In the code below,
function parameters are encapsulated into an object, try using at least two ways to create a
proper object as a parameter of the calculate function.

*/

function calculate(args){
	
	let result;

	if ( args.op === "+" ) {
		result = args.n1 + args.n2;

	} else if ( args.op === "-" ) {
		result = args.n1 - args.n2;

	} else {
		result = "Not supported";

	}

	return result;
}


// Try to call calculate function correctly


// 方式 1：

calculate({op:'+',n1:3,n2:4});


// 方式 2：

var aaa = {
	op: '+',
	n1: '3',
	n2: '4',
};

calculate(aaa);


// 方式 3：

function arg (op,n1,n2) {
	this.op = op;
	this.n1 = n1;
	this.n2 = n2;
}

var bbb = new arg("+",3,4);

calculate(bbb);





/*

Assignment 3: Function, Array, and Object

Complete the function below to calculate the average price of all the products.

*/



function avg(data){
	
	
	var len = data.size;
	var sum = 0;
	
	for ( var i = 0; i < len; i++ ) {

		sum = sum + data.products[i].price;

	}

	return sum / len;

}



