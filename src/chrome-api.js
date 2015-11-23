/**
 * Created by sumit on 20/11/15.
 * tabs.executeScript implementation by eval function, if a code is provided, otherwise call a function from the file name
 */
(function () {
  var chromeApi = {
    executeScript: function (id, objectDetail, callback) {
      //console.log("Execute Script", arguments, id, objectDetail, callback);
      var returnValue;
      if (objectDetail.hasOwnProperty("code")) {
        returnValue = eval(objectDetail["code"]);
      }
      else if (objectDetail.hasOwnProperty("file")) {
        if (objectDetail.hasOwnProperty("init_method")) {
          returnValue = objectDetail["init_method"].call();
        }
        else if (objectDetail.hasOwnProperty("global_variable") && window.hasOwnProperty(objectDetail["global_variable"])) {
          returnValue = eval(window[objectDetail["global_variable"]])
        }
      }
      //console.log("Execute Script returning", returnValue);
      callback(returnValue);
    }
  };
  // exports
  if (typeof exports === 'object') {
    module.exports = chromeApi;
  } else {
    window.chromeApi = chromeApi;
  }
}());


