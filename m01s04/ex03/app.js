var routes = [
  {
    name: 'Home',
    route: '/',
    text: 'Homepage',
  },

  {
    name: 'Contact',
    route: '/contact',
    text: 'Contact page',
  },

  {
    name: 'About',
    route: '/about',
    text: 'About page',
  },
];

var selectedRoute = '/';

switch (selectedRoute) {
  case '/':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
    break;

  case '/about':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
    break;

  case '/contact':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
    break;

  default:
    console.log('404');
}

var paragraphMessage = document.getElementById('message');
var userPrompt = prompt('Introduceti numarul');
var number = Number(userPrompt);

switch (true) {
  case number < 100:
    var message = `${number} este mai mic decat 100.`;
    break;
  case number > 100:
    var message = `${number} este mai mare decat 100.`;
    break;
  default:
    var message = `${number} este egal cu 100.`;
}
paragraphMessage.innerText = message;
