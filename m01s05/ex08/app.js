const button = document.getElementById('clicker');

function clickHandler() {
  alert('Ai apasat butonul!');
}
button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.addEventListener('click', clickHandler);
});
