alert("Задача № 3.")

let students = prompt("Введите количество студентов");
let desks = prompt("Введите количество парт");

function checkDesks (students, desks) {
	let atTheDesk = desks * 2;
	let result = 0;
		if (students == atTheDesk) {
			console.log("Все ок");
		} else if (students > atTheDesk) {
			result = Math.ceil((students-atTheDesk) / 2);
			console.log("Не хватает " + result + " парт");
		} else if (students < atTheDesk) {
			result = Math.floor((atTheDesk - students) / 2);
			console.log(result + " лишних парт"); 
		}
}

checkDesks(students, desks);

alert("Задача № 4.")
console.clear();

let assessment = prompt("Введите оценку");
function check(assessment) {
switch (assessment) {
	case "1":
	case "2":
		console.log("Unsatisfactory");
			break;
	case "4":
	case "3":
		console.log("Satisfactory");
			break;
	case "5":
		console.log("Almost good");
			break;
	case "6":
		console.log("Good");
			break;
	case "7":
		console.log("Very good");
		break;
	case "8":
		console.log("Almost excellent");
		break;
	case "9":
		console.log("Excellent");
		break;
	case "10":
		console.log("Brilliant");
		break;
	default:
		console.log("error");
}
}

check(assessment);

alert("Задача № 7.")
console.clear();

let unknownNumber = prompt("Введите число");

function primeNumber(x) {
	for (let i = 2; i < unknownNumber; i++) {
    	if (!(unknownNumber % i)) {
  			return(unknownNumber + " - составное число");
    	}
  	}
			return(unknownNumber + " - простое число");
}
console.log(primeNumber(unknownNumber));

alert("Задача № 8.")
console.clear();

let month = prompt("Введите номер месяца");
function monthNumber(month) {
switch (month) {
	case "12":
	case "1":
	case "2":
		console.log("Зима");
			break;
	case "3":
	case "4":
	case "5":
		console.log("Весна");
			break;
	case "6":
	case "7":
	case "8":
		console.log("Лето");
			break;
	case "9":
	case "10":
	case "11":		
		console.log("Осень");
			break;
	default:
		console.log("Попробуйте еще раз");
}
}

monthNumber(month);

alert("Задача № 9.")
console.clear();

function getNumberSeven() {
	for(let i = 99; i > 10; i--) {
		if ((i % 10 == 7) || !(i % 7)) {
			console.log(i);
		}
	}
}

getNumberSeven();

alert("Задача № 10.")
console.clear();

function getDividers() {
	for (let i = 2; i <= 20; i++) {
		for (let j = 1; j <= 20; j++) {
		if(!(i % j))
			console.log(j);
	}
	}
}

getDividers();

alert("Задача № 11.")
console.clear();

//немного не по условию 
let x = prompt("Введите число");
function getDividersAnyNumbers(x) {
  for (let i = 1; i <= x; i++) {
    if (!(x % i)) {
      console.log(x + " / " + i);
    }
  }
}

getDividersAnyNumbers(x);

alert("Задача № 12.")
console.clear();

let size = prompt("Введите число");
let unit = prompt("Кб, Мб, Гб");
function getByte(size, unit) {
	switch(size, unit) {
		case "Кб":
			console.log(size * Math.pow(2,10));
				break;
		case "Мб":
			console.log(size * Math.pow(2,20));
				break;
		case "Гб":
			console.log(size * Math.pow(2,30));
				break;
		default:
			console.log("error");
	}
}

getByte(size, unit);

alert("Задача № 13.")
console.clear();

let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
let case1;
let case2;

function getDivider(num1, num2) {
	let divider = 0;
    	if (num1 < num2) {
     		case1 = num2; 
     		num2 = num1; 
     		num1 = case1;
     	} 
     		do { 
        		if (num1 % num2 == 0){
            	divider = num2;
            } 
        else {
            case2 = num2;
            num2 = num1 % num2;   
            num1 = case2;    
            divider = num2; 
           }
        } 
        while (num1 % num2 != 0);
        if (divider != 1) { 
            console.log(divider);
            }
}

getDivider(num1, num2);

alert("Задача № 14.")
console.clear();
//????
let num3 = prompt("Введите первое число");
let num4 = prompt("Введите второе число");

function getAnotherDivider(num3, num4) {
	if (num4) { 
		return getAnotherDivider(num4, num3 % num4);
 	} else { return Math.abs(num3); 
 	} 
} 
console.log(getAnotherDivider(num3, num4));

alert("Задача № 15.")
console.clear();

let pencil = prompt("Введите количество карандашей");
function words(pencil) {
	if (pencil % 10 == 1) {
		console.log(pencil + " карандаш");
	} else if (pencil % 10 > 1 && pencil % 10 <= 4) {
		console.log(pencil + " карандаша");
	} else if (pencil % 10 > 4)
		console.log(pencil + " карандашей");
}

words(pencil);


alert("Задача № 16.")
console.clear(); 

let number = prompt("Введите число");
function sumOfSquares(number) {
		for (let i = 1; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			if (number == Math.pow(i,2) + Math.pow(j,2)) {
				console.log(number + " можно представить в виде суммы квадратов " + i + " и " + j);
			}
		}
		}
}

sumOfSquares(number);


/*Практика на паре*/
/*
alert("Задача № 1.")

let x = prompt("Введите первый катет");
let y = prompt("Введите второй катет");
let z = prompt("Введите гипотенузу");
let a;
let b;
let c;
function isItTriangle (a, b,c) {
	if (a <= 0 || b <= 0 ||  c <=0 )
	  return (a*a + b*b == c*c);
}
if (isItTriangle(x, y, z)) {
		console.log("Прямоугольный треугольник");
	} else {
		console.log("Треугольник не очень");
	}
		isItTriangle(a,b,c)

alert("Задача № 2.")
console.clear();

function repeat(input, count) {
	let result = "";
	for (let i = 0; i < count; i++) 
		result += input;
	return result;
}

console.log(repeat("ба", 3));

alert("Задача № 5.")
console.clear();

let i = prompt("Введите число");
	function number(i) {
let input;
	do {
		input = prompt("Введите число");
	}
	while (input != 0) {		 	
	}
}
number(i);

alert("Задача № 6.")
console.clear();

function number() {
	let inputCounter = 0;
	let sum = 0;
		do {
			sum += +prompt("vvod");
			inputCounter++;
		}
	    while (sum < 100);
		 console.log(sum);	 	
			return inputCounter;
}

number();
*/