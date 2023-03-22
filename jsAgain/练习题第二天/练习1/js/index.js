var BMI = -1;
var result = '';
(function () {
  var btn = document.querySelector('input[type="button"]');
  var txtHeight = document.getElementById('txtHeight');
  var txtWeight = document.getElementById('txtWeight');
  var resultDom = document.getElementById('result');

  btn.onclick = function () {
    var height = +txtHeight.value || 0,
      weight = +txtWeight.value || 0;
    if (!height || !weight) {
      BMI = -1;
    } else {
      BMI = weight / (height / 100) ** 2;
    }
    if (window.compute) {
      compute();
    }
    resultDom.innerText = result;
  };
})();
