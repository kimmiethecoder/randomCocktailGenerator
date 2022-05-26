    function getRandomCocktail(){
      


        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => res.json()) 
        .then(data => {
            // console.log(data)
            displayRandomCocktail(data);           
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }
    getRandomCocktail();

    function displayRandomCocktail(cocktail){
        console.log(cocktail.drinks[0]);


        let drinkSection = document.querySelector('#drink-section');

        let drinkName = document.createElement('h2');
        drinkName.innerHTML = cocktail.drinks[0].strDrink;

        drinkSection.appendChild(drinkName);

        let img = document.createElement('img');
        img.src= cocktail.drinks[0].strDrinkThumb;

        drinkSection.appendChild(img);

        for(let i=1; i<16;i++){
            console.log();

            if(cocktail.drinks[0][`strIngredient${i}`] == null || cocktail.drinks[0][`strIngredient${i}`] == ''){
                break;
            }

            let ingredient = document.createElement('ul')
            ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

            drinkSection.appendChild(ingredient);
        }

        let instructions = document.createElement('h3');
        instructions.innerHTML = 'Instructions' + ': ' + cocktail.drinks[0].strInstructions;

        drinkSection.appendChild(instructions);

    }