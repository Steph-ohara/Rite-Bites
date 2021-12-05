// idirate through responses with forloop
// create html with javascript
// apend those elements to the html where I want them

var formEL = document.querySelector("#search-option");

async function formSubmit(e) {
  e.preventDefault();
  var formInput = document.getElementById("search-input").value;
  var formSelect = document.getElementById("search-type").value;

  const recipeRes = await fetch(
    "https://edamam-recipe-search.p.rapidapi.com/search?q=" + formInput,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
        "x-rapidapi-key": "fc2d74bc61msh2e94d023d3c4315p13df19jsn707909954210",
      },
    }
  );

  if (!recipeRes.ok) {
    console.error(recipeRes.status);
  } else {
    const recipeData = await recipeRes.json();
    console.log(recipeData);
  }

  const response = await fetch(
    "https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat",
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
        "x-rapidapi-key": "fc2d74bc61msh2e94d023d3c4315p13df19jsn707909954210",
      },
    }
  );

  if (!response.ok) {
    console.error(response.status);
  } else {
    const data = await response.json();
    console.log(data);
  }
}

formEL.onsubmit = formSubmit;

// function formChange(e) {
//   console.log(e.target.value)
// }

// formEL.onchange = formChange;
