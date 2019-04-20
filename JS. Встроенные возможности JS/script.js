
//1
let arr = [];
function getRandomArray(len, min, max) {
	for (let i = 0; i < len; i++) { 
    	arr[i] = Math.random() * (max - min ) + min;
 	}
    	return arr;
}
let arrNumbers = getRandomArray(5, 20, 5);
//console.log(arrNumbers);
let newArr = arrNumbers;

function getNewRandomArray(newArr) {
	for (let i = 0; i < newArr.length; i++) {
		newArr[i] = {
			initial: arr[i],
			sqrt: Math.sqrt(arr[i]),
    		floor: Math.round(arr[i]) == Math.floor(arr[i]),
    		ceil: Math.round(arr[i]) == Math.ceil(arr[i])
		};
		newArr[i].rounding = Math.round(arr[i].sqrt * 100) / 100; // 2
	}
	
	return newArr;
}
console.log(newArr);
getNewRandomArray(newArr);

//3
let string = prompt("Строка/число");

function checkPalindrome(string) {
	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[string.length - 1 - i]) {
			return true;
		} else {
			return false; 
		}
	}
}
console.log(checkPalindrome(string));

//4
function findDuplicateSymbols(str) {
    let out=[];
    let counts={};
  		for (let i = 0; i < str.length; i++) {
			if (counts[str[i]] >= 1) {
				counts[str[i]]++
			} else {
				counts[str[i]] = 1
			} if (counts[str[i]] === 2) {
      			out.push(str[i]);
    		}
  		}
  			return out;
}
console.log(findDuplicateSymbols("kkgltl"));

//5
function replaceString(str, search, replace) {
	return str.split(search).join(replace); 
}
console.log(replaceString("Изменить текст", "т", "л"));

//6
function getUpperLetter(str) {
	let arrString = str.split(" ");
		for (let i = 0; i < arrString.length; i++) {
			arrString[i] = arrString[i].slice(0, 1).toUpperCase() + arrString[i].slice(1);
}
		return arrString;
}
console.log(getUpperLetter("фамилия имя отчество"));

//7
function changeSymbols(str) {
  for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[j] == str[i] && str[j] != " ") {
              str = str.slice(0, j) + "*" + str.slice(j + 1);
            }
        }
    }
    return str;
}
console.log(changeSymbols("я учусь программированию"));

//8
function getActualDay(week) {
  let daysArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  	return daysArr[week.getDay()];
} 
console.log(getActualDay(week = new Date())); 

//9
let date = prompt("Введите дату");
function getWeek(date) {
	date = date.split("-").join("");
	let year = date.slice(4, 10),
		month = date.slice(2, 4),
		day = date.slice(0, 2),
		result = new Date(year, month - 1, day);
			return getActualDay(result);
}
		console.log(getWeek(date));

//10

let birthday = prompt("Введите дату ДР");

function getBirthDateAndAnniversaryDate() {
	let today = new Date();
	birthday = birthday.split("-").join("");
	let year = birthday.slice(4, 10),
		month = birthday.slice(2, 4),
		day = birthday.slice(0, 2),
		result = new Date(year, month - 1, day);

	let dayBeforeBirthday = (today.getTime()-result.getTime()) / (3600 * 24 * 1000);
	    dayBeforeBirthday = Math.round(dayBeforeBirthday);
		console.log(dayBeforeBirthday); // дней до др

    let anniversaryDate = dayBeforeBirthday + (1000 - dayBeforeBirthday % 1000);
    let	dayBeforeAnniversary = 1000 - dayBeforeBirthday % 1000;
    	console.log(anniversaryDate); // ближайший юбилей
    	console.log(dayBeforeAnniversary); // дней до юбилея
}

getBirthDateAndAnniversaryDate();

//11

let arr = [];
function getRandomArray(len, min, max) {
	for (let i = 0; i < len; i++) { 
    	arr[i] = Math.round(Math.random() * (max - min ) + min);
 	}
    	return arr;
}
function getSquare(number) {
	if(Math.sqrt(number) === Math.round(Math.sqrt(number))) {
		return Math.sqrt(number)
	}
		throw new Error(number + " -" + " не являться квадратом целого числа");
} 
function getError() {
	for (let i = 0; i < arr.length; i++) {
		try {
			console.log(getSquare(arr[i]));
		} catch(e) {
			console.error("Произошла ошибка: " + e);
		}
	}
}
console.log(arr);
getError(getRandomArray(5, 20, 5));
