var direction, target;

(function () {
  if (typeof window.hero !== 'object') {
    return;
  }

  const directions = ['right', 'rd', 'down', 'ld', 'left', 'lu', 'up', 'ru'];
  class Hero {
    constructor({
      direction = 'down',
      isRunning = false,
      position: { x = 300, y = 300 } = {},
    } = {}) {
      this.direction = direction;
      this.isRunning = isRunning;
      this.position = {
        x,
        y,
      };
      this.runningIndex = 1;
      this.runningMaxIndex = 4;
      this.speed = 200; // 每秒移动的像素值
      this.runningSwitchDuration = 0.12; // 奔跑状态切换的间隔时间（秒）
      // 上一次移动的时间点
      this.beginTime = Date.now(); // 开始奔跑的时间点
      this.lastMoveTime = Date.now();
      // 上一次切换奔跑状态的时间点
      this.lastSwitchTime = Date.now();
      // 奔跑的目标地点
      this.targetPosition = null;
      this.dom = document.createElement('img');
      this.totalTime = 0; // 计算奔跑总用时(秒)
      document.body.appendChild(this.dom);
    }

    _getRad(target) {
      if (!target) {
        target = this.targetPosition;
      }
      const point = {
        x: target.x - this.position.x,
        y: target.y - this.position.y,
      };
      let rad = Math.atan(point.y / point.x);
      if (point.x < 0) {
        rad += Math.PI;
      } else if (rad < 0) {
        rad += 2 * Math.PI;
      }
      return rad || 0;
    }

    _fps_runSwitch() {
      if (!this.isRunning) {
        return;
      }
      const now = Date.now();
      const dis = now - this.lastSwitchTime;
      if (dis >= this.runningSwitchDuration * 1000) {
        this.lastSwitchTime = now;
        this.runningIndex = (this.runningIndex % this.runningMaxIndex) + 1;
      }
    }

    _fps_run() {
      if (!this.targetPosition) {
        return;
      }
      const now = Date.now();
      const timeDis = now - this.lastMoveTime;
      const speed = this.speed / 1000;
      const dis = speed * timeDis;
      if (dis < 1) {
        return;
      }
      this.lastMoveTime = now;
      const rad = this._getRad();
      let incX = Math.cos(rad) * dis;
      let incY = Math.sin(rad) * dis;

      this.position.x += incX;
      this.position.y += incY;
      if (now - this.beginTime >= this.totalTime * 1000) {
        this.targetPosition = null;
        this.isRunning = false;
      }
    }

    setTarget({ x, y }) {
      if (!window.compute) {
        return;
      }
      // set global for students
      target = { x, y };
      // 设置方向
      let rad = this._getRad(target);
      const pieceRad = (2 * Math.PI) / 8; // 把一周平均分为8份

      rad = (rad + pieceRad / 2) % (2 * Math.PI);
      const times = parseInt(rad / pieceRad);
      // set global for students
      direction = directions[times];

      compute(); // for students
      if (
        hero.position.x === this.position.x &&
        hero.position.y === this.position.y
      ) {
        return;
      }
      this.isRunning = hero.isRunning;
      this.targetPosition = hero.position;
      this.direction = hero.direction;

      this.lastMoveTime = this.beginTime = Date.now();

      // 计算奔跑总用时
      const dis = Math.sqrt(
        (this.targetPosition.x - this.position.x) ** 2 +
          (this.targetPosition.y - this.position.y) ** 2
      );
      this.totalTime = dis / this.speed;
    }

    /**
     * fps
     */
    fps() {
      // 处理奔跑的图片切换
      this._fps_runSwitch();
      // 处理位置的变化
      this._fps_run();
      this.render();
    }

    /**
     * 渲染
     */
    render() {
      // 设置位置
      this.dom.style.left = this.position.x + 'px';
      this.dom.style.top = this.position.y + 'px';
      // 设置图片
      let imgName = this.direction;
      if (this.isRunning) {
        imgName += '-' + this.runningIndex;
      } else {
        imgName += '-0';
      }
      this.dom.src = `./images/${imgName}.png`;
    }
  }

  const realHero = new Hero(window.hero);

  function render() {
    requestAnimationFrame(() => {
      realHero.fps();
      render();
    });
  }
  render();

  window.addEventListener('click', (e) => {
    const x = e.clientX,
      y = e.clientY;
    const div = document.createElement('div');
    div.className = 'pointer';
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.addEventListener('animationend', () => {
      div.remove();
    });
    document.body.appendChild(div);
    realHero.setTarget({ x, y });
  });
})();
