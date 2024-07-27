const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '329be4414dmsh464f674f4ea69b7p1872f9jsn510450a0f114',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = async (city)=> {
        cityName.innerHTML = city;
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options);
        const result = await response.json();
    
    
        console.log(result);
        document.getElementById('cloud_pct').innerHTML = result.cloud_pct
        document.getElementById('temp').innerHTML = result.temp
        document.getElementById('temp2').innerHTML = result.temp
        document.getElementById('feels_like').innerHTML =result.feels_like
        document.getElementById('humidity').innerHTML = result.humidity
        document.getElementById('humidity2').innerHTML = result.humidity
        document.getElementById('min_temp').innerHTML = result.min_temp
        document.getElementById('max_temp').innerHTML = result.max_temp
        document.getElementById('wind_speed').innerHTML = result.wind_speed
        document.getElementById('wind_speed2').innerHTML = result.wind_speed
        document.getElementById('wind_degrees').innerHTML = result.wind_degrees
        document.getElementById('sunrise').innerHTML = result.sunrise
        document.getElementById('sunset').innerHTML = result.sunset
    }


document.getElementById('submit').addEventListener('click', (e)=> {
    e.preventDefault()
    getWeather(document.getElementById('city').value)
})

getWeather("Delhi")

const getWcp = async (city)=> {
    const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options);
    const result = await response.json();

    document.getElementById(`${city}`).innerHTML = document.getElementById(`${city}`).innerHTML +  `
                    <td>${result.cloud_pct}</td>
                    <td>${result.feels_like}</td>
                    <td>${result.humidity}</td>
                    <td>${result.max_temp}</td>
                    <td>${result.min_temp}</td>
                    <td>${result.sunrise}</td>
                    <td>${result.sunset}</td>
                    <td>${result.temp}</td>
                    <td>${result.wind_degrees}</td>
                    <td>${result.wind_speed}</td>`
}
getWcp('shanghai')
getWcp('boston')
getWcp('lucknow')
getWcp('kolkata')