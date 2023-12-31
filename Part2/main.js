
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [
'pic1.jpg',
'pic2.jpg',
'pic3.jpg',
'pic4.jpg',
'pic5.jpg'
];

/* Declaring the alternative text for each image file */

const alternativeText = {
    'pic1.jpg' : 'Eyeball Closeup',
    'pic2.jpg' : 'Fancy Rock',
    'pic3.jpg' : 'Flowers',
    'pic4.jpg' : 'Egyptian Mural',
    'pic5.jpg' : 'Moth'
};

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', alternativeText[image]);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

