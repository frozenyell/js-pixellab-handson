const breakpoint = 1024;
const mq1 = window.matchMedia(`(max-width: ${breakpoint}px)`);

//event delegation
document.addEventListener('click', onclick);
//target -> elementul de pe care a plecat eventul

function onClick(event) {
  const target = event.target;

  //verificari + early return
  if (target.nodeName !== 'H1') {
    return;
  }
  const list = target.nextElementSibling;
  list.hidden = !list.hidden;
}
