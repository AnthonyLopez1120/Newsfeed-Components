/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuContainer = document.querySelector('.header');
menuContainer.appendChild(menuComponent);

function menuComponent(menuItems){

  const menuButton = document.createElement('div');
  const list = document.createElement('ul');

  const students = document.createElement('li')
  const faculty = document.createElement('li')
  const whatsNew = document.createElement('li')
  const techTrends = document.createElement('li')
  const music = document.createElement('li')
  const logOut = document.createElement('li')

  menuButton.classList.add('menu');

  students.textContent = 'Students';
  faculty.textContent = 'Faculty';
  whatsNew.textContent = 'Whats New';
  techTrends.textContent = 'Tech Trends';
  music.textContent = 'Music';
  logOut.textContent = 'Log Out';
  
  menuButton.appendChild(list);
  list.appendChild(students);
  list.appendChild(faculty);
  list.appendChild(whatsNew);
  list.appendChild(techTrends);
  list.appendChild(music);
  list.appendChild(logOut);

  const clickMenu = document.querySelector('.menu-button');

  clickMenu.addEventListener('click', event => {
    console.log('button clicked', event.target);
    clickMenu.classList.toggle('article-open');
  });

  return menuButton;

};
