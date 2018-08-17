
      /////////// Navbar function /////////////
    let navbar = document.getElementById('nav');
    let navButton = document.getElementById('nav-ham');




    window.addEventListener("resize", function(){
      let wSize = window.innerWidth;
      if(wSize >= 768) {
        navbar.classList.remove('dropdown');
      } else if (wSize < 768  && navButton.className === 'navbar-toggle') {
        navbar.classList.add('dropdown');
      }
    });


    navButton.addEventListener("click", function(){

      navbar.classList.toggle('dropdown');
    });




    ///////////// portfolio function ///////////////
    let modalContent = document.getElementById("modal-content");
    let photoList = document.getElementsByClassName('port-row')[0];
    let mainModal = document.getElementById('modal-container');
    let nextButton = document.getElementById('port-next');
    let prevButton = document.getElementById('port-prev');
    let closeButton = document.getElementById('close-modal');
    let imageArray ;
    let currentImage = null;
    let lastImageIndex = null;


    photoList.addEventListener('click', function(event){
      currentImage = parseInt(event.target.dataset.number);
      currentClass = event.target.className;
      imageArray = document.getElementsByClassName(currentClass);


      if(event.target.parentElement.className === 'port-column') {
        modalContent.src = event.target.src;
        mainModal.style.visibility = 'visible';
      }
    });

    mainModal.addEventListener('click', function(event) {
      if(event.target.id === 'modal-container' || event.target.id === 'close-modal' || event.target.id === 'top-bar' || event.target.id === 'bottom-bar') {
        mainModal.style.visibility = 'hidden';
      }

    })



    let nextImage = function() {
      currentImage ++;

      for(let i = 0; i < imageArray.length; i++){
          if( currentImage >= imageArray.length ) {
            modalContent.src = imageArray[0].src;
            currentImage = 0;
            console.log(currentImage);
          } else if (imageArray[currentImage].dataset.number == currentImage) {
            modalContent.src = imageArray[currentImage].src;
          }
      }

    }

    let prevImage = function() {
      currentImage --;

      for(let i = 0; i < imageArray.length; i++){
        if( currentImage < 0 ) {
            modalContent.src = imageArray[imageArray.length - 1].src;
            currentImage = imageArray.length - 1;
          } else if (imageArray[currentImage].dataset.number == currentImage) {
            modalContent.src = imageArray[currentImage].src;
          }
      }
    }
    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);


///////////// Port link function /////////////////
let portLinks = document.getElementsByClassName('port-links');
let portPage = document.getElementsByClassName('port-page');
let realEstatePage = document.getElementsByClassName('real-estate-port')[0];
let headShotPage = document.getElementsByClassName('headshot-port')[0];
let landscapePage = document.getElementsByClassName('landscape-port')[0];
let cityscapePage = document.getElementsByClassName('cityscape-port')[0];
let cityLink = document.getElementById('cityscape-link');
let landscapeLink = document.getElementById('landscape-link');
let realEstateLink = document.getElementById('real-estate-link');

const handleClick = (e) => {
  e.preventDefault();
  const active = document.querySelector('.active');
  const activeLink = document.querySelector('.active-color');
  if(active){
    active.classList.remove('active');
    activeLink.classList.remove('active-color');
  }

  switch (e.target.id) {
    case 'real-estate-link':
      realEstatePage.classList.add('active');
      realEstateLink.classList.add('active-color')
      break;
    case 'headshot-link':
      headShotPage.classList.add('active');
      break;
    case 'landscape-link':
      landscapePage.classList.add('active');
      landscapeLink.classList.add('active-color');
      break;
    case 'cityscape-link':
      cityscapePage.classList.add('active');
      cityLink.classList.add('active-color');
      break;
  }

}


for(let i = 0; i < portLinks.length; i++) {
  portLinks[i].addEventListener('click', handleClick);
}




////////////// Prevent right click ////////////
let copyAlert = document.getElementById('copy-alert');
let body = document.getElementsByTagName('body')[0];

window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
      copyAlert.style.visibility = 'visible';
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }

  };


      body.addEventListener('click', function() {
        if(copyAlert.style.visibility === 'visible') {
          copyAlert.style.visibility = 'hidden';
        }
      })
