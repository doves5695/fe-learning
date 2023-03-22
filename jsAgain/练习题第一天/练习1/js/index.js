(function () {
  function setText(domSelector, varName) {
    if (varName in window) {
      var dom = document.querySelector(domSelector);
      dom.innerText = window[varName];
    }
  }

  setText('h1 span', 'total');
  setText('.panel:nth-child(1) .score', 'score1');
  setText('.panel:nth-child(2) .score', 'score2');
})();
