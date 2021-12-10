var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i in data){
        try{
            var name=data[i].name;
            var latlng= data[i].latlng;
            if(latlng.length === 0) throw new Error("Longitude not found");
            wd(name,...latlng);
        }catch(E){
            console.log("invalid coordinates"+ name +" "+E.message);
        }
      
    }
}

function wd(name,lat,lon){
    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4e760899bc9d3e781d17a2be05425205`;
    var request=new XMLHttpRequest();
    request.open('GET',url,true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response);
            console.log(`${name}-${data.main.temp}`);
        
    }

}