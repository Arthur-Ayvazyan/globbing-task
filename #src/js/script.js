window.onload = function () {
  const menuLangage = document.querySelector('.language');
  const menuLangageIcon = document.querySelector('.language__icon');
  const menuLangageList = document.querySelector('.language__list');

  menuLangage.addEventListener('click', (e) => {
    menuLangage.classList.toggle('language_border');
    menuLangageList.classList.toggle('language__list_active');
    menuLangageIcon.classList.toggle('language__icon_rotate');
  });

  document.addEventListener('click', (e) => {
    if (e.target !== menuLangage && menuLangageList.classList.contains('language__list_active')) {
      menuLangageList.classList.remove('language__list_active');
      menuLangage.classList.toggle('language_border');
      menuLangageIcon.classList.remove('language__icon_rotate');
    }
  }, false);

  //window.onload
}