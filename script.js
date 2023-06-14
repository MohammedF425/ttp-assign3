//1) Select the section with an id of container without using querySelector.
var container = document.getElementById('container');

// 2) Select the section with an id of container using querySelector.
var container = document.querySelector("#container");

// 3) Select all of the list items with a class of "second".
var second = document.querySelectorAll('.second');

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
var third = document.querySelector('ol .third')

// 5) Give the section with an id of container the text "Hello!".
// var container2 = document.querySelector('#container').innerHTML("<p>Hello!</p>")
container.textContent = "Hello!";

// 6) Add the class main to the div with a class of footer.
var footer = document.querySelector('.footer')
footer.classList.add('main')

// 7) Remove the class main on the div with a class of footer.
footer.classList.remove('main')

// 8) Create a new li element.
var newLi = document.createElement('new');

// 9) Give the li the text "four".
newLi.textContent = 'four';

// 10) Append the li to the ul element.
var ul = document.querySelector("ul")
ul.appendChild(newLi)

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
var olAll = document.querySelectorAll('ol li')
for(const key in olAll){
    olAll[key].style.backgroundColor = 'green';
}

// 13) Remove the div with a class of footer.
footer.parentNode.removeChild(footer)
// footer.remove()

