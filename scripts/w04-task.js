/* LESSON 4 - Programming Tasks */

let myProfile = {
    name: 'Elijah Jeremiah Ebinum',
    photo: {
        src: 'images/elijah.jpg',
        alt: 'picture of elijah'
    },

    favoriteFoods: [
        'Rice',
        'Beans',
        'Suya',
        'Shawarma',
        'Plantain',
        'Eba'
    ],

    hobbies: [
        'Football',
        'Watching Netflix',
        'Reading',
        'Programming',
        'Boxing',
        'Jugging'
    ],

    placesLived: [],
};


let places = [
    {
        place: 'Lagos, Nigeria', 
        length: '15 years'
    },

    {
        place: 'Ibadan , Nigeria',
        length: '3 years'
    },

    {
        place: 'Ajah, Lagos, Nigeria',
        length: '4years'
    },

    {
        place: 'Delta Stata, Nigeria',
        length: '3 years'
    },
];

places.forEach(place => {
    myProfile.placesLived.push(place);
});
console.log(myProfile.placesLived);




/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food=> {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
}
);

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
}
);

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd')
    dt.textContent = placesLived.place;
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
}
);

