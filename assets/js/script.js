var formEL = document.querySelector("#search-option");

formEL.addEventListener("submit", createTaskHandler);

fetch("https://nutritionix-api.p.rapidapi.com/v1_1/item?upc=49000036756", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
		"x-rapidapi-key": "91bafe7eabmsh13cab3f695cd767p111b8ejsn4a83ee5f5839"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
		"x-rapidapi-key": "91bafe7eabmsh13cab3f695cd767p111b8ejsn4a83ee5f5839"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
}); 