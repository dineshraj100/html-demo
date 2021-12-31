//DOM Inbuilt methods
//innerhtml : property
//to add content inside the html element
// if it have any html element also it will parse

//innertext:property
//to add content inside the html element
//if it have any html element also it will not parse

// creating div element
// creates the element
/*
let division= document.createElement('div');
division.innerHTML="this is p";
document.body.append(division);
*/
//creating span element as dynamic
//styling:
// only inline css is possible for most of the cases
// we can apply any css property by using syntax: variablename.style.anycssproperty = "value";
//eg:division1.style.backgroundColor = "red";
// but only one property can be called once, cannot be called for multiple css property like .backgroundcolor="red".fontfamily etc.,
/*
let division1= document.createElement('span');
division1.innerHTML="this is span"
division1.style.backgroundColor="red";
division1.style.fontFamily="Times New Roman";
document.body.append(division1);
*/

//how to add selectors to a element dynamically?
//using variablename.setattribute('attribute name','value'); 
//we can add any attributes like selectors etc., but only one attribute can be added with this method.
//eg. division1.setattribute('class','main');
// alternate approach only for class selector
// classname
// eg. varname. className= 'value'
/*
let division1= document.createElement('span');
division1.innerHTML="this is span"
division1.setAttribute('id','main');
document.body.append(division1);
*/
//create container
//append is like parent child insertion 
//here div2 - parent appending element should be mentioned inside braces here (div3)
/*
let div1=document.createElement('div');
div1.className='container';
let div2=document.createElement('div');
div2.className='row';
let div3=document.createElement('div');
div3.className='col-1';

div2.append(div3);
div1.append(div2);
document.body.append(div1);
*/
//already html elements are there we are supposed to print those elements in console...
//Note: element must be there in your html file,if not will not work
//document.getElementById(),document.getElementsByClassName(),document.getElementByTagname
//document.getElementById()- gives a first coming id element in html, if we wants its value only then we should add '.value' at end of getElementById().value
//document.getElementsByClassName()- here group of classes are returned in the form of array.
//document.getElementsByTagName('element name')- collects tag based elements and gives them back in the form of array.
// querySelector('value') - document.queryselector('.main') based on selector we should mention the selector like #main for ID and direct tag selector.
// it will return the first occurence of the selector mentioned.
// querySelectorAll('value')
// it will return the all selector type elements in an array like queryselector but all selector type elements are returned in array.
//let a =document.querySelectorAll('.main');
//console.log(a);

//table using dom
var table=document.createElement('table');
table.setAttribute('class','table');
// <table class="table"></table>
var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');
  
var tr=document.createElement('tr');
var th1=createelement('th','first');
var th2=createelement('th','last');
tr.append(th1,th2);
thead.append(tr);

var tbody= document.createElement('tbody');
var tr1=document.createElement('tr');
var td1= createelement('td','mark');
var td2=createelement('td','otto');
tr1.append(td1,td2);

var tr2=document.createElement('tr');
var td1= createelement('td','Larry');
var td2=createelement('td','the bird');
tr2.append(td1,td2);

var tr3=document.createElement('tr');
var td1= createelement('td','mark');
var td2=createelement('td','otto');
tr3.append(td1,td2);

tbody.append(tr1,tr2,tr3);
table.append(thead,tbody);
document.body.append(table);
// its ok to not mention double quotes in the value inside the function for safe side we are gonna give a string thats why we mentioned string quotes.
function createelement(elename,value=""){
    var element=document.createElement(elename);
    element.innerHTML = value;
    return element;
}

//append vs appendchild
//using append we can add multiple elements refer line 94 and other lines like that. return type of append always undefined.
//using appendchild we can add only one element. return type of appendchild is added element using it, even though we mention multiple elements it will take only first mentioned element inside braces.