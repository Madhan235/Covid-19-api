var div = document.createElement("div");
div.style.textAlign = "center";
div.style.marginTop = "150px";

var heading = document.createElement("h1");
heading.innerHTML = " COVID19 DATAS " ;
heading.classList.add("text-primary")


var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn","btn-primary");
button.innerHTML = "Search";
button.style.marginLeft = "5px";
button.addEventListener("click", foo);

let active = document.createElement("div");
active.setAttribute("id", "active");

let deaths = document.createElement("div");
deaths.setAttribute("id", "deaths");

let recovered = document.createElement("div");
recovered.setAttribute("id","recovered")

div.append(heading,input,button,active,deaths,recovered);
document.body.append(div);

// try {
async function foo(){
    let res = document.getElementById("country").value;
    try{
    let url= `https://api.covid19api.com/total/dayone/country/${res}`;
    let res1 = await fetch(url);
    let res2 = await res1.json();
    let index = res2.length-1;
   active.innerHTML= `Total Active Cases : ${res2[index].Active}`
   
   let dData = document.getElementById("country").value;
   let urlD= `https://api.covid19api.com/total/dayone/country/${dData}`;
   let resultD = await fetch(urlD);
   let  finalD = await resultD.json();
   let indexD = finalD.length-1;
   deaths.innerHTML = `Total Death Cases : ${finalD[indexD].Deaths}`

   let rData = document.getElementById("country").value;
   let urlR= `https://api.covid19api.com/total/dayone/country/${rData}`;
   let resultR = await fetch(urlR);
   let  finalR = await resultR.json();
   let indexR = finalR.length-1;
   recovered.innerHTML = `Total Recovered Cases : ${finalR[indexR].Recovered}`

    }
    catch (err) {
        console.log(err);
    }

}

