let str = "Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива."
let arrStr = str.split("");
console.log(arrStr);

//1
//Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode. 
//Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики.

function getSymbol(cod) {
  let sum = 0;
  arrStr.filter(function(i) {
    if (String.fromCharCode(cod) == i) {
        sum++;
    }
  });
    console.log(sum);
}

let a = getSymbol("1088"); //р

//2
//Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1, фиксируя искомый символ. 

function getTheSame(arrStr){
  let sum = 0;
    function findTheSame(cod) {
      arrStr.filter(function(i) {
        if (String.fromCharCode(cod) == i) {
          sum++;
      }
    });
  return sum;
  }
return findTheSame;
}

let countOfLetter = getTheSame(arrStr);
console.log(countOfLetter("1088")); //р

//3
//Отфильтруйте массив городов так, чтобы в нём остались только города из штата Калифорния, которые с 2000 по 2013 выросли в населении.

function getCaliforniaStates(state) {
  let arrCities = data.filter(function(item) {
    return item.state == state && parseFloat(item["growth_from_2000_to_2013"]) > 0;
  });
    console.log(arrCities);
}
let populationGrowth = getCaliforniaStates("California");

//4
//Подсчитайте, сколько миллионов населения живёт во всех городах на широте от 25 до 30 градусов.
function getPopulation(max, min) {
  let arrNumber = data.reduce(function(currentValue, item) {
    if(item["latitude"] > min && item["latitude"] < max) {
      return currentValue += +item.population;
    } else  {
      return currentValue;
    }
  },0);
      console.log(arrNumber)
}

let number = getPopulation(30, 25);

//5
//Создайте массив только из тех городов, которые начинаются на букву D, при этом отсортируйте элементы этого массива по названию города.

function getCitiesD() {
  let getCities = data.filter(function(cities) {
    return cities["city"][0] === "D";
  });
    return getCities.sort(function(c1, c2) {
      if (c1["city"] > c2["city"]) {
    return 1;
      } else {
    return -1;
      }
    });
}
console.log(getCitiesD());

//6 ???????????
//Преобразуйте представленный массив "Города" в объект "Штаты":
//1. для каждого штата – отдельное свойство объекта (ключ = название штата);
//2. значение каждого свойства – массив городов;
//3. каждый элемент массива – название города, население и место в общем рейтинге (rank).

function getNewObj() {
  let states = {};
  data.map(function(elem) {
    states[elem["state"]] = [];
  });      
  for (let key in states) {
     for (let i = 0; i < data.length; i++) {
       if (key == data[i]["state"]) {
        states[data[i]["state"]].push({
        city: data[i]["city"],
        population: data[i]["population"],
        rank: data[i]["rank"]})
       }
     }
}
    console.log(states);
  }
    getNewObj();
