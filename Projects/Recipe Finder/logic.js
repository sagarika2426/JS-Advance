let recipes_div = document.getElementById("recipe_results");
let id;


//2. get the data from DB
async function searchRecipes(name){
    try {
        let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;
        let res = await fetch(url);
        let data = await res.json()
        // .json will collect the data
        // console.log(data);
        return data.meals;

    } catch (error) {
        console.log("error:", error)
        
    }

}

// 3.Append the data in the page
function appendRecipes(recipes){
    recipes_div.innerHTML = null;

    if (recipes === undefined){
        return false;
    }

    recipes.forEach(function(el){
        let meal_name = document.createElement("h3")
        meal_name.innerText =  el.strMeal;

        let tag_name = document.createElement("p")
        tag_name.innerText = "Category: " + el.strTags;

        let meal_image = document.createElement("img")
        meal_image.src = el.strMealThumb;

        let link = document.createElement("a")
        link.innerText = "Recipe Video"
        link.href = el.strYoutube;
        link.target = "_blank"

        let div = document.createElement("div");
        div.append(meal_image, meal_name, tag_name, link)

        recipes_div.append(div)

    })
}


// 1. get the value from the input once user type anything
 async function main(){
    let query = document.getElementById("recipe_query").value
    console.log(query);

    let x = searchRecipes(query);
    // searchRecipes is returning promise
    // console.log("x:", x)

    let data = await x;

    appendRecipes(data);
}


// debouncing
function debounceFn(func, delay){
    // if we have id then delete the old timeout
        if(id){
            clearTimeout(id)
        }
 id = setTimeout(function(){
        func()
    }, delay)

}
