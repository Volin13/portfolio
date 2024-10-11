if (module.hot) {
  module.hot.accept('./gallery.js', function () {
    console.log('Gallery module updated.');
  });
}

import '../scss/index.scss';
import './main/loadHtml';
import './main/menuScript';
import './gallery/hbsLoader';
import '../js/main/languageScript';
