/* W02-Task - Profile Home Page */
let profilePicture = "images/myimage.jpg"; 

/* Step 2 - Variables */
let fullName = "Elijah Ebinum";
let currentYear = 2024;


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.getElementById("year"); 
const imageElement = document.querySelector("img"); 

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture); 
imageElement.setAttribute("alt", `Profile image of ${fullName}`);





/* Step 5 - Array */
let favoriteFoods = ['Rice', 'Beans', 'Eba', 'Pounded Yam', 'Semovita', 'Plantain'];
foodElement.innerHTML = "<br>" + favoriteFoods.join(", ");

const additionalFavoriteFood = "Burgers";
favoriteFoods.push(additionalFavoriteFood);
foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");


favoriteFoods.shift();
foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");

favoriteFoods.pop();

foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");

