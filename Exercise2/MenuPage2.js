/*

1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
*/

function Burger(name, dayOfTheWeek, size, price) {
    this.name = name;
    this.dayOfTheWeek = dayOfTheWeek;
    this.size = size;
    this.price = price;
}

var burgerList = [];

burgerList.push(new Burger('Amazing Burger', 'monday', 200, 50))
burgerList.push(new Burger('Mega Burger', 'thuseday', 250, 60))
burgerList.push(new Burger('GetFat Burger', 'wednesday', 500, 70))
burgerList.push(new Burger('Slimy Burger', 'thursday', 100, 20))
burgerList.push(new Burger('Elite Burger', 'friday', 150, 40))
burgerList.push(new Burger('Conda Burger', 'saturday', 50, 10))
burgerList.push(new Burger('Milena Burger', 'sunday', 100, 20))

var p = 1;



/*

2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
*/

function Drink(name, dayOfTheWeek, size, price) {
    this.name = name;
    this.dayOfTheWeek = dayOfTheWeek;
    this.size = size;
    this.price = price;
}

function Pizza(name, dayOfTheWeek, size, price) {
    this.name = name;
    this.dayOfTheWeek = dayOfTheWeek;
    this.size = size;
    this.price = price;
}

function Sub(name, dayOfTheWeek, size, price) {
    this.name = name;
    this.dayOfTheWeek = dayOfTheWeek;
    this.size = size;
    this.price = price;
}


/*

3. add 7 drinks to the page using Product.
*/

var drinkList = [];

drinkList.push(new Drink('Super Drink', 'monday', 'small', 60))
drinkList.push(new Drink('Naughty Drink', 'thuseday', 'small', 20))
drinkList.push(new Drink('Unhealthy Drink', 'wednesday', 'medium', 80))
drinkList.push(new Drink('ThatOtherDay Drink', 'thursday', 'medium', 30))
drinkList.push(new Drink('Bad Drink', 'friday', 'medium', 20))
drinkList.push(new Drink('Good Drink', 'saturday', 'large', 70))
drinkList.push(new Drink('GetWasted Drink', 'sunday', 'large', 100))

/*

4. add 7 pizzas to the page using Product.
*/

var PizzaList = [];

PizzaList.push(new Pizza('Margaretta Pizza', 'monday', 'small', 50))
PizzaList.push(new Pizza('Tropicani Pizza', 'thuseday', 'small', 60))
PizzaList.push(new Pizza('Venezuela Pizza', 'wednesday', 'medium', 70))
PizzaList.push(new Pizza('Kebab Pizza', 'thursday', 'medium', 20))
PizzaList.push(new Pizza('Slimy Onion Pizza', 'friday', 'small', 40))
PizzaList.push(new Pizza('Karlsson Pizza', 'saturday', 'large', 40))
PizzaList.push(new Pizza('Äcklig Pizza', 'sunday', 'large', 20))

/*


5. add 7 subs to the page using Product.
*/

var subsList = [];

subsList.push(new Sub('Subway Sub', 'monday', 200, 50))
subsList.push(new Sub('Long Sub', 'thuseday', 250, 60))
subsList.push(new Sub('Short Sub', 'wednesday', 500, 70))
subsList.push(new Sub('Uboat Sub', 'thursday', 100, 20))
subsList.push(new Sub('Creamy Sub', 'friday', 150, 40))
subsList.push(new Sub('American Sub', 'saturday', 50, 10))
subsList.push(new Sub('Ghetto Sub', 'sunday', 100, 20))

/*


6. GO to file FixIt.html

*/
//DRINKS
//Subs