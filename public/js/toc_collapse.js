const tocToggler = document.querySelector('.tocToggler');
let togglerText = '非表示';

tocToggler.addEventListener('click', () => {
  if (togglerText == '非表示') {
    togglerText = '表示';
  } else {
    togglerText = '非表示';
  }

  tocToggler.textContent = togglerText;
})