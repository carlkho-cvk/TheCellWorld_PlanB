// Sketchfab Viewer API: customize annotation appearance
var version = '1.10.1';
var uid = '12dd524ace5242f5a33e0255bcb4eeaa';
var iframe = document.getElementById('api-frame');

var client = new window.Sketchfab(version, iframe);


function actionSkfb() {
  // initialize
  var error = function error() {
    console.error('Sketchfab API error');
  };

  var success = function success(api) {
    api.start(function () {
      /////////////////
      api.addEventListener('viewerready', function () {
        var url = '';

      });
    });
  };

  client.init(uid, {
    success: success,
    error: error,
    autostart: 1,
    preload: 1
  });
}


actionSkfb(); //////////////////////////////////
// GUI Code
//////////////////////////////////


initGui(); //////////////////////////////////
// GUI Code end
//////////////////////////////////