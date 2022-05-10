let goBtn = document.querySelector('.button')
const zipCode = () =>{
    console.log('zipCodeHit')
    let inputValue = document.querySelector('.inputValue').value
console.log(inputValue)

localStorage.setItem('zipCode', `${inputValue}`)
window.location.href = 'weather.html'

}

goBtn.addEventListener('click', zipCode)

 const getBackgroundColor= () =>{
    document.body.style.backgroundColor = window.localStorage.getItem('backgroundColor');
}
getBackgroundColor()