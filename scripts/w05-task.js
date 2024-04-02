/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        article.appendChild(h3);

        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.querySelector('#filtered').value;
    let filteredTemples;

    switch (filter) {
        case 'utah':
            filteredTemples = temples.filter(temple => temple.location.includes('Utah'));
            break;
        case 'notutah':
            filteredTemples = temples.filter(temple => !temple.location.includes('Utah'));
            break;
        case 'older':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
        case 'all':
        default:
            filteredTemples = temples;
            break;
    }

    displayTemples(filteredTemples);
}

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => filterTemples(templeList));

getTemples();
