console.log('=============');
console.log('START Problem 001 tests');
arr = new Array(20);
for (var i = 0; i < arr.length; i++) {
	arr[i] = i*5;
	console.log(arr[i]);
}
console.log('END Problem 001 tests');
console.log('=============');
console.log('=============');
console.log('START Problem 002 tests');
var arrOne = ['a','b','c','D','g','A'];
var arrTwo = ['a','B','c','D'];
function charChecker (arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		for (var y = 0; y < arr2.length; y++) {
			if (arr1[i] === arr2[y]) {
				console.log(arr1[i]+" equal to "+arr2[y]);
			}
			else {
				console.log(arr1[i]+" NOT equal to "+arr2[y]);
			}
		}
	}
}
charChecker(arrOne,arrTwo);
console.log('END Problem 002 tests');
console.log('=============');
console.log('=============');
console.log('START Problem 003 tests');
var maxEqualSequence = function (sequence) {
	var tempCount = 1;
	var bestCount = 1;
	var subPosition = 1;

	for (var i = 0; i < sequence.length; i++) {
		if (sequence[i-1] == sequence[i]) {
			tempCount +=1;
		}
		else {
			tempCount = 1;
		}
		if (bestCount < tempCount) {
			bestCount = tempCount;
			subPosition = i - 1;
		}
	}
	for (var i = subPosition; i < subPosition + bestCount; i++) {
		console.log(sequence[subPosition]);
	}
};
var sequenceNums = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
maxEqualSequence(sequenceNums);
console.log('END Problem 003 tests');
console.log('=============');
console.log('=============');
console.log('START Problem 004 tests');
var maxEqualIncresingSequence = function (sequence) {
	var tempCount = 1;
	var bestCount = 1;
	var subPosition = 1;
	for (var i = 0; i < sequence.length-1; i++) {
		if (sequence[i] === sequence[i+1] - 1) {
			tempCount +=1;
		}
		else {
			tempCount = 1;
		}
		if (bestCount < tempCount) {
			bestCount = tempCount;
			subPosition = i - 1;
		}
	}
	for (var y = subPosition ; y < subPosition + bestCount; y+=1) {
		console.log(sequence[y]);
	}
};
var sequenceNums = [3, 2, 3, 4, 2, 2, 4];
maxEqualIncresingSequence(sequenceNums);
console.log('END Problem 004 tests');
console.log('=============');
console.log('=============');
console.log('START Problem 005 tests');
var arrOne = [99, 0 , 124, 37, -14, 10, 0.2547, -54, 11, 999];
var sortSelection = function (arrOne) {
	var minimal, 
	tempStorage;
	for (var i = 0; i < arrOne.length; i++) {
		minimal = i;
		for (var y = i + 1 ; y < arrOne.length; y++) {
			if (arrOne[y] > arrOne[minimal]) {
				minimal = y;
			}
			tempStorage = arrOne[i];
			arrOne[i] = arrOne[minimal];
			arrOne[minimal] = tempStorage;
		}
	}
}
sortSelection(arrOne);
for (var i = arrOne.length-1; i >=0; i--) {
	console.log(arrOne[i]);
};
console.log('END Problem 005 tests');
console.log('=============');
console.log('START Problem 006 tests');
var arrOne = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
arrOne.sort();
for (var i = 0; i < arrOne.length; i++) {
	console.log(arrOne[i]);
};
var maxCount = 1;
var count = 1;
var currentNum = 0;
var searchedNumber = 0;
for (var i = 0; i < arrOne.length; i+=1) {
	currentNum = arrOne[i];
	for (var j = 0; j < arrOne.length; j+=1) {
		if (currentNum === arrOne[j] && j!=i) {			
			count+=1;
			if (count > maxCount) {
				maxCount = count;
				searchedNumber = arrOne[i];
			}
		}
		else count = 1;
	}
}
console.log('The most frequent element is ['+searchedNumber+']');
console.log('Time of appearance in the sequence: '+maxCount);
console.log('END Problem 006 tests');
console.log('=============');
console.log('=============');
console.log('START Problem 007 tests');
// using a recurssion to start again with the sliced in half arr until the arr.lenght is 0
var binarySearch = function(arr, num) {
  var half = Math.floor(arr.length / 2);
  if (arr.length === 0) return "Number "+num+" not found";
  else if (arr[half] === num) return num +' is present!';
  else if (num > arr[half]) return binarySearch(arr.slice(half, arr.length), num); 
  else return binarySearch(arr.slice(0, half), num);
};

var arrOne = [1, 5, 20, 58, 76, 8, 19, 41].sort(function(a, b) { return a - b; });
console.log("Sorted array: " + arrOne);
console.log(binarySearch(arrOne, 76));
console.log(binarySearch(arrOne, 19));
console.log(binarySearch(arrOne, 0));
console.log('END Problem 007 tests');
console.log('=============');