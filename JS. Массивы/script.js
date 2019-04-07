// 1

function getRandomArray(len) {
	let arr = [];
    	for (let i = 0; i < len; i++) { 
    		arr[i] = Math.floor(Math.random()*100)/100;
    	}
			return(arr);
}

let randomNumbers = getRandomArray(10);
let anotherArrayWithRandomNumbers = getRandomArray(10); //5
console.log(randomNumbers);
console.log(anotherArrayWithRandomNumbers);

// 2

function getAverage(arr) {
	let sum = 0; 				
	let average; 				
  		for (let i = 0; i < arr.length; i++) { 
    		sum += arr[i]; 			
  		}
  			average = sum / arr.length; 
  			console.log(average);			
		for (let i = 0; i < arr.length; i++) { 
    		if (arr[i] > average) { 			
      			console.log(arr[i]);
			}
		}
}
 
getAverage(randomNumbers);

// 3

function getSmallestElements(arr) {
	let minElement1 = 1;
	let minElement2 = 1;
	let newArray = [];
		for (let i = 0; i < arr.length; i++) {
    		if (arr[i] < minElement1) {
      			minElement1 = arr[i];
    		} else if (arr[i] < minElement2) {
      			minElement2 = arr[i];
    		}
  		}
  			newArray.push(minElement1,minElement2);
  				console.log(newArray);
}

getSmallestElements(randomNumbers);

// 4 

function deleteElements(arr) {
		for (let i = 0; i < arr.length; i++) {
			if(arr[i] < 0.3) {
				arr.splice([i], 1);
				arr.push(0); 
    		}
    	}
	   		return(arr);
}
	console.log(deleteElements(randomNumbers));

//5 

function getSumElements(arr, arr2) {
	let sumArr = [];
	let index;
		for ( let i = 0; i < arr.length; i++) {
 			index = arr.length - 1 - i;
 			sumArr[i] = arr2[i] + arr[index];
    	}
    	console.log(sumArr);
	}

getSumElements(randomNumbers, anotherArrayWithRandomNumbers); 

//6

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) 
      for (let j = 0; j < arr.length - 1 - i; j++) { 
      	if (arr[j + 1] < arr[j]) {
      	 	let change = arr[j + 1]; 
      	 	arr[j + 1] = arr[j];
      	 	arr[j] = change; 
      	}
     }                     
    return (arr);
    }
console.log(bubbleSort(randomNumbers));
