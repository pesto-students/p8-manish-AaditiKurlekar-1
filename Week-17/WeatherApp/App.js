import fetch from "node-fetch";
import readline from "readline-sync"

// TAKE INPUT
console.log("For how many cities you need weather information");
let cities = [];
let abc= null;

let totalCities = Number(readline.question());

for (let i=1; i<=totalCities; i++){
    console.log(i, "city name");
    cities.push(String(readline.question()))
}

// console.log(cities);

// API CALL
const PORT = 5000;
const Api_id = "6f5edd24b3db7ac2b69d8a44d4c75e93";
let weatherData = [];
let pageAndItems =  new Map();

const apiCallWeather = (city) => {
    const request_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_id}`;

    return fetch(request_url, {headers: {
        'Accept': 'application/json'
    }}).then(res => res.json())
    .then((data) => {
        const cityData = data['main'];
        cityData.city = city;
        weatherData.push(cityData);
        // weatherData.set(city, data['main']); 
    });
}

async function storeData(city)  {
    await apiCallWeather(city);
    console.log(weatherData);
}

// fetched data and sorted by city name
async function getDataOfCities(sortBy){

    for await (const city of cities){
        apiCallWeather(city).then(() =>{ 
            weatherData = weatherData.sort((a,b)=> {
                if(a[sortBy] < b[sortBy]){
                    return -1;
                }
            })
            // weatherData = new Map([...weatherData.entries()].sort()) 
            console.log(weatherData);
        }).finally(() => {
            if(cities.length == weatherData.length){
                setTimeout(prepareDataPagination, 5000);

                // prepareDataPagination();
            }
        });
    }
    
}
// weatherData = [
//   {
//     temp: 296.2,
//     feels_like: 295.6,
//     temp_min: 296.2,
//     temp_max: 296.2,
//     pressure: 1011,
//     humidity: 40,
//     city: 'delhi'
//   },
//   {
//     temp: 300.85,
//     feels_like: 300.22,
//     temp_min: 300.85,
//     temp_max: 300.85,
//     pressure: 1011,
//     humidity: 34,
//     sea_level: 1011,
//     grnd_level: 950,
//     city: 'pune'
//   },
//   {
//     temp: 300.85,
//     feels_like: 300.22,
//     temp_min: 300.85,
//     temp_max: 300.85,
//     pressure: 1011,
//     humidity: 34,
//     sea_level: 1011,
//     grnd_level: 950,
//     city: 'Kashmir'
//   },
//   {
//     temp: 300.85,
//     feels_like: 300.22,
//     temp_min: 300.85,
//     temp_max: 300.85,
//     pressure: 1011,
//     humidity: 34,
//     sea_level: 1011,
//     grnd_level: 950,
//     city: 'Jammu'
//   },
//   {
//     temp: 300.85,
//     feels_like: 300.22,
//     temp_min: 300.85,
//     temp_max: 300.85,
//     pressure: 1011,
//     humidity: 34,
//     sea_level: 1011,
//     grnd_level: 950,
//     city: 'Ravet'
//   },
//   {
//     temp: 300.85,
//     feels_like: 300.22,
//     temp_min: 300.85,
//     temp_max: 300.85,
//     pressure: 1011,
//     humidity: 34,
//     sea_level: 1011,
//     grnd_level: 950,
//     city: 'mumbai'
//   }
// ];

const prepareDataPagination = () => {

    console.log("here 1");
    const pageSize = 3;
    const pagesCount = Math.round( weatherData.length / pageSize) + 1;

    for(let i=1; i<=pagesCount; i++){
        
        const pageContent = Paginator(weatherData, i, pageSize);
        if(pageContent.length > 0 ){
            pageAndItems.set(i, pageContent);
        }
    }

    console.log("After pagination: ", pageAndItems);
}

function Paginator(items, page, per_page) {

  // items = weatherData, page = i; per_page=2
  var page = page || 1;
  let per_page2 = per_page || 5;
  let offset = (page - 1) * per_page2;

  let paginatedItems = items.slice(offset).slice(0, per_page2);

  return paginatedItems;
}

getDataOfCities("city");

// setTimeout(prepareDataPagination, 15000);
// Filter the data by any particular city, any particular date , any particular moment
// Detailed Forecast for the next X days.■X days should be decided by the user.
//  Data should be very detailed