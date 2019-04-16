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
/*
//4
function findDuplicateSymbols(str) {
  let objectSymbols = {};
  let maxValue = 0;
  let DuplicateSymbols = "";
    for (let symbol of str) {
        if (objectSymbols.hasOwnProperty(symbol)) {
            objectSymbols[symbol]++
        } else {
            objectSymbols[symbol] = 1
        }
    }
    for (let symbol in objectSymbols) {
        if (objectSymbols[symbol] > maxValue) {
            maxValue = objectSymbols[symbol]
            DuplicateSymbols = symbol
        }
    }
    return DuplicateSymbols;
    }

console.log(findDuplicateSymbols("эта функция нормально не работает"));
*/
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
