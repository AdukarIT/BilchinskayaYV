//1 

let array = [];
for (let i = 2; i <= 20; i++) {
	if (!(i % 2)) {
		array.push(i);
	}
}
console.log(array);

//2

for (let i = 0; i < array.length; i++) {
array[i] = i * 5;
}
console.log(array);

//3

let n1 = +prompt("первое число");
let n2 = +prompt("второе число");
let n3 = +prompt("третье число");
	let arr = [n1, n2, n3];
	let max = arr[0];
    	for (let i = 1; i < arr.length; ++i) {
        	if (arr[i] > max) max = arr[i];
    	}
    		console.log(max)

	let arr2 = [];
		for (let i = 0; i <= arr.length - 1; i++) {
			arr2.push(arr[i] / max);
		}
			console.log(arr2);

//4

let newArr = [];
let index;
	for (let i = 0; i < array.length; i++) {
    	index = array.length - 1 - i;
    	newArr[i] = array[index];
	}
		console.log(newArr);

//5

let editArr = [];
for (let i = 1; i <= 35; i++) {
	editArr.push(i);
}
console.log(editArr);

editArr = editArr.concat(editArr.splice(0, 10));
console.log(editArr);

editArr = editArr.splice(0,10).reverse().concat(editArr);
console.log(editArr);

for(let j = 10; j < 15; j++)
editArr[j] = Math.pow(2, j % 10 + 1);
console.log(editArr);

editArr.fill(1, 15, 20);
console.log(editArr);

editArr.splice(20, 5, editArr.slice(20, 25).join(" ")); 
console.log(editArr);

//6

let arrUniq = [1, 2, 3, 4, 1, 1, 4, 4, 5, 2];

function unique(arr) {
  var uniq = [];
  nextInput: //
    for (let i = 0; i < arrUniq.length; i++) {
      let elem = arrUniq[i];
      	for (let j = 0; j < uniq.length; j++) {
        	if (uniq[j] == elem) continue nextInput;
      	}
      uniq.push(elem);
    }

  return uniq;
}

console.log(unique(arrUniq)); 