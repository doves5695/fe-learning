var prices = [];
var total = 0;
(function () {
  function _setTotal() {
    var doms = document.querySelectorAll('.cart_td_5');
    prices = Array.from(doms).map((it) => +it.innerText);
    if (window.compute) {
      compute();
    }
    document.querySelector('#total').innerText = total.toFixed(2);
  }

  _setTotal();

  document.querySelectorAll('.cart_td_8 a').forEach((el) => {
    el.onclick = function () {
      var tr = el.parentElement.parentElement;
      tr.previousElementSibling.remove();
      tr.remove();
      _setTotal();
    };
  });
})();
