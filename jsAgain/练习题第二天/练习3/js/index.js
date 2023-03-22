(function () {
  if (window.colors) {
    var doms = document.querySelectorAll('.news li');
    doms.forEach((el, i) => {
      el.style.backgroundColor = colors[i];
    });
  }
})();
