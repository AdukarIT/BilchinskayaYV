//1 

function sumThreeNumbers (a, b, c) {
	return a + b + c;
}
console.log(sumThreeNumbers(1, 2, 3));

//2

function sumX(x) {
let sum = 0;
	for (let i = 1; i <= x; i++) {
		sum += i;
	}
		return sum;
}
console.log(sumX(10));

//3

function sumDigits(num) {
	let sum = 0;
	let curentDigits;
		while (num > 0) {
			curentDigits = num % 10;
			num = (num - curentDigits) / 10;
			sum += curentDigits;
		}
			return sum;
}

console.log(sumDigits(226));

//4
	
function factorial(x) {
	if (x == 1) {
		return (1);
	} else {
		return (x * factorial(--x));
	}
}
	console.log(factorial(4));