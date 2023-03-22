var allHeroes,
  heroes = [];

(async function () {
  var map = [, '战士', '法师', '坦克', '刺客', '射手', '辅助'];
  /**
   * 从网络获取当前的英雄数据
   * @returns Promise
   */
  async function getHeroes() {
    return fetch('https://study.duyiedu.com/api/herolist')
      .then((resp) => resp.json())
      .then((resp) => {
        const datas = resp.data.reverse();
        datas.forEach((h) => {
          h.hero_type = map[h.hero_type];
          if (h.hero_type2) {
            h.hero_type2 = map[h.hero_type2];
          }
        });
        return datas;
      });
  }
  var ul = document.querySelector('.list');

  // 1. 初始化：加载所有的英雄数据，生成li，加入到ul中
  allHeroes = await getHeroes();
  filter();
  setHeroHTML(heroes);
  /**
   * 根据指定的英雄数组，生成对应的html，放入到ul中
   * @param {*} heroes
   */
  function setHeroHTML(heroes) {
    ul.innerHTML = heroes
      .map(
        (
          h
        ) => `<li><a href="https://pvp.qq.com/web201605/herodetail/${h.ename}.shtml" target="_blank">
    <img
      src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${h.ename}/${h.ename}.jpg"
      alt=""
    />
    <span>${h.cname}</span>
  </a></li>`
      )
      .join('');
  }
})();
