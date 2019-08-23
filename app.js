var background2 = null;
var gifLeo = null;
var gifTrump = null;

var moveRatio = 15;
var leoMove = 0;
var leoWidth = 200;
var leoHeight = 85;

var trumpMove = 0;
var trumpWidth = 130;
var trumpHeight = 130;

var gameOver = false;

function validateMove(direction) {
  var res = false;
  const rectLeo = gifLeo.getBoundingClientRect();
  const rectBg = background2.getBoundingClientRect();

  console.log(rectBg, rectLeo);
  if (direction === "left") {
    res = rectLeo.x - moveRatio > rectBg.x;
  } else if (direction === "right") {
    res = rectLeo.x + leoWidth + moveRatio < rectBg.right;
  } else if (direction === "top") {
    res = rectLeo.y - moveRatio > rectBg.y;
  } else if (direction === "bottom") {
    res = rectLeo.y + leoHeight + moveRatio < rectBg.bottom;
  }
  return res;
}

function moveAround(e) {
  var left = Number(gifLeo.style.left.split("px")[0]);
  var top = Number(gifLeo.style.top.split("px")[0]);
  console.log("move");
  document.getElementById(
    "gifLeo"
  ).innerHTML = `<img width="150px" alt="leo" src="./leo.gif" />`;

  if (e.keyCode == 37) {
    if (!validateMove("left")) return;
    gifLeo.classList.add("go-left");
    gifLeo.style.left = (left -= moveRatio) + "px";
  } else if (e.keyCode == 39) {
    if (!validateMove("right")) return;
    gifLeo.classList.remove("go-left");
    gifLeo.style.left = (left += moveRatio) + "px";
  } else if (e.keyCode == 38) {
    if (!validateMove("top")) return;
    leoMove -= 20;
    gifLeo.style.top = (top -= moveRatio) + "px";
  } else if (e.keyCode == 40) {
    if (!validateMove("bottom")) return;
    leoMove += moveRatio;
    gifLeo.style.top = (top += moveRatio) + "px";
  }
}

function stop() {
  document.getElementById(
    "gifLeo"
  ).innerHTML = `<img width="150px" alt="leo" src="./leo-stop.png" />`;
  console.log("stop");
};
let collisionInterval = null;

window.addEventListener("DOMContentLoaded", function() {
  background2 = document.querySelector(".background2");
  gifLeo = document.getElementById("gifLeo");
  gifTrump = document.getElementById("gifTrump");
  document.onkeydown = moveAround;
  document.onkeyup = stop;
  console.log("test");
  collisionInterval = setInterval(() => {
    collision();

    console.log(top)
  }, 10);
});

//create collision
function collision() {
  const rectLeo = gifLeo.getBoundingClientRect();
  const rectTrump = gifTrump.getBoundingClientRect();
  const rectBraconnier = gifBraconnier.getBoundingClientRect();

  if (
    rectLeo.x < rectTrump.x + rectTrump.width - 30 &&
    rectLeo.x + rectLeo.width - 50 > rectTrump.x &&
    rectLeo.y < rectTrump.y + rectTrump.height - 60 &&
    rectLeo.y + rectLeo.height - 60 > rectTrump.y
  ) {
    gameOver=false;
      const trmp  = document.getElementById('gifTrump');
    var rectTrmp = trmp.getBoundingClientRect();
    let top = rectTrmp.top;
    let left = rectTrmp.left;
    let right = rectTrmp.right;
    let bottom = rectTrmp.bottom;
    trmp.style.animation = "toto";
    trmp.style.top = top +"px"
    trmp.style.bottom = bottom +"px"
    trmp.style.right = right +"px"
    trmp.style.left = left +"px"
    console.log("in if collision");
    document.getElementById("gameWon").classList.add("isActive");
   

  } else if (
    rectLeo.x < rectBraconnier.x + rectBraconnier.width - 30 &&
    rectLeo.x + rectLeo.width - 50 > rectBraconnier.x &&
    rectLeo.y < rectBraconnier.y + rectBraconnier.height - 60 &&
    rectLeo.y + rectLeo.height - 60 > rectBraconnier.y
  ) {
    gameOver=true;
    clearInterval(collisionInterval)
    const lea  = document.getElementById('gifBraconnier');
    var rectLea = lea.getBoundingClientRect();
    let top = rectLea.top;
    let left = rectLea.left;
    let right = rectLea.right;
    let bottom = rectLea.bottom;
    lea.style.animation = "toto";
    lea.style.top = top +"px"
    lea.style.bottom = bottom +"px"
    lea.style.right = right +"px"
    lea.style.left = left +"px"
 
    
    
    console.log("in if collision braco");
    document.getElementById("gameOver").classList.add("isActive");
    document.getElementById("").classList.add("isActive");



  }
}