// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// var raf;

// var ball = {
//   x: 100,
//   y: 100,
//   vx: 5,
//   vy: 2,
//   radius: 25,
//   color: "blue",
//   draw: function () {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//     ctx.closePath();
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   },
// };

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ball.draw();
//   ball.x += ball.vx;
//   ball.y += ball.vy;

//   if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
//     ball.vy = -ball.vy;
//   }
//   if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
//     ball.vx = -ball.vx;
//   }

//   raf = window.requestAnimationFrame(draw);
// }

// canvas.addEventListener("mouseover", function (e) {
//   raf = window.requestAnimationFrame(draw);
// });

// canvas.addEventListener("mouseout", function (e) {
//   window.cancelAnimationFrame(raf);
// });

// ball.draw();

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}

var cn;
//= document.getElementById('cw');
var c;
var u = 10;
const m = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};
window.onmousemove = function (e) {
  m.x = e.clientX;
  m.y = e.clientY;
};
function gc() {
  var s = "0123456789ABCDEF";
  var c = "#";
  for (var i = 0; i < 6; i++) {
    c += s[Math.ceil(Math.random() * 15)];
  }
  return c;
}
var a = [];
window.onload = function myfunction() {
  cn = document.getElementById("cw");
  c = cn.getContext("2d");

  for (var i = 0; i < 10; i++) {
    var r = 30;
    var x = Math.random() * (innerWidth - 2 * r) + r;
    var y = Math.random() * (innerHeight - 2 * r) + r;
    var t = new ob(
      innerWidth / 2,
      innerHeight / 2,
      5,
      "red",
      Math.random() * 200 + 20,
      2
    );
    a.push(t);
  }
  //cn.style.backgroundColor = "#700bc8";

  c.lineWidth = "2";
  c.globalAlpha = 0.5;
  resize();
  anim();
};
window.onresize = function () {
  resize();
};
function resize() {
  cn.height = innerHeight;
  cn.width = innerWidth;
  for (var i = 0; i < 101; i++) {
    var r = 30;
    var x = Math.random() * (innerWidth - 2 * r) + r;
    var y = Math.random() * (innerHeight - 2 * r) + r;
    a[i] = new ob(
      innerWidth / 2,
      innerHeight / 2,
      4,
      gc(),
      Math.random() * 200 + 20,
      0.02
    );
  }
  //  a[0] = new ob(innerWidth / 2, innerHeight / 2, 40, "red", 0.05, 0.05);
  //a[0].dr();
}
function ob(x, y, r, cc, o, s) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.cc = cc;
  this.theta = Math.random() * Math.PI * 2;
  this.s = s;
  this.o = o;
  this.t = Math.random() * 150;

  this.o = o;
  this.dr = function () {
    const ls = {
      x: this.x,
      y: this.y,
    };
    this.theta += this.s;
    this.x = m.x + Math.cos(this.theta) * this.t;
    this.y = m.y + Math.sin(this.theta) * this.t;
    c.beginPath();
    c.lineWidth = this.r;
    c.strokeStyle = this.cc;
    c.moveTo(ls.x, ls.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  };
}
function anim() {
  requestAnimationFrame(anim);
  c.fillStyle = "rgba(0,0,0,0.05)";
  c.fillRect(0, 0, cn.width, cn.height);
  a.forEach(function (e, i) {
    e.dr();
  });
}
