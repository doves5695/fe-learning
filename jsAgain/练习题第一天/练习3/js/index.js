var width = 0,
  height = 0,
  modalWidth = 0,
  modalHeight = 0,
  x = 0,
  y = 0;
(function () {
  var btn = document.querySelector('button');
  var closeBtn = document.querySelector('.modal .close');
  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };
  var modal = document.querySelector('.modal');
  btn.onclick = function () {
    modal.style.display = 'block';
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    modalWidth = modal.clientWidth;
    modalHeight = modal.clientHeight;

    if ('compute' in window) {
      compute();
    }

    modal.style.left = x + 'px';

    modal.style.top = y + 'px';
  };
})();
