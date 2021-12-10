var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function()
{
    var data= JSON.parse(request.response);
    console.log(data);
//1.Get all the countries from Asia continent /region using Filter function. 

console.log("1.Get all the countries from Asia continent /region using Filter function.");
let reg=data.filter((x)=>{
      for(let i in x)
      {
          if(x.region=== "Asia")
          return true;
      }
  });
  console.log(reg);

  console.log(".");
  console.log(".");
  console.log(".");
  console.log(".");
  console.log(".");
  console.log("2.Get all the countries with a population of less than 2 lakhs using Filter function");
// 2.Get all the countries with a population of less than 2 lakhs using Filter function
  let pop=data.filter((x)=>{
      for(let i in x)
      {
          if(x.population<200000)
          return true;
      }
  });
  console.log(pop);
  console.log(".");
  console.log(".");
  console.log(".");
  console.log(".");
  console.log(".");
  console.log("3.Print the following details name, capital, flag using forEach function");
  //3.Print the following details name, capital, flag using forEach function
  data.forEach(ele => 
    {
      console.log(ele.name,"-",ele.capital,"-",ele.flag);
    });
    console.log(".");
    console.log(".");
    console.log(".");
    console.log(".");
    console.log(".");
    
    //4.Print the total population of countries using reduce function
    var res=data.map(ele=> ele.population);
    let result=res.reduce((acc,ele)=>acc+ele);
    console.log(`4.Print the total population of countries using reduce function: ${result}`);
    console.log(".");
    console.log(".");
    console.log(".");
    console.log(".");
    console.log(".");
    console.log("5.Print the country which uses US Dollars as currency");

    //5.Print the country which uses US Dollars as currency.
    let cur=data.filter((ele)=>
    {
        for(let i in ele.currencies){
            if(ele.currencies[i].code==="USD")
            return true;
           
        }
    });
    console.log(cur);
}