console.log('#############');
console.log('Start 001 ###');
console.log('# End 001 ###');
console.log('#############');

console.log('#############');
console.log('Start 001 ###');
var allocateArray = function(size) {
	var arr = [];
	for (var i = 0; i < size; i++) {
		arr[i] = i*5;
	}
	return arr;
};
var allocateArray2 = function(size) {
	var arr = [];
	while(size >= 0) {
		arr.push( (size) * 5);
		size -= 1;
	}
	return arr;
};
var newArr = allocateArray(20);
console.log(newArr);
console.log('# End 001 ###');
console.log('#############');
console.log('#############');
console.log('Start 002 ###');
var compareChars = function(arr1, arr2) {
	var resultArray = [];
	var i,
	y;
	var len1 = arr1.length;
	var len2 = arr2.length;	
	for (i = 0; i < len1; i++) {
		for (y = 0; y < len2; y++) {
			if (arr1[i] === arr2[y]) {
				resultArray[i] = true; // for re-use of the code
				console.log('Letter '+arr1[i]+' is equal to '+arr2[y]);
			}
			else {
				resultArray[i] = false; // for re-use of the code
				console.log('Letter '+arr1[i]+' is NOT equal to '+arr2[y]);
			}
		}
	}
	return resultArray;
};

var arrOne = ['a','b','c','D','A'];
var arrTwo = ['a','B','D'];
compareChars(arrOne, arrTwo);
compareChars('abv','abc');
console.log('# End 002 ###');
console.log('#############');

console.log('#############');
console.log('Start 003 ###');
var findMaxSeq = function(numArr) {
	var len = numArr.length;
	var tmpCount = 1;
	var resultCount = 1;
	var subPos = 0; // bonus to mark the start index of the sub-sequence
	var i = 0;
	for (i = 0; i < len; i++) {
		if (numArr[i-1] === numArr[i]) {
			tmpCount +=1;
		}
		else {
			tmpCount = 1;
		}
		if (resultCount < tmpCount) {
			resultCount = tmpCount;		
			subPos = i - 1; // return this if you want to mark the start position
		}
	}
	return resultCount;
};

var sequenceNums = [1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 21, 1];
console.log('Max repeating numbers count: '+findMaxSeq(sequenceNums));
console.log('# End 003 ###');
console.log('#############');
console.log('#############');
console.log('Start 004 ###');
var findMaxIncreasing = function(numArr) {
	var len = numArr.length;
	var tempCount = 1;
	var bestCount = 1;
	var subPos = 1;
	var i = 0;
	for (i = 0; i < len; i++) {
		if (numArr[i-1] < numArr[i]) { // NOTE to self : THIS will find Increasing no matter the value
			tempCount +=1;			 // if you want increasing by 1 strictly then change it (n[i-1]===n[i]+1)
		}
		else {
			tempCount = 1;
		}
		if (bestCount < tempCount) {
			bestCount = tempCount;
			subPos = i-1; // mark the start for re-use of code
		}
	}
	return bestCount;
};
var sequenceNums = [3, 2, 3, 4, 2, 2, 4];
console.log('The sub-sequence of increasing numbers COUNT: '+findMaxIncreasing(sequenceNums));
console.log('# End 004 ###');
console.log('#############');
console.log('#############');
console.log('Start 005 ###');
var selectionSort = function(numArr) {
	var len = numArr.length;
	var i, 
	minimal;
	for (i = 0; i < len; i+=1) {
		minimal = i;
		for (var j = i+1; j < len; j+=1) {
			if (numArr[j] < numArr[minimal]) {
				minimal = j;
			}
		}
		if (i !== minimal) {
			swap(numArr, i , minimal);
		}
	}
	function swap(numArr, firstIndex, secondIndex){ // swap function for re-use
		var temp = numArr[firstIndex];
		numArr[firstIndex] = numArr[secondIndex];
		numArr[secondIndex] = temp;
	}
	return numArr;
};
var arrOne = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
console.log('Unsortrd: '+arrOne);
console.log('Sortrd: '+selectionSort(arrOne));
console.log('# End 005 ###');
console.log('#############');
console.log('#############');
console.log('Start 006 ###');
var mostFrequent = function(numArr) {
	numArr = numArr.sort();
	var i,
		j,
		searchedNum,
		currentNum;
	var count = 1;
	var	maxCount = 1;	
	var len = numArr.length;
	for (i = 0; i < len; i+=1) {
		currentNum = numArr[i];
		for (j = 0; j < len; j+=1) {
			if (currentNum === numArr[j]  && j != i) {
				count +=1;
				if (maxCount < count) {
					maxCount = count;
					searchedNum = numArr[i];
				}
			}
			else {
				count = 1;
			}
		}
	}
	return searchedNum + ' ' + maxCount;
};
var arrOne = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
var result = mostFrequent(arrOne).split(' ');
console.log('Most frequent value : ['+result[0]+']');
console.log('Repeat counter : '+result[1]);
console.log('# End 006 ###');
console.log('#############');

console.log('#############');
console.log('Start 007 ###');
var binarySearch = function(numArr, searched) {
	var len = numArr.length;
	var halfy = Math.floor(len / 2);
	if (len === 0) return false;
	else if (numArr[halfy] === searched) return true;
	else if (searched > numArr[halfy] && len > 1) return binarySearch(numArr.slice(halfy, len), searched);
	else return binarySearch(numArr.slice(0, halfy), searched);
};
var arrOne = [222,113,5,6,3,5,2,3,76,32,45];
arrOne = arrOne.sort(function(a, b) { return a - b; });
console.log('Is 32 present in the array!? Answer : '+binarySearch(arrOne, 32));
console.log('Is 52 present in the array!? Answer : '+binarySearch(arrOne, 52));
console.log('# End 007 ###');
console.log('#############');