let currentworkhrs = document.getElementById("workhours");
let previousworkhrs = document.getElementById("previouswork")

let currentplayhrs = document.getElementById("playhours");
let previousplayhrs = document.getElementById("previousplay");


let currentstudyhrs = document.getElementById("studyhours");
let previousstudyhurs = document.getElementById("previousstudy");

let currentexercisehrs = document.getElementById("exercisehours");
let previousexercisehrs = document.getElementById("previousexercise");


let currentsocialhrs = document.getElementById("socialhours");
let previoussocialhrs = document.getElementById("previoussocial");

let currentselfcarehrs= document.getElementById("selfcarehours");
let previousselfcarehrs = document.getElementById("previousselfcare")

const  daily =     document.getElementById("daily")
const weekly =     document.getElementById("weekly")
const monthly =     document.getElementById("monthly")


const currentIdList = [
  "workhours",
  "playhours",
  "studyhours",
  "exercisehours",
  "socialhours",
  "selfcarehours"];



const previousIdList= [
"previouswork",
"previousplay",
"previousstudy",
"previousexercise",
"previoussocial",
"previousselfcare",
];


fetch('data.json')
  .then(response => response.json())
  //.then(data => console.log(data[0].timeframes.daily.current))

  .then(data => {
    
    daily.addEventListener("click",()=>{
      daily.style.color = "white";
      weekly.style.color = "hsl(236, 100%, 87%)";
      monthly.style.color = "hsl(236, 100%, 87%)";
        getAllDailyHours(data);
    });

    weekly.addEventListener("click",()=>{
      weekly.style.color = "white";
      daily.style.color = "hsl(236, 100%, 87%)";
      monthly.style.color = "hsl(236, 100%, 87%)";
      getAllWeeklyHours(data);
    });

    monthly.addEventListener("click",()=>{
      monthly.style.color = "white";
      daily.style.color = "hsl(236, 100%, 87%)";
      weekly.style.color = "hsl(236, 100%, 87%)";
      getAllMonthlyHours(data)
    });

  })
    
  .catch(error => console.error('Error fetching JSON:', error));


function getAllDailyHours(data){

    for (let i=0;i<=6;i++){

      const spanId= currentIdList[`${i}`];
      const getSpanId = document.getElementById(spanId);

      const spanId2 =previousIdList[`${i}`];
      const getSpanId2 = document.getElementById(spanId2);

      const currenthours = data[i].timeframes.daily.current;
      const previoushours = data[i].timeframes.daily.previous;

      getSpanId.innerHTML = currenthours +"hrs";
      getSpanId2.innerHTML = "Yesterday - " + previoushours + "hrs";

      
    }

}

function getAllWeeklyHours(data){

  for (let i=0;i<=6;i++){

    const spanId= currentIdList[`${i}`];
    const getSpanId = document.getElementById(spanId);

    const spanId2 =previousIdList[`${i}`];
    const getSpanId2 = document.getElementById(spanId2);

    const currenthours = data[i].timeframes.weekly.current;
    const previoushours = data[i].timeframes.weekly.previous;

    getSpanId.innerHTML = currenthours +"hrs";
    getSpanId2.innerHTML = "Last Week - " + previoushours + "hrs";

    
  }

}

function getAllMonthlyHours(data){

  for (let i=0;i<=6;i++){

    const spanId= currentIdList[`${i}`];
    const getSpanId = document.getElementById(spanId);

    const spanId2 =previousIdList[`${i}`];
    const getSpanId2 = document.getElementById(spanId2);

    const currenthours = data[i].timeframes.monthly.current;
    const previoushours = data[i].timeframes.monthly.previous;

    getSpanId.innerHTML = currenthours +"hrs";
    getSpanId2.innerHTML = "Last Month - " + previoushours + "hrs";

    
  }


}

