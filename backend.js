// var SixDollarItems = ["Thai Bowl","Mexican burrito","Greek Bowl","Thai Bowl","Mexican burrito","Greek Bowl","Thai Bowl","Mexican burrito","Greek Bowl", "one last"];
// var OneDollarItems = ["coffee", "tea", "wine", "coke", "vodka", "condom", "burger", "wine", "tea","one","one","one"];
// var TwoDollarItems = ["Two a", "Two b", "Two c", "Two d", "Two e", "Two f", "Two g", "Two h", "Two i", "Two j"];
// var ThreeDollarItems = ["Three a", "Three b", "Three c", "Three d", "Three e", "Three f", "Three g", "Three h", "Three i", "Three j"];
// var FourDollarItems = ["Four a", "Four b", "Four c", "Four d", "Four e", "Four f", "Four g", "Four h", "Four i", "Four j"];
// var FiveDollarItems = ["Five a", "Five b", "Five c", "Five d", "Five e", "Five f", "Five g", "Five h", "Five i", "Five j"];
// var SevenDollarItems = ["seven a","seven b", "seven c", "seven d", "seven e", "seven f", "seven g", "seven h", "seven i", "seven j"];
// var EightDollarItems = ["eight a", "eight b","eight c","eight d","eight e","eight f","eight g","eight h","eight i","eight j"];

var SixDollarItems = [ "2 Slices of Cheese pizza + Regular beverage","2 Slices of Pepperoni Pizza + Regular beverage","Spicy chicken sandwich","Grilled chicken sandwich","Hamburger","Veggie burger","Bowl (1 Side and 1 Entree)","Classic chees quesadillas","Cheese plus 33 quesadillas(Up to 3 ingredients)","Large smoothie"];

var OneDollarItems = ["Cheesy bread sticks", "Milk (Upstate farms)", "Cappucino Mocha (Upstate farms)", "Chocalate milk"];

var TwoDollarItems = ["Chocalate eclair bars"," Strawberry bars", "Vanilla sandwiches","Cinnamon iced breadsticks", "Soda","Kickstart can", "Lipton ice tea","Gadorade","Fountain drink"];

var ThreeDollarItems = ["Cookies and cream sandwiches"," Chocalate chip cookie sandwiches","Strawberry sundae cups","Cookies N' Cream cups","Pizza slice (one topping)","Pizza slice (only cheese)","Greek frozen yogurt","Moose tracks cones (Hersheys)","Incredible cones (Hersheys)","Fries","AMP energy drink", "Rockstar energy drink"];

var FourDollarItems = ["Roletto", "Grilled cheese", "Small smoothie"];

var FiveDollarItems = ["Calzone", "Strombolli", "Italian sausage", "Combo Meal (Hot dog, French fries and Fountain drink)", "Regular smoothie"];

var SevenDollarItems = ["Chicken tender sub","Pesto pita pizza", " Plate( Any side and 2 Entrees)", " Southwest salad", "Spicy Asian salad", "Caesar salad", "seven g"];

var EightDollarItems = ["Salad from the Salad bar", "Grilled chicken pita","Mel burger","Philly cheese steak "];

var NineDollarItems = ["Plate (Any side and 3 Entrees)"]



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
 		return( FourDollarItems[randomItem]);
 	}
 	if(price === 5){
 		return (  FiveDollarItems[randomItem]);
 	}
 	if(price === 7){
 		return( SevenDollarItems[randomItem]);
 	}
 	if(price === 8){
 		return (EightDollarItems[randomItem]);
 	}
 };
var store = [];  //Use myArray[i].push( 0 ); to add a new column. 
//Your code (myArray[i][j].push(0);) would work in a 3-dimensional array as it tries to add another element to an array at position [i][j].
var count = 0;
var r = 0;
 

	var sumupR = function (numbers, target, partial) {
		var s = 0;
		for (var i = 0; i<partial.length; i++) { //if x is in partial, add it to s
var x = partial[i];
s = s + x;
		}
		if (s == target) {//if s is equal to target sum
						// count = count + 1; //each time the target sum is reached, increment count.

			console.log("sum(" + partial.toString() + ")=" +
							  target); 
			 for (var i = 0; i<partial.length; i++){
			//	console.log(itemGenerator(partial[i]));
			}
			
				//for(var c = 0; c<partial.length; c++){
					store.push((partial.map(itemGenerator)));
				//}
				
				

				//INSTEAD OF ADDING PARTIAL[I] ADD PARTIAL TO EACH ROW AS PARTIAL IS AN ARRAY
									

		}

//if s is greater than target, end
		if (s > target) {
		}

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

		return store;
//MAKE A METHOD WHICH SELECTS THE FIRST N ELEMENTS FROM AN ARRAY SUCH THAT THEIR SUMMATION EQUALS TARGET AND PUTS THEM INTO A ROW OF AN ARRAY AND THEN SELECTS THE NEXT M AND PUTS THEM INTO THE NEXT ROW OF THE ARRAY
	} 
	 


var numbers = [1,2,3,4,5,6,7,8];
var target = 10;
var p = [];
	 sumupR(numbers, target, p, store);

	 // console.log(store.toString());

console.log("rows" + JSON.stringify(store));
// for(var i = 0; i<store.length; i++){

// 	console.log(store[i]);
// }






	