const weatherLoad = () =>{
let input = localStorage.getItem('zipCode')
axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${input}&appid=f456589e9ec829c258ad97423b99d975`)
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



