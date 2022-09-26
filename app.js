const submit=document.querySelector("button");

const input=document.querySelector("input");

const city=document.querySelector(".city");

const getWeather = async ()=>{
    const apikey = "37edbe6ffb893712b353a19b28fac6a3"
    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}`
    try {
        
          const response = await fetch(url)
          if(!response.ok){
               hata()
            throw new Error("there is not a city called")
         

          }
        
          const data = await response.json()

         

            console.log(data)
             card()
                //   return data;
          
        
        
    } catch (error) {

        console.log(error);

        
    }
  

  
  

}

submit.addEventListener("click",getWeather)

const hata = ()=>{
    city.innerHTML = ` <p> there is not a city called </p> `
}

const card=()=>{

    const [weather]=item;
    city.innerHTML += ` <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`
}
















// https: //api.openweathermap.org/data/2.5/weather?q=ankara&appid=37edbe6ffb893712b353a19b28fac6a3