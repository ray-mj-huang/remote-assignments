


// Request 1: Click to Change Text.

var webTitleBlock = document.getElementById('webTitleBlock');

var webTitle = document.getElementById('webTitle');

webTitleBlock.addEventListener('click', function(){
  webTitle.textContent = 'Have a Good Time!'
}, false);



// Request 2: Click to Show/Close Menu.

var iconHam = document.getElementById('iconHam');

var mbMenu = document.getElementById('mbMenu');

var iconClose = document.getElementById('iconClose');

iconHam.addEventListener('click', function(){
  mbMenu.classList.add("show");
}, false);

iconClose.addEventListener('click', function(){
  mbMenu.classList.remove("show");
}, false);



// Request 3: Click to Show More Content Boxes.

var callMoreBox = document.getElementById('callMoreBox');

var moreBox = document.getElementById('moreBox');

callMoreBox.addEventListener('click', function(){
  moreBox.classList.remove("display-none");
}, false);





