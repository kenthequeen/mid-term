FUNCTIONS: SIGNIFANCT PROGRESS
// Invoke each function you write with an example and console.log the result

// multiply
var multiply  function( num1, num2) {
	return num1*num2;
};
// whatForLunch
var whatForLunch function(name, food){
return name +"had" + food + "for lunch today."
};

// isLargerThan100
var isLargerThan100 function(num){
	if(num > 100){
		return "this number is larger than 100."
	}else {
		return "this number is not larger than 100."
	};

// anyEvens
var anyEvens function (array) {
	for (var i =0, i <array.length; i++){
		if (array[i] % 2 === 0) {
			return true;
		} else {
			return false;
		}
	}
};

// printDataType
var printDataType function (collection){
	if(collection === object) {
		for(key in collection){
			if(collection[key] === string) {
			console.log("I am a string");
		} else if(collection[key] === number) {
			console.log("I am a number.")
		} else if (collection[key] === boolean){
			console.log("I am a boolean")
		}
	}
}

else if (collection === collection.isArray) {
	for (var i=0; i<collection.length; i++){
		if(collection[i]=== /* not sure how to distinguish if this is an array?*/){
			console.log("I am an array.");
		}
	} else if(collection[i]=== function) {
		console.log("I am a function");
	} else {
		console.log("I do not know what you are!")
	};


// isDivisibleBy
var isDivisibleBy function(num1, num2){
	if (num1 % num2){
		return true;
	} else {
		return false;
};

// fizzBuzz

var fizzBuzz function (num){
	if (num % 3 === 0 || num % 5 ===0) {
		console.log("FizzBuzz");
	} else if (num % 3 === 0 && num % 5 !== 0) {
	console.log("Fizz");

} else if (num %5 === 0 && num % 3 !== 0) {
	console.log("Buzz");
}
}