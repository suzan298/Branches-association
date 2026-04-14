function setLang(lang) {
  if (lang === 'ar') {
    document.body.classList.add('ar');
    document.documentElement.dir = 'rtl';
  } else {
    document.body.classList.remove('ar');
    document.documentElement.dir = 'ltr';
  }
}
