function checkPortrait() {
  if (document.documentElement.clientHeight > document.documentElement.clientWidth) {
    $('body').removeClass('portraitPls');
  } else {
    $('body').addClass('portraitPls');
  }
}
