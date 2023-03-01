let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
//let result = document.getElementById("result");

searchBtn.addEventListener("click", () =>{
    let countryName = countryInp.value ;  
    let finalURL =`https://restcountries.com/v3.1/name/${countryName}?fullText=true` ;
    console.log(finalURL);
    fetch(finalURL)
    .then((Response) => Response.json())
    .then((data) => {
        //console.log(data[0]);
        console.log(data[0]);
        console.log(data[0].continents);
        console.log(data[0].population);
        //console.log(data[0].capital);
        console.log(data[0].flags.svg);
        console.log(data[0].maps);
        //console.log(data[0].name.common);
        
        flag.innerHTML = "flag:";
        result.innerHTML = `
        <img src = "${data[0].flags.svg}" class="flag-img">`;

        continents.innerHTML = "continents:";
        continents_res.innerHTML = data[0].continents;

        capital.innerHTML = "capital:";
        capital_res.innerHTML = data[0].capital;

        pop.innerHTML = "population:";
        pop_res.innerHTML = data[0].population;
        
        //map.innerHTML = "map";
        //map_res.innerHTML = data[0]["googleMaps"].maps ; 



    }).catch(() =>{
        if(countryName.length == 0 ){
            result.innerHTML = `<h3> the input field cannot be empty </h3>`;
        }
        else{
            result.innerHTML = `<h3> please enter a valid country name.</h3>`;
        }  
    })
    

});