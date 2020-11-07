let initPos = window.scrollY;

window.onscroll = function () {
  const scrollPos = window.scrollY;
  const header = document.querySelector('#header');

  if (scrollPos > initPos) {
    header.classList.add('header-slide-up');
    header.classList.remove('header-slide-down');
    header.classList.remove('header-shadow');
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
  // console.log(document.documentElement.scrollTop, document.documentElement.);
}