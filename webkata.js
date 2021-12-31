// //fetch is alternate of xhr to access api
// // fetch always returns a promise as a result.
// // let res=fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
// // console.log(res); 
// // var result= res.then((data)=>{
// //     return data.json();
// // }).then((data)=>console.log(data)).catch((error)=>console.log(error));

// let res=fetch('https://data.covid19india.org/v4/min/timeseries.min.json');
// let res2=fetch('https://data.covid19india.org/v4/min/data.min.json');
// // var result1= res.then((data)=>{
// //     return data.json();
// // }).then((data)=>console.log(data)).catch((error)=>console.log(error));
// var result2=res2.then((data)=>{
//     return data.json();
// }).then((data)=>{console.log(data);
//     console.log(`Total confirmed cases-${data.TN.total.confirmed}. Total recovered cases-${data.TN.total.recovered}. Total deaths-${data.TN.total.deceased} `);}).catch((error)=>console.log(error));

// async function foo(){
//     let res= await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
//     let result= await res.json();
//     console.log(result);
// }
// foo();
//----------------------------------------------------------------------------------------------------------------------------
// class task to find the result based on country using the given api

// function compute(){

// let value= document.getElementById('country').value;
// let a= `https://api.covid19api.com/total/country/${value}` ;
// foo();
// async function foo(){
//     try {
//         let res= await fetch(a);
//         let result= await res.json();
//         console.log(result);
//         for (var i in result)
//         {   
//             console.log(`Day ${[i]}`);
//             console.log(`confirmed cases- ${result[i].Confirmed}`);
//             console.log(`active cases - ${result[i].Active}`);
//             console.log(`recovered cases - ${result[i].Recovered}`);
//             console.log(`Deaths- ${result[i].Deaths}`);
//             console.log("-------------------------------------------------------");        
//         }
//     } catch (error) {
//         console.log(error);
//     }   
//  }
// }
//-----------------------------------------------------------------------------------------------------------------------------

async function getdata(){
    try {
        var res= await fetch(`https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json`);
        var result= await res.json();
        console.log(result);
        for(var i in result)
        {
            var name=result[i].name;
            var latlng= result[i].latlng;
            wd(name,...latlng);
        }
    } catch (error) {
        console.log(error);
    }
}
getdata();
async function wd(name,lat,lon)
{
    try {
        if(lat===undefined) throw new Error("Longitude not found");
        var res1= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4e760899bc9d3e781d17a2be05425205`);
        var result1=await res1.json();
        console.log(`${name}-${result1.main.temp} K`);
    } catch (E) {
        console.log("invalid coordinates "+ name +" "+E.message);
    }
            
        
}


