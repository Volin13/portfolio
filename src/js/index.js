import '../scss/index.scss';
import '../js/menuScript';

import headerHTML from '../partials/header.html';
import mainHTML from '../partials/main.html';
import footerHTML from '../partials/footer.html';

document.getElementById('header').innerHTML = headerHTML;
document.getElementById('main').innerHTML = mainHTML;
document.getElementById('footer').innerHTML = footerHTML;
