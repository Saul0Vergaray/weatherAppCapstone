const weatherLoad = () =>{
let input = localStorage.getItem('zipCode')
axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=*insertyourapikeyhere*`)
    .then(res => {
        console.log(res.data)
        let weatherBox = document.querySelector('#weatherbox')
        let weatherCard = document.createElement('section')
        weatherCard.innerHTML = `
            <span>The weather today is ${res.data.weather[0].description} </span>
        `
        weatherBox.appendChild(weatherCard)
      })
      .catch(error => {
        console.log(error)

    })
}
weatherLoad()



