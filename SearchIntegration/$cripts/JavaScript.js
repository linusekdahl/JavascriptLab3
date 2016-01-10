

var h1Basic = document.createElement("H1");
h1Basic.setAttribute("id", "ad");
h1Basic.innerText = "Menu!";


var h2Basic = document.createElement("H2");
h2Basic.innerText = "Delicious Burgers";

var articleBasic = document.createElement("article");
var fieldSet = document.createElement("fieldset");

var legend = document.createElement("legend");
var h3 = document.createElement("h3");
var span = document.createElement("span");

var div = document.createElement("div");
div.setAttribute("class", "price");
div.setAttribute("id", "monday");

$('body').append(h1Basic);
$('body').append(h2Basic);

$('body').append(articleBasic);
$(articleBasic).append(fieldSet);

$(fieldSet).append(legend);
$(fieldSet).append(h3);
$(fieldSet).append(span);
$(fieldSet).append(div);

var h2Basic = document.createElement("H2");
h2Basic.innerText = "Apa";
/* <h1 id ="ad">Menu!</h1>
<h2 >Delicious burgers</h2>
<article>
    <fieldset>
        <legend>Monday Burger</legend>
        <h3>Pepper burger</h3>
        <span>No image loaded</span>
        <div class="price" id="monday">19.90</div>
        */


var x = 1;