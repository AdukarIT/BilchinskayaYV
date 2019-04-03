// 1

let arr = [];
arr2 = [];
arr2.reverse();

function getRandomArray(len) {
    for (let i = 0; i < len; i++) { 
    	arr[i] = Math.floor(Math.random()*100)/100;
    }
		return(arr);
}

let randomNumbers = getRandomArray(10);
console.log(randomNumbers);

 
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
	result = arr.sort((a,b) => a - b).slice(0, 2);
    console.log(result);
}
getSmallestElements(randomNumbers);

// 4 

function deleteElements(arr) {
		for (let i = 0; i < arr.length; i++) {
			if(arr[i] < 0.3) {
				arr.splice(i, 1, 0); /**/
    		} 
    	}
		return arr;
		
}
	console.log(deleteElements(randomNumbers));

