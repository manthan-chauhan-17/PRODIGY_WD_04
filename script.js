const scrollButton = document.getElementById('scrollButton');

scrollButton.addEventListener('click', function () {
    scrollToSection('about')
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
      window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
      });
  }
}

window.onscroll = function() {myFunction()};

function myFunction(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('myBar').style.width = scrolled + "%";
}

// For Type JS
var typed = new Typed('#element', {
    strings: ['<i>Manthan </i> Chauhan.'],
    typeSpeed: 50,
  });