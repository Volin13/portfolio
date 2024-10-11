if (module.hot) {
  module.hot.accept('./projectDetails.js', function () {
    console.log('Project Details module updated.');
  });
}

import '../scss/index.scss';
import './main/loadHtml';
import './main/menuScript';
import './projectDetails/descriptionSlider';
import '../js/main/languageScript';
