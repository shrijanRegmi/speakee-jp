let initPos = window.scrollY;

window.onscroll = function () {
  const scrollPos = window.scrollY;
  const header = document.querySelector('#header');

  if (scrollPos > initPos) {
    header.classList.add('header-slide-up');
    header.classList.remove('header-slide-down');
    console.log('Down');
  } else {
    header.classList.add('header-shadow');
    header.classList.add('header-slide-down');
    header.classList.remove('header-slide-up');
    console.log('Up');
  }

  if (scrollPos == 0) {
    header.classList.remove('header-shadow');
  }

  initPos = scrollPos;
}

const menu = document.querySelector('.menu');
const mobNav = document.querySelector('.mobile-nav');
const header = document.querySelector('#header');


menu.addEventListener('click', function () {
  console.log('pressesd');
  menu.classList.toggle('change');
  let val = mobNav.classList.toggle('show-mob-nav');

  if (val) {
    document.body.style.overflowY = 'hidden';
    header.classList.add('header-shadow');
  } else {
    document.body.style.overflowY = 'scroll';
    if (initPos == 0) {
      header.classList.remove('header-shadow');
    }
  }
});
