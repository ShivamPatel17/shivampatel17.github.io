setTimeout(function() {
  fadeOutPreloader(document.getElementById('preloader'), 69);
}, 3000);

$(document).ready(function() {
  $(window).on('beforeunload', function() {
    window.scrollTo(0, 0);
  });

  var isMobile = false;
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    isMobile = true;
  }

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('landing', 'assets/particles.json', function() {});

  // Typing Text
  var element = document.getElementById('txt-rotate');
  var toRotate = element.getAttribute('data-rotate');
  var period = element.getAttribute('data-period');
  setTimeout(function() {
    new TxtRotate(element, JSON.parse(toRotate), period);
  }, 4000);



  // INJECT CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '#txt-rotate > .wrap { border-right: 0.08em solid #666 }';
  document.body.appendChild(css);

  // Initialize AOS
  AOS.init({
    disable: 'mobile',
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true
  });

  randomizeOrder();

  if(isMobile){
    document.querySelector("#slideshow-section-card").style.display = "none";
  }

  var slideIndex = 1;


  setInterval(function() {
    
    var numSlides = document.querySelector("#aboutme-slideshow > div.slideshow-pictures").childElementCount;
    var previous = slideIndex-1;
    if(previous==0) previous = numSlides;
    console.log(slideIndex);


    
    document.querySelector("#aboutme-slideshow > div.slideshow-pictures > div:nth-child("+previous+")").style.display = "none";
    document.querySelector("#aboutme-slideshow > div.slideshow-pictures > div:nth-child("+slideIndex+")").style.display = "inline";

 
    

    slideIndex++;
    if(slideIndex>numSlides) slideIndex= 1;
  }, 5000);
  

});

/* FUNCTIONS */
/* Preloader */

function fadeOutPreloader(element, duration) {
  opacity = 1;

  interval = setInterval(function() {
    if (opacity <= 0) {
      element.style.zIndex = 0;
      element.style.opacity = 0;
      element.style.filter = 'alpha(opacity = 0)';

      // Allow horizontal scroll
      document.documentElement.style.overflowY = 'auto';

      // Remove preloader div
      document.getElementById('preloader').remove();

      clearInterval(interval);
    } else {
      opacity -= 0.1;
      element.style.opacity = opacity;
      element.style.filter = 'alpha(opacity = ' + opacity * 100 + ')';
    }
  }, duration);
}

/* Typing Text */

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 5;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

/* Word Cloud */

function randomizeOrder() {
  var parent = document.getElementById('skills');
  var divs = parent.getElementsByTagName('div');
  var frag = document.createDocumentFragment();

  // Randomize order of skills
  while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
  }
  parent.appendChild(frag);
}

function fadeOutElement(element, duration){
  console.log("OUT start")
  var op = 1;
  var timer = setInterval(function () {
    if (op > 0){
      op -= op * 0.1;
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    }
    
    
  }, duration);
  element.style.display = "none";
  console.log("OUT over");

}

function fadeInElement(element, duration) {
  console.log("IN start");
  var op = 0.1;  // initial opacity
  element.style.opacity = 0;
  element.style.display = "inline";
  var timer = setInterval(function () {
      if(op<=1){
        op += op * 0.1;
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      }
      
  }, duration);
  console.log("IN over");

}

