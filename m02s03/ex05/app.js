const showMessage = function (message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  document.body.append(messageContainer);
};
// measure window at load tme
let oldWidth = window.currentWidth;

window.addEventListener('resize', function () {
  const currentWidth = window.innerWidth;
  if (oldWidth !== currentWidth) {
    showMessage('Fereastra si-a schimbat dimensiunea orizontala');
  }
  oldWidth = currentWidth;
});
