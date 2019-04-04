/*alert("Задача № 1. Номер подъезда.")

let num = prompt("Введите номер квартиры");
if (num < 1 || num > 100) {
	alert("Введите квартиру от 1-100")
	console.log("error");
} else {
if (num % 20 == 0) {
	pad = Math.floor(num/20);
	console.log(pad)
} else {
	 pad = Math.floor(num/20)+1; 
	 console.log(pad);
}
}

//
alert("Задача № 1(2). Номер подъезда.")
console.clear();

let num1 = prompt("Введите номер квартиры");
 if (num1 >= 1 && num1 <= 20) {
	console.log(1);
}
else if (num1 > 20 && num1 <= 40) {
	console.log(2);
}
else if (num1 > 40 && num1 <= 60) {
	console.log(3);
}
else if (num1 > 60 && num1 <= 80) {
	console.log(4);
}
else if (num1 > 80 && num1 <= 100) {
	console.log(5);
}

//
alert("Задача № 2. Марки автомобилей.")
console.clear();

let cars = prompt("Введите марку автомобиля");
switch (cars) {
	case "BMW":
	case "Audi":
		alert("BMW – страна происхождения Германия.");
			break;
	case "Ford":
	case "Cadillac":
		alert("Ford – страна происхождения США.");
			break;
	case "Peugeot":
		alert("Peugeot – страна происхождения Франция.");
			break;
	case "Bentley":
		alert("Bentley – страна происхождения Великобритания.");
			break;
	case "LADA":
		alert("LADA – страна происхождения Россия.");
			break;
	default:
		alert(cars + " – страна происхождения неизвестна.");
}

//
alert("Задача № 3. Високосный год.")
console.clear();

let year = prompt("введите год");
    if(year % 4 != 0) {				// если он не / на 4, то не високосный
    	alert("Не високосный год"); 
    } else if(year % 100 != 0) { 	// иначе, если / на 4  и не / на 100 - високосный
    	alert("Високосный год");
    } else if(year % 400 != 0) { 	// если / на 4 и на 100, но не / на 400, то не високосный
       alert("Не високосный год"); 
	} else 
		alert("Високосный год"); 	// в любом другом сл. - високосный

//
alert("Задача № 4. Таблица умножения.")
console.clear();

let number = prompt("Введите число от 1 до 20");
let i; 
console.log("Таблица умножения на", number);
	for (i = 1; i <= 20; i++) {
		console.log(number + "x" + i + "=" + number * i);
	}

//
alert("Задача № 5. Сумма нечётных чисел.")
console.clear();

let sum = 0;
	for(let i = 0; i <= 50; i++) {
    	if(i % 2 == 0 ) continue;
    		sum += i; 
	}
   		console.log(sum);

//
alert("Задача № 6. Числа Фибоначчи.")
console.clear();

let a = 0; // 1 значение
let	b = 1; // 2 зн
let c = 0; // 0 зн
	console.log(a);
	console.log(b);
		for (i = 2; i < 15; i++) { // цикл со 2-й 1 единицы
			c = a + b; // хранится сумма 1 и 2
	    		console.log(c);
					a = b; // предыдущее зн
					b = c; // значение суммы (с)
		}

//
alert("Задача № 7. Шахматная доска.")
console.clear();

let a1 = " # # # # \n";
let b1 = "# # # # \n";
	for (let i = 1; i <= 8; i++) {
		if (i % 2 == 0) { 
    		console.log(a1);
  		} else if (i % 2 != 0) {
    		console.log(b1);
  		}
	}

*/
alert("Задача № 7(2). Шахматная доска.")
console.clear();

	for (let i = 0; i < 4; i++) {
  		console.log( " # # # # \n");
  	for (let j = 0; j < 1; j++) {
    	console.log("# # # # \n");
  }
}