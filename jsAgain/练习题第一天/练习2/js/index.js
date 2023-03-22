var count = -100;

(function () {
  var countDom = document.querySelector('h1 span');
  setTimeout(() => {
    countDom.innerText = count;
  }, 100);

  var btn = document.querySelector('button');
  btn.onclick = function () {
    if ('increase' in window) {
      increase();
      countDom.innerText = count;
    }
    var span = document.createElement('span');
    span.className = 'increase';
    btn.appendChild(span);
    span.addEventListener('animationend', () => {
      span.remove();
    });
  };
})();
