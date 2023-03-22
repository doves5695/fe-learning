var names = [];
var scores = [];
var number1 = 0;
var number2 = 0;
(function () {
  function _getDatas() {
    var nameStore = localStorage.getItem('names');
    var scoreStore = localStorage.getItem('scores');
    if (!nameStore || !scoreStore) {
      var datas = Mock.mock({
        'data|10-20': [
          {
            name: '@cname',
            'score|0-100': 1,
          },
        ],
      }).data;
      nameStore = datas.map((it) => it.name);
      scoreStore = datas.map((it) => it.score);
      localStorage.setItem('names', JSON.stringify(nameStore));
      localStorage.setItem('scores', JSON.stringify(scoreStore));
      _getDatas();
    } else {
      names = JSON.parse(nameStore);
      scores = JSON.parse(scoreStore);
    }
  }

  _getDatas();

  var grid = document.querySelector('.grid');
  var html = grid.innerHTML;
  for (var i = 0; i < names.length; i++) {
    html += `<div>${names[i]}</div>`;
    html += `<div>${scores[i]}</div>`;
  }
  grid.innerHTML = html;

  if (window.compute) {
    compute();
  }
  var summary = document.querySelector('.summary');
  summary.innerText = `不及格：${number1}人，90分以上：${number2}人`;
})();
