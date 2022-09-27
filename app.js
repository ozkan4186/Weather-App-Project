// const submit = document.querySelector("button");
// 
// const input = document.querySelector("input");
// 
// const city = document.querySelector(".city");
// 
// 
// 
// 
// const getWeather = async () => {
    // if (city.innerHTML.toLowerCase().includes(input.value.toLowerCase())) {
// 
        // alert(`${input.value} is already exists`)
        // input.value = ""
// 
// 
    // } else {
        // const apiKey = "2b6fc034709f70ad0e769dd70ac76d07"
// 
        // const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`
// 
// 
        // try {
            // const response = await fetch(url);
            // if (!response.ok) {
                // hata()
                // throw new Error("there is not a city called");
            // }
// 
            // const data = await response.json();
            // console.log(data);
// 
            // const {
                // weather,
                // name,
                // main: {
                    // temp
                // },
                // sys
            // } = data;
// 
            // city.innerHTML += `${weather[0].description}, ${name}, ${temp},  <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="" />`
// 
            // city.innerHTML += `<div class="card mx-auto m-3 p-2 shadow-lg col-lg-4 col-md-6 col-sm-12 gap-3">
    // 
    // <div class="card-body gap-3">
    // <p>${sys.country}</p>
    //   <h5 class="card-title">${name}</h5>
    //   <h5 class="card-title">${temp}℃</h5>
    //   <p class="card-text">${weather[0].description}</p>
    //  <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" class="card-img-top" alt="...">
    // </div>
//   </div>`
// 
        // } catch (error) {
            // console.log(error)
        // }
// 
    // }
// 
// 
// 
    // const hata = () => {
        // city.innerHTML = `<p>there is not a city called</p>`

    // }
// }

// submit.addEventListener("click", getWeather);

const submit=document.querySelector("button")
const input=document.querySelector("input")
const city=document.querySelector(".city") 


const getWeather = async () =>{
    const apiKey = "3d7637eda80a480b34da049035959014"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`
    
    try {
        const response= await  fetch(url)
        if(!response.ok){
            hata()
            throw new Error("something a city entered")
        }

        const data= await response.json()
        console.log(data);
        const {
            weather,
            name,
            main: {
                temp
            },
            sys
        } = data;
         city.innerHTML += `<div class="card mx-auto m-3 p-2 shadow-lg col-lg-4 col-md-6 col-sm-12 gap-3">
    
    <div class ="card-body gap-3">
    <p>${sys.country}</p>
      <h5 class="card-title">${name}</h5>
      <h5 class= "card-title">${temp}℃</h5>
      <p class="card-text">${weather[0].description}</p>
     <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" class="card-img-top" alt="...">
    </div>
  </div>`
        
    } catch (error) {
        console.log(error);
        
    }
    const hata =(e)=>{
        city.innerHTML =` ${e} düzgün sayı `
    }

    // const render =(veri)=>{
        // veri.forEach((a)=>{
            // let {
                // weather,
                // name,
                // main:{temp},
                // sys

            // }=a
        // })
    // }





}
submit.addEventListener("click", getWeather);