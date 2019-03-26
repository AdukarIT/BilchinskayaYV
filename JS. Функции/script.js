
alert("Задача № 1. Наименьшее из чисел.")
	
	function minNumber(number1, number2, number3) {
			let min = Math.min(number1, number2, number3);
  				console.log(min);
 	}
			
	minNumber(1, 2, 0); //0
	minNumber(-1, -8, 2); //-8
	minNumber(-60, 58, 9); //-60
		
alert("Задача № 1(2). Наименьшее из чисел.")
console.clear();

	function minNumberSecond(num1, num2, num3) {
		if (num1 < num2 && num1 < num3) {
			return(num1);
		} else if (num2 < num1 && num2 < num3) {
			return(num2);
		} else {
			return(num3);
		}
 	}

	console.log(minNumberSecond(1, 2, 0));
	console.log(minNumberSecond(-1, -8, 2));
	console.log(minNumberSecond(-60, 58, 9));

alert("Задача № 2. Количество секунд.")
console.clear();

	function numberOfSeconds (days, hours, minutes) {
		return ((days * 86400) + (hours * 3600) + (minutes * 60));
	}

	console.log(numberOfSeconds(1, 3, 60)); //100800 sec

alert("Задача № 3. Подсчёт факториала числа.")
console.clear();
		
	let x = prompt("Введите число");
		function factorial(x) {
			if (x == 1) {
				return (1);
			} else {
				return (x * factorial(--x));
			}
		}

	console.log(factorial(x));

alert("Задача № 4. Последовательность чисел.")
console.clear();

	let i = prompt("Введите число");
	let n = 0;
		function turnNumber(i) {
			while (i > 0) {
				n = n * 10 + i % 10;
    			i = Math.floor(i / 10);
			}
 					return n;
		} 

	console.log(turnNumber(i));

alert("Задача № 5. Квадратные уравнения.")
console.clear();

function quadraticEquation(a, b, c) {
	let D = (Math.pow(b, 2) - 4 * a * c);
		if (D > 0) {
			console.log("x = " + (-b + Math.sqrt(D)) / (2 * a));
			console.log("x = " + (-b - Math.sqrt(D)) / (2 * a));
				return("Квадратное уравнение имеет два корня");
		}
		if (D == 0) {
			console.log("x = " + (-b) / (2 * a));
				return("Квадратное уравнение имеет один корень");
		}
		if (D < 0) {
				return("Квадратное уравнение не имеет корней в действительных числах.");
		}
}

	console.log(quadraticEquation(5, -8, 3)); // 1 , 0.6
	console.log(quadraticEquation(16, 8, 1)); // x = -0.25
	console.log(quadraticEquation(9, 6, 2)); // нет корней