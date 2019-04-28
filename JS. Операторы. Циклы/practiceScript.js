//1 

let num1 = +prompt("число");
let num2 = +prompt("число");
	if(num1 > num2) {
		console.log(num1);
	} else {
		console.log(num2);
	}

//2

let num3 = +prompt("число");
let num4 = +prompt("число");
let sign = (num3 * num4 >= 0) ?	console.log("+") : console.log("-");

//3

let a = +prompt("число");
let b = +prompt("число");
let c = +prompt("число");
	if (a < b && a < c) {
		console.log(a);
	if (b < c) {
		console.log(b);
		console.log(c);
	} else {
		console.log(c);
		console.log(b);
	}
	}
	if (b < a && b < c) {
		console.log(b);
	if (a < c){
		console.log(a);
		console.log(c);
	} else {
		console.log(c);
		console.log(a);
	}
	}
	if (c < a && c < b) {
		console.log(c);
	if (a < b){
		console.log(a);
		console.log(b);
	} else {
		console.log(b);
		console.log(a);
	}
	}

//4

(num1 > num2) ? console.log(num1) : console.log(num2);

//5

let input = prompt("Введите число");
switch (input) {
	case "1":
		alert("один");
			break;
	case "2":
		alert("два");
			break;
	case "3":
		alert("три");
			break;
	case "4":
		alert("четыре");
			break;
	case "5":
		alert("пять");
			break;
	default:
		alert(input + " – число.");
}

//6

let x = +prompt("Число");
	for(let i = 2; i <= x; i++) {
	for (let j = 2; j < i; j++) {
		if(!(i % j)) {
			break;
		}
	}
		if (j == i) {
		console.log(j);
		}
	}
	
//7

for (let x = +prompt("Число"); x > 0; x--) {
	if (!(x % 2)) 
	console.log(x);
}
   
//8

let x = +prompt("Число");
while (x >= 2) {
    if (!(x % 2))
        console.log(x);
    	x--;
}