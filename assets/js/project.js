var playV = document.querySelector(".video1");
var playW = document.querySelector(".video2");
console.log(playV);

window.addEventListener("scroll", function () {
  var heightN = window.scrollY;
  console.log(heightN);

  if (heightN > 100) {
    playV.play();
  } else {
    playV.pause();
  }
  if (heightN > 350) {
    playW.play();
  } else {
    playW.pause();
  }
  if (heightN > 1000) {
    playV.pause();
    playW.pause();
  }

  var str = window.getComputedStyle(document.querySelector('.right_one'), ':before').getPropertyValue('content');
  console.log(str);
  if (heightN > 10) {
    str.animatie({ "width": "100%" });
  }
})