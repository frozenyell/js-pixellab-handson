document.addEventListener('DOMContentLoaded', function () {
  const breakpoint = 1024;
  const heading = document.querySelector('h1');
  //dom traversal58451
  const list = heading.nextElementSibling;

  //resize event
  //no debounce
  window.addEventListener('resize', function () {});
  //perform calculations
  function checkResolution() {
    console.log('checking resolution');
    if (window.innerWidth < breakpoint) {
      // hide liste, bind event
      list.hidden = true;
      heading.addEventListener('click', toggleList);
    } else {
      //show list unbind event
      list.hidden = false;
      heading.removeEventListener('click', toggleList);
    }
  }

  //hoisting
  function toggleList() {
    list.hidden = !list.hidden;
  }

  checkResolution();
});
