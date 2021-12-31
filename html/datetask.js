var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="Display data";
button.setAttribute('type','button');
button.setAttribute('class','btn btn-primary');
button.addEventListener('click',displaydata);
document.body.append(button);

var resultdata = document.createElement('div');


function displaydata(){
    let input=document.getElementById("date").value;
    if(Date.parse(input)){
        var inputdate = new Date(input);
        var currentdate= new Date();
       // console.log(inputdate,currentdate);
       var milliseconds= currentdate.getTime()-inputdate.getTime();
       console.log(milliseconds);
       var seconds=Math.floor(milliseconds/1000);
       console.log(`seconds is ${seconds}`);
       var minutes= Math.floor(seconds/60);
       console.log(`minutes is ${minutes}`);
       var hours= Math.floor(minutes/60);
       console.log(`hours is ${hours}`);
       var day= Math.floor(hours/24);
       console.log(`day is ${day}`);
       var year= currentdate.getFullYear()-inputdate.getFullYear();
       console.log(`year is ${year}`);
       var month= (year * 12)+(currentdate.getMonth()-inputdate.getMonth());
       console.log(`month is ${month}`);
       resultdata.innerHTML= `For the given date, the months till current date is ${month} months. <br>
       the days are ${day} days. <br>
        the years are ${year} years. <br> 
        the hours are ${hours} hours. <br>
        the minutes are ${minutes} minutes. <br>
        the seconds are ${seconds} seconds. <br> 
        the milliseconds are ${milliseconds} milliseconds.`;
    }
    else{
        console.log("give a proper input");
    }
    
    
    
};
document.body.append(resultdata);