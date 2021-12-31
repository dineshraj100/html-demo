
var form=document.createElement('form');
form.setAttribute('class','form');

var formgroup=document.createElement('div');
formgroup.setAttribute('class','form-group');

var lab1=document.createElement('div');
var l1=createelement('label','FirstName');

var inp1=document.createElement('div');
var i1=createelement('input','First Name');

var lab2=document.createElement('div');
var l2=createelement('label','MiddleName');

var inp2=document.createElement('div');
var i2=createelement('input','Middle Name');

var lab3=document.createElement('div');
var l3=createelement('label','LastName');

var inp3=document.createElement('div');
var i3=createelement('input','Last Name');

var lab4=document.createElement('div');
var l4=createelement('label','Email');

var inp4=document.createElement('div');
var i4=createelement('input','Email');


inp1.append(i1);
lab1.append(l1);

inp2.append(i2);
lab2.append(l2);

inp3.append(i3);
lab3.append(l3);

inp4.append(i4);
lab4.append(l4);


formgroup.append(lab1,inp1,lab2,inp2,lab3,inp3,lab4,inp4);
form.append(formgroup);


document.body.append(form);


function createelement(elename,value=""){
    var element=document.createElement(elename);
    element.innerHTML=value;
    return element;
  }

  function foo(){

    let res = document.getElementsByTagName("input");
    for(let i = 0; i<res.length; i++) {
        console.log(res[i].value)
    }
 }