 document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
     fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
     .then(res => res.json())
     .then(data => {
        console.log(data.drinks[0])
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('h3').innerText = data.drinks[0].strInstructions
        document.querySelector('#drinkPicture').src = data.drinks[0].strDrinkThumb
        
        for(let i = 1; i < 16; i++){
            if(data.drinks[0][`strIngredient${i}`] === null){
                break;
            }

            let ingredient = document.createElement("li")
            ingredient.innerHTML = data.drinks[0][`strMeasure${i}`] + " " + data.drinks[0][`strIngredient${i}`]
            
            document.querySelector('ul').appendChild(ingredient)
        }
       
     })
       
        
    .catch(err => {
        console.log(`error ${err}`)
    })
}