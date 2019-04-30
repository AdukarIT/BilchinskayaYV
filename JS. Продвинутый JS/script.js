let str = "Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива."
let arrStr = str.split("");
console.log(arrStr);

//1

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

function getCaliforniaStates(state) {
  let arrCities = data.filter(function(item) {
    return item.state == state && parseFloat(item["growth_from_2000_to_2013"]) > 0;
  });
    console.log(arrCities);
}
let populationGrowth = getCaliforniaStates("California");

//4

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
