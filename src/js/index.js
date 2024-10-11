if (module.hot) {
  module.hot.accept('./index.js', function () {
    console.log('Index module updated.');
  });
}
import '../scss/index.scss';
import '../js/main/loadHtml';
import '../js/main/menuScript';
import '../js/main/hbsLoader';
import '../js/main/samplesSlider';
import '../js/main/samplesItem';
import '../js/main/languageScript';
