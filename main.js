let canvas =
  document.getElementById("canvas");
context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
balls = [];

window.addEventListener(
  "resize",
  function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
);

function circle(x, y, r, c) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;

  this.dx = Math.random() * 4 + 1;
  this.dx *=
    Math.floor(Math.random() * 2) == 1
      ? 1
      : -1;
  this.dy = Math.random() * 4 + 1;
  this.dx *=
    Math.floor(Math.random() * 2) == 1
      ? 1
      : -1;

  this.draw = function () {
    context.beginPath();
    context.fillStyle = this.c;
    context.arc(
      this.x,
      this.y,
      this.r,
      0,
      Math.PI * 2
    );
    context.fill();
  };

  this.animate = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (
      this.x + this.r > canvas.width ||
      this.x - this.r < 0
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.r > canvas.height ||
      this.y - this.r < 0
    ) {
      this.dy = -this.dy;
    }

    this.draw();
  };
}

for (let i = 0; i < 500; i++) {
  let r = Math.random() * 1 + 0.5;
  let x =
    Math.random() *
      (canvas.width - r * 2) +
    r;
  let y =
    Math.random() *
      (canvas.height - r * 2) +
    r;
  let c = "red";
  balls.push(new circle(x, y, r, c));
}

function update() {
  context.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );
  for (
    let i = 0;
    i < balls.length;
    i++
  ) {
    balls[i].animate();
  }
  requestAnimationFrame(update);
}
update();
