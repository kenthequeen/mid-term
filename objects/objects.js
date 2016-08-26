OBJECTS: SIGNIFICANT PROGRESS 
// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:
  twitter.stockPrice = 18;
// 2. Bracket notation:
twitter['ceo'] = 'Jack Dorsey';
// 3. Practice on your own:
var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";
twitter.address = "1355 Market St #900, San Francisco, CA 94103";
// 4. Array:
twitter.tweets = ['I run this', 'When the stocks go up, we show up', 'Happy holidays to all of our recently departed leaders.#goals'];

// 5. Loop through array:
for (var i =0; i<twitter.tweets.length; i++){
	console.log(twitter.tweets);
};
// 5. Invoke countCharacters:
countCharacters(twitter.tweets[1]);
//I think this would return the number 25, but I wasn't able to invoke it because I am getting an error that countCharacters is not defined. 
// 6. Loop through twitter object:
for (key in twitter) {
	console.log(twitter[key]);
};