/*

For each of the following aplicable exercise below you should present a box on the page 
with an alert that shows the result when the box is clicked!

###Window object at page 124:###    (dessa uppgifter är oförståliga)
1. Link the script with FixIt.hmtl
2. Add som tags that doesn't change the visual part of the paragraph. 
3.Play with the properties at page 124 in the book. 
  Use properties creatively to display things at the html page
4.Add a stylesheet that displays the changed words in fat font and in red.
5. PLay with the Methods 

### DOM page 126:###
6. Play with the DOM-properties
*/

document.lastModified;
var tags = document.createElement('p');
tags.textContent = document.URL + "  " + document.domain;

var test = document.title;
document.title = "A new title";
document.write("I am writing");

var diven = document.getElementById("ett");
diven.appendChild(tags);
/*
### String objects page 128, 129: ###

7. Save the text from the makeMeAnArray-paragraph into an array.*/


var strTextFromElement = document.getElementById('makeMeAnArray').innerText;
var arrayOfString = strTextFromElement.split(" ");



/* 
8. Use all the string methods and propertys allong with the array
*/
// arrayOfString[0-90];
// charAt
var charAt = arrayOfString[1].charAt(1);

//charCodeAT
var charcodeat = arrayOfString[2].charCodeAt(2);

//concat
var concat = arrayOfString[3].concat("yay");

//fromCharCode
arrayOfString[5] = String.fromCharCode(10);


//indexOf
var indexOf = arrayOfString[4].indexOf(5);

//lastIndexOf
var lastIndexOf = arrayOfString[6].lastIndexOf(6);

//localeCompare
var localeCompare = arrayOfString[7].localeCompare(7);

//match
var match = arrayOfString[8].match(/ee/g);

//replace
var replace = arrayOfString[9].replace(arrayOfString[9], arrayOfString[8]);

//search
var search = arrayOfString[10].search("p");

//slice
var slice = arrayOfString[11].slice(1, 2);

//split
var split = arrayOfString[12].split("i");

//substr
var substr = arrayOfString[13].substr(1, 4);

//substring
var substring = arrayOfString[14].substring(1, 5);

//toLowerCase
var toLowerCase = arrayOfString[15].toLocaleLowerCase();

//toUpperCase
var toUpperCase = arrayOfString[16].toLocaleUpperCase();

//toString
var toString = arrayOfString[17].toString();

//trim
var trim = arrayOfString[18].trim();

//valueOf
var valueOf = arrayOfString[19].valueOf();


/*
### String objects page 132: ###
9. check if the 4th element in the array is a number
*/
function CheckIfNumber() {
    if(!isNaN(arrayOfString[4]))
    {
        alert("Is a number");
    }
}
//CheckIfNumber();
/*
### Math page 134: ###
10. Round one of the numbers in the paragraph up/down
*/
var round = Math.round(arrayOfString[4]);

/*
11. replace the 3rd word with PI then round it to the nearest integer
*/
var roundwithpi = "3.14";
arrayOfString[2] = Math.round(roundwithpi);
/*
### Date object###
12. Calculate how many days it's until your birthday and present it.
*/
var today = new Date();
var birthdate = new Date(2016, 07, 13, 13, 53);
var difference = birthdate - today;
var days = difference / (1000 * 60 * 60 * 24)

var DaysDiv = document.getElementById("birthdayPresentation");
DaysDiv.innerText = "my next birthday is " + Math.round(days) + " days from now";

/*
13. Calculate how many minutes old you are and present it.
*/

var today = new Date();
var birthdate = new Date(1994, 07, 13, 13, 53);
var difference = today - birthdate;
var minutes = difference / (1000 * 60)

var MinuteDiv = document.getElementById("minutePresentation");
MinuteDiv.innerText = "I am " + Math.round(minutes) + " minutes old";

/*



Bonus exercises:
### Demo page 141:###
-Download the code to the book. Wipe the code from the js-file and rewrite it with the help from the book.
-For additional reading and training go to: http://www.w3schools.com/jsref/jsref_obj_string.asp
 and look at JS String, JS Number, JS Math and JS Date

*/