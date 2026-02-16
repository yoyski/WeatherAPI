const placeInput = document.querySelector('.place-input')
const enterBtn = document.querySelector('.enter-btn')
const loc = document.querySelector('.location')
const icon = document.querySelector('.icon')
const temp = document.querySelector('.temp')
const summary = document.querySelector('.summary')

enterBtn.addEventListener("click", () => {
  const locationArr = placeInput.value.trim().split("")
  
  const loc = locationArr[0].toUpperCase() + locationArr.splice(1).join("").toLowerCase()
  console.log("ine"+loc)
  
  place(loc, (loc) => {
    
    getWeather(loc)
  })
  
  console.log(loc)
})


async function getWeather(location) {
  
  try {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=906850c1c5784b076022a17196884c8a&units=metric`);
    let data = await res.json();
    console.log(data);
    loc.innerText = data.name === location ? location : `place not exist`;
    icon.innerHTML = data.name === location ? `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>` : `---`;
    temp.innerText = data.name === location ? `${data.main.temp}°C` : `---`;
    summary.innerText = data.name === location ? data.weather[0].description : `---`;
  } catch (error) {
    console.log('Error:', error);
  }
}

//function locationPlace(loc) {
//getWeather(loc)
//}

function place(loc, callback) {
  callback(loc)
}  