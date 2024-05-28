//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4250eb79b3msh186b1ecaad022a4p1849f1jsnf067440d7138',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
cityName.innerHTML = city


	//here default process of connect with city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options) 
.then(response => response.json())
.then(response => {
	
	console.log(response)

	cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
	temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
	humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
	wind_speed2.innerHTML = response.wind_speed
  //  wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset


    })
	.catch(err => console.error(err));

}

//here default city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options) 
.then(response => response.json())
.then(response => {
	
	console.log(response)

	cloud_pct0.innerHTML = response.cloud_pct
    temp0.innerHTML = response.temp
    feels_like0.innerHTML = response.feels_like
    humidity0.innerHTML = response.humidity
    min_temp0.innerHTML = response.min_temp
    max_temp0.innerHTML = response.max_temp
    wind_speed0.innerHTML = response.wind_speed
    wind_degrees0.innerHTML = response.wind_degrees
    sunrise0.innerHTML = response.sunrise
    sunset0.innerHTML = response.sunset

    })

	//here default city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options) 
.then(response => response.json())
.then(response => {
	
	console.log(response)

	cloud_pct_O.innerHTML = response.cloud_pct
    temp_O.innerHTML = response.temp
    feels_like_O.innerHTML = response.feels_like
    humidity_O.innerHTML = response.humidity
    min_temp_O.innerHTML = response.min_temp
    max_temp_O.innerHTML = response.max_temp
    wind_speed_O.innerHTML = response.wind_speed
    wind_degrees_O.innerHTML = response.wind_degrees
    sunrise_O.innerHTML = response.sunrise
    sunset_O.innerHTML = response.sunset

})

	

//here default city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options) 
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
	
		cloud_pct_B.innerHTML = response.cloud_pct
		temp_B.innerHTML = response.temp
		feels_like_B.innerHTML = response.feels_like
		humidity_B.innerHTML = response.humidity
		min_temp_B.innerHTML = response.min_temp
		max_temp_B.innerHTML = response.max_temp
		wind_speed_B.innerHTML = response.wind_speed
		wind_degrees_B.innerHTML = response.wind_degrees
		sunrise_B.innerHTML = response.sunrise
		sunset_B.innerHTML = response.sunset
	
		})

		
//here default city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options) 
.then(response => response.json())
.then(response => {
	
	console.log(response)

	cloud_pct_T.innerHTML = response.cloud_pct
    temp_T.innerHTML = response.temp
    feels_like_T.innerHTML = response.feels_like
    humidity_T.innerHTML = response.humidity
    min_temp_T.innerHTML = response.min_temp
    max_temp_T.innerHTML = response.max_temp
    wind_speed_T.innerHTML = response.wind_speed
    wind_degrees_T.innerHTML = response.wind_degrees
    sunrise_T.innerHTML = response.sunrise
    sunset_T.innerHTML = response.sunset

    })

//here default city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options) 
.then(response => response.json())
.then(response => {
	
	console.log(response)

	cloud_pct_D.innerHTML = response.cloud_pct
    temp_D.innerHTML = response.temp
    feels_like_D.innerHTML = response.feels_like
    humidity_D.innerHTML = response.humidity
    min_temp_D.innerHTML = response.min_temp
    max_temp_D.innerHTML = response.max_temp
    wind_speed_D.innerHTML = response.wind_speed
    wind_degrees_D.innerHTML = response.wind_degrees
    sunrise_D.innerHTML = response.sunrise
    sunset_D.innerHTML = response.sunset

    })

	

//here default city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mexico City', options) 
.then(response => response.json())
.then(response => {
	
	console.log(response)

	cloud_pct_M.innerHTML = response.cloud_pct
    temp_M.innerHTML = response.temp
    feels_like_M.innerHTML = response.feels_like
    humidity_M.innerHTML = response.humidity
    min_temp_M.innerHTML = response.min_temp
    max_temp_M.innerHTML = response.max_temp
    wind_speed_M.innerHTML = response.wind_speed
    wind_degrees_M.innerHTML = response.wind_degrees
    sunrise_M.innerHTML = response.sunrise
    sunset_M.innerHTML = response.sunset

    })

	

//here default city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=California City', options) 
.then(response => response.json())
.then(response => {
	
	console.log(response)

	cloud_pct_C.innerHTML = response.cloud_pct
    temp_C.innerHTML = response.temp
    feels_like_C.innerHTML = response.feels_like
    humidity_C.innerHTML = response.humidity
    min_temp_C.innerHTML = response.min_temp
    max_temp_C.innerHTML = response.max_temp
    wind_speed_C.innerHTML = response.wind_speed
    wind_degrees_C.innerHTML = response.wind_degrees
    sunrise_C.innerHTML = response.sunrise
    sunset_C.innerHTML = response.sunset

    })	

//here default city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa', options) 
.then(response => response.json())
.then(response => {
	
	console.log(response)

	cloud_pct_G.innerHTML = response.cloud_pct
    temp_G.innerHTML = response.temp
    feels_like_G.innerHTML = response.feels_like
    humidity_G.innerHTML = response.humidity
    min_temp_G.innerHTML = response.min_temp
    max_temp_G.innerHTML = response.max_temp
    wind_speed_G.innerHTML = response.wind_speed
    wind_degrees_G.innerHTML = response.wind_degrees
    sunrise_G.innerHTML = response.sunrise
    sunset_G.innerHTML = response.sunset

    })	


	


//here asking the city name which you want..
submit.addEventListener("click", (e)=> {
	e.preventDefault()
	getWeather(city.value) //city can connect with html page

})


/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
} */