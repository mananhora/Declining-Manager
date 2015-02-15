//ARRAYS FOR ITEMS OF DIFFERENT PRICES

var SixDollarItems = [ "2 Slices of Cheese pizza + Regular beverage", "2 Slices of Pepperoni Pizza + Regular beverage", "Spicy chicken sandwich", "Grilled chicken sandwich", "Hamburger", "Veggie burger", "Bowl (1 Side and 1 Entree)", "Classic chees quesadillas", "Cheese plus 33 quesadillas(Up to 3 ingredients)", "Large smoothie"];

var OneDollarItems = ["Cheesy bread sticks", "Milk (Upstate farms)", "Cappucino Mocha (Upstate farms)", "Chocalate milk"];

var TwoDollarItems = ["Chocalate eclair bars", "Strawberry bars", "Vanilla sandwiches","Cinnamon iced breadsticks", "Soda", "Kickstart can", "Lipton ice tea","Gadorade","Fountain drink"];

var ThreeDollarItems = [ "Cookies and cream sandwiches", "Chocalate chip cookie sandwiches", "Strawberry sundae cups", "Cookies N' Cream cups", "Pizza slice (one topping)", "Pizza slice (only cheese)", "Greek frozen yogurt", "Moose tracks cones (Hersheys)", "Incredible cones (Hersheys)", "Fries", "AMP energy drink", "Rockstar energy drink"];

var FourDollarItems = [ "Roletto", "Grilled cheese", "Small smoothie", "Chocalate eclair bars + Strawberry bars","Strawberry bars + Vanilla sandwiches" ];

var FiveDollarItems = ["Calzone", "Strombolli", "Italian sausage", "Combo Meal (Hot dog, French fries and Fountain drink)", "Regular smoothie"];

var SevenDollarItems = ["Chicken tender sub", "Pesto pita pizza", "Plate( Any side and 2 Entrees)", "Southwest salad", "Spicy Asian salad", "Caesar salad"];

var EightDollarItems = ["Salad from the Salad bar", "Grilled chicken pita", "Mel burger", "Philly cheese steak ", "Roletto + Grilled cheese", "Grilled cheese + Small smoothie", "Roletto + Small smoothie"];

var NineDollarItems = ["Plate (Any side and 3 Entrees)", "Salad from the Salad bar + Cheesy breadsticks", "Grilled chicken pita + Milk", "Coffee + Grilled Chicken sandwiche"];
 
var TenDollarItems = ["Calzone", "Strombolli + Italian sausage", "Strombolli + Regular smoothie" ]


//FUNCTION TO GENERATE RANDOM NUMBERS
var random = function(num){
	 	var randomItem = Math.floor((Math.random() * (num-2))+1);
	 	return randomItem;
}


 //FUNCTION TO DISPLAY AN ITEM FROM AN ARRAY OF ITEMS GIVEN ITS PRICE
 var itemGenerator = function(price){
 	if(price === 1){
 		return ( OneDollarItems[random(OneDollarItems.length)]);	 
 	}
 	if(price === 6){
 		return (SixDollarItems[random(SixDollarItems.length)]);
 	}
 	if(price === 2){
 		return (TwoDollarItems[random(TwoDollarItems.length)]);
 	}
 	if(price === 3){
 		return (ThreeDollarItems[random(ThreeDollarItems.length)]);
 	}
 	if(price === 4){
 		return( FourDollarItems[random(FourDollarItems.length)]);
 	}
 	if(price === 5){
 		return ( FiveDollarItems[random(FiveDollarItems.length)]);
 	}
 	if(price === 7){
 		return( SevenDollarItems[random(SevenDollarItems.length)]);
 	}
 	if(price === 8){
 		return (EightDollarItems[random(EightDollarItems.length)]);
 	}
 	if(price === 9){
 		return (NineDollarItems[random(NineDollarItems.length)]);
 	}
 	if(price === 10){
 		return (TenDollarItems[random(TenDollarItems.length)]);
 	}
 };
var store = [];  // empty array to store values
var count = 0;
 

	var sumupR = function (numbers, target, partial) {
		//the array partial is empty initially
		var s = 0;
		for (var i = 0; i<partial.length; i++) { //if x is in partial, add it to s
var x = partial[i];
s = s + x;
		}
		if (s == target) {//if s is equal to target sum

			console.log("sum(" + partial.toString() + ")=" +
							  target); 
			count++; //Count increments by 1 each time the value of s 
			 for (var i = 0; i<partial.length; i++){
			}
			store.push((partial.map(itemGenerator))); //Add an item if its price is in the array partial
		}

//if s is greater than target, end the function
		if (s > target) {
			return;
		}
		
		for (var i = 0; i < numbers.length; i++) {

			var remaining = []; //declare new array remaining
			var n = numbers[i]; 
			for (var j = i + 1; j < numbers.length; j++) {
				remaining.push(numbers[j]); 
			}
			//All numbers not in partial are added to remaning so that the same numbers dont come up again...
		var partial_rec = []; //make new arrat partial_rec
		partial_rec.push.apply(partial_rec, partial); //add all elements of partial to partial_rec 

			partial_rec.push(n);//add n to partial_rec
			arguments.callee(remaining, target, partial_rec); //recursive call 
		}

		return store;

	} 
	 


var numbers = [1,2,3,4,5,6,7,8,9];
// var target = 1;
// var p = [];
// 	 sumupR(numbers, target, p);
// 	 console.log(count);







	