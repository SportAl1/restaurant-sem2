// let offset = 0;
// const sliderline = document.querySelector('.slider-line');

// document.querySelector('.slider-left').addEventListener('click', function(){
//     offset+=667;
//     if (offset>(2001-667)){
//         offset = 0;
//     }
//     sliderline.style.left = -offset+'px';
// });



//TABS

let tab = function(){
  let tabnav = document.querySelectorAll('.tabs-nav__item'), 
      tabcontent = document.querySelectorAll('.tab'),
      tabname;
  
  tabnav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabnav.forEach(item => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabname = this.getAttribute('data-tab-name');
    selectTabContent(tabname);
  }

  function selectTabContent(tabname) {
    tabcontent.forEach( item => {
      item.classList.contains(tabname) ? item.classList.add('is-active') : item.classList.remove('is-active');
    });
  }

};

tab();

// Modal window

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// According

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Filtr

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Slider2

var slideWidth = 300; 
var sliderList = document.querySelector('.slider__list');
var slides = document.querySelectorAll('.slider-img');
var btnPrev = document.querySelector('#prev_slide');
var btnNext = document.querySelector('#next_slide');
var pos = 0;

sliderList.style.width = slides.length * slideWidth + 'px';

btnPrev.onclick = scrollToPrev;
btnNext.onclick = scrollToNext;

function scrollToPrev() {
  pos--;
  
  if (pos < 0) {
    sliderList.style.left = -(pos + 2) * slideWidth + 'px';
    var cloneElem = sliderList.children[slides.length - 1].cloneNode(true);
    sliderList.insertBefore(cloneElem, sliderList.children[0]);
    sliderList.removeChild(sliderList.children[slides.length]);
    pos++;
  }
  
  sliderList.style.left = -(slideWidth * pos) + 'px';
  sliderList.style.transition = 'left 0.6s ease-in-out';
}

function scrollToNext() {
  pos++;
  
  if (pos > slides.length -1) {
    sliderList.style.left = -(pos - 2) * slideWidth + 'px';
    var cloneElem = sliderList.children[0].cloneNode(true);
    sliderList.appendChild(cloneElem);
    sliderList.removeChild(sliderList.children[0]);
    pos--;
    console.log(pos);
  }
  
  sliderList.style.left = -(slideWidth * pos) + 'px';
  sliderList.style.transition = 'left 0.6s ease-in-out';
  
}

// Бургер

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');