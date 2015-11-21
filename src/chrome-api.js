/**
 * Created by sumit on 20/11/15.
 * tabs.executeScript implementation by eval function, if a code is provided, otherwise call a function from the file name
 */
(function () {

  var chromeApi = {
    executeScript: function (id, objectDetail, callback) {
      if (objectDetail.hasOwnProperty("code")) {
        eval(objectDetail["code"]);
      }
      else if (objectDetail.hasOwnProperty("file") && objectDetail.hasOwnProperty("init_method")) {
        objectDetail["init_method"].call();
      }
        callback();
    }
  };
  // exports
  if (typeof exports === 'object') {
    module.exports = chromeApi;
  } else {
    window.chromeApi = chromeApi;
  }
}());


