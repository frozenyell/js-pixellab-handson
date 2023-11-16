const button = document.querySelector('.btn');
const breakpoint = 650;

document.addEventListener('DOMContentLoaded', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth >= breakpoint) {
    button.addEventListener('click', onClick);
  }
});

//function functions are hoisted
function onClick() {
  alert('butonul a fost apasat');
}

button.addEventListener('click', onClick);

window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;

  if (currentWidth < 650) {
    button.removeEventListener('click', onClick);
  } else {
    button.addEventListener('click', onClick);
  }
});
