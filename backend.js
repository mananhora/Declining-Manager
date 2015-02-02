
var SixDollarItems = ["Thai Bowl","Mexican burrito","Greek Bowl","Thai Bowl","Mexican burrito","Greek Bowl","Thai Bowl","Mexican burrito","Greek Bowl", "one last"];
var OneDollarItems = ["coffee", "tea", "wine", "coke", "vodka", "condom", "burger", "wine", "tea","one","one","one"];
var TwoDollarItems = ["Two a", "Two b", "Two c", "Two d", "Two e", "Two f", "Two g", "Two h", "Two i", "Two j"];
var ThreeDollarItems = ["Three a", "Three b", "Three c", "Three d", "Three e", "Three f", "Three g", "Three h", "Three i", "Three j"];
var FourDollarItems = ["Four a", "Four b", "Four c", "Four d", "Four e", "Four f", "Four g", "Four h", "Four i", "Four j"];
var FiveDollarItems = ["Five a", "Five b", "Five c", "Five d", "Five e", "Five f", "Five g", "Five h", "Five i", "Five j"];
var SevenDollarItems = ["seven a","seven b", "seven c", "seven d", "seven e", "seven f", "seven g", "seven h", "seven i", "seven j"];
var EightDollarItems = ["eight a", "eight b","eight c","eight d","eight e","eight f","eight g","eight h","eight i","eight j"];



 var itemGenerator = function(price){
 	var randomItem = Math.floor((Math.random() * 9) + 1);
 	if(price === 1){
 		return ( OneDollarItems[randomItem]);
 		 
 	}
 	if(price === 6){
 		return (SixDollarItems[randomItem]);
 	}
 	if(price === 2){
 		return (TwoDollarItems[randomItem]);
 	}
 	if(price === 3){
 		return (ThreeDollarItems[randomItem]);
 	}
 	if(price === 4){
 		console.log( FourDollarItems[randomItem]);
 	}
 	if(price === 5){
 		console.log(  FiveDollarItems[randomItem]);
 	}
 	if(price === 7){
 		return( SevenDollarItems[randomItem]);
 	}
 	if(price === 8){
 		return (EightDollarItems[randomItem]);
 	}
 };
var store = [];
 

	var sumupR = function (numbers, target, partial) {
		var s = 0;
		for (var i = 0; i<partial.length; i++) { //if x is in partial, add it to s
var x = partial[i];
s = s + x;
		}
		if (s == target) {//if s is equal to target sum
			console.log("sum(" + partial.toString() + ")=" +
							   target); 
			for (var i = 0; i<partial.length; i++){
				itemGenerator(partial[i]);

			}
			console.log(" ");
								

							   }//print the list of integers in partial
		if (s > target) //if s is greater than target, end
			return;
		for (var i = 0; i < numbers.length; i++) {

			var remaining = [];
			var n = numbers[i];
			for (var j = i + 1; j < numbers.length; j++) {
				remaining.push(numbers[j]);
			}
		var partial_rec = [];
		partial_rec.push.apply(partial_rec, partial); 

			partial_rec.push(n);
			arguments.callee(remaining, target, partial_rec);
		}
	}
	 


var numbers = [1,2,3,4,5,6,7,8];
var target = 10;
var p = [];
var store = [];
	 sumupR(numbers, target, p, store);




	