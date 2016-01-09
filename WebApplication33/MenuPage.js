//happy hour logic:

var happyHourFrom = 14
var happyHourTo = 18

var happyhour = false;
var timeNow = new Date().getHours();


if (timeNow >= happyHourFrom && timeNow < happyHourTo) {
    happyhour = true;
}

var x = 1;


/*Reduce price by another 20%:
Make price background red.*/

var happyprice = document.getElementsByClassName('price');

if (happyhour) {

    for (var i = 0; i < happyprice.length; i++) {
        //happyprice[i].textContent = happyprice[i].textContent * 0.8;;
        //happyprice[i].style.color = "red";

        Happyhour(happyprice[i]);
    }


}

    
//Method calls: 

function Happyhour(X)
{
    X.textContent = PriceFix(X.textContent, 0.8);
    X.style.color = "red";

    
}

//Adjust price function: (add .toFixed(2) for 2 decimals)

function PriceFix(PriceObject, Discount) {
    return Number(PriceObject * Discount).toFixed(2);
    
}

/*Add pictures function to span:*/

//var img = document.createElement('IMG')
//img.setAttribute('src', '../Images/Hamburger.png');

var Spanlist = document.getElementsByTagName('span');
for (var i = 0; i < Spanlist.length; i++) {
    var img = document.createElement('IMG')
    img.setAttribute('src', '../Images/Hamburger.png');
    Spanlist[i].innerText = "";
    Spanlist[i].appendChild(img);
    
}

/*Add todays offer function. 














/*Stretch exercises: (increasing tuffness for each number!)

 1. Automate todays offer to be dependent of the day of the week
 2. Create an HTML page with an empty body and then fill it with help from JS.
    -use array with names and price of the burgers seperated by a simple "space"
    -use a loop to add all the html with different burgers
    -Add more pictures on a creative way...
 3. Add arrays for all in point 3 and show the products.
    Add a simulair menu under the burgers with a new <h2> for:
    -subs
    -sausages
    -pizza
    -drinks
    
 5. Add a Birthday function for the restaurant so that the entire week 
    the restaurant has its birthday the price is set to 14.99 per default.
    
*/