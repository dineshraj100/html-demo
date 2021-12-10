//xml http request are used to interact with servers via api
//4 steps

//step 01: create a XHR object(XMLHTTPREQUEST) new 
//whole pgm should have same name'
var request= new XMLHttpRequest();
//step 02:open a connection

//first parameter:'GET'
//SECOND PARAMTER:'api URL',
//optional 3rd parameter:true
// under api link is different link which is a old restcountries proviede by mentor
/*
          request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
*/

request.open('GET','https://restcountries.com/v3.1/all',true);
//step 03:sending a connection path
request.send();
//step 04:once data success fully loaded from  server(200)
request.onload=function(){
    //data travelling from server will be of string
    //need to convert from string to object
    //request.response:server response
    var data=JSON.parse(request.response);
    console.log(data);
    //write a code to print all 250 country names.
    //here start to code
    //method 1 for loop
  /*  for(i=0;i<data.length;i++){
        console.log(i,data[i]["name"]);
    }*/
    //method 2 for in loop for printing all objects
   /* for(var i in data){
        console.log(i,data[i].name);
    } */
    // write a code to print all 250 country capital names
    //method 1 using for loop
  /*  for(i=0;i<data.length;i++){
        console.log(i,".",data[i].name,"-",data[i].capital);
    } */
    //method 2 using for in loop
   /* for(var i in data){
        console.log(i,".",data[i].name,"-",data[i].capital);
    } */
    //write a code to print all 250 country with capital and flag
    // ans:
  /*  for(var i in data){
        console.log(i,".",data[i].name,"-",data[i].capital,"-",data[i].flag);
    } */
    // print the continents from the given second live api
    for(var i in data){
        console.log(i,".",data[i].name.common,"-",data[i].continents);
    } 

}




