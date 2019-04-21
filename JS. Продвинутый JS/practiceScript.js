//1
function counterFactory(start, step) {
		return function tictoc() {
			start += step;
				return start;
	};
}

let tictoc = counterFactory(1, 2);
console.log(tictoc());
console.log(tictoc());
console.log(tictoc());

//2 
let newArray = [];
function take(tictoc, x) { 
		for (var i = 0; i < x; i++) {
  			newArray[i] = tictoc();
		}
    			return newArray;
}

console.log(take(tictoc, 10));

//3
let str = "Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива."
let arrStr = str.split(",").join("").split(".").join("").split(" ");

function returnStrArray() {
	arrStr = str.split("").reverse().join("").split(" ");
arrStr.sort(function (w1, w2) {
    return w2.length - w1.length;
});
}
let getFunc = returnStrArray();
console.log(arrStr);

function countLet(arrStr) {
    return arrStr.join("").length;
}
console.log(countLet(arrStr));

//4
let obj = { 
greeting: "Привет" 
};
function func(surname, name) {
alert(this.greeting + ', ' + surname + ' ' + name);
}
func.call(obj, "Иванов", "Иван"); 
func.apply(obj, ["Иванов", "Иван"]);

