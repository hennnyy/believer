// var playV = document.querySelectorAll(".video1");
// var playW = document.querySelectorAll(".video2");
// console.log(playV);

// window.addEventListener("scroll", function () {
//   var heightN = window.scrollY;
//   console.log(heightN);

//   for (let i = 0; i < playV.length; i++) {
//     if (heightN > 100) {
//       playV[i].play();
//     } else {
//       playV[i].pause();
//     }
//     if (heightN > 350) {
//       playW[i].play();
//     } else {
//       playW[i].pause();
//     }
//     if (heightN > 1000) {
//       playV[i].pause();
//       playW[i].pause();
//     }
//   }

//   var str = window.getComputedStyle(document.querySelector('.right_one'), ':before').getPropertyValue('content');
//   console.log(str);
//   if (heightN > 10) {
//     str.animatie({ "width": "100%" });
//   }
// })



// project 스크롤 영상 이벤트
var playV = document.querySelector(".video1");
var playW = document.querySelector(".video2");


  window.addEventListener("scroll", function () {
  var heightN = window.scrollY;
    if (heightN > 2000) {
      playV.play();
    } else {
      playV.pause();
    }
    if (heightN > 2500) {
      playW.play();
    } else {
      playW.pause();
    }
    if (heightN > 3500) {
      playV.pause();
      playW.pause();
    }

});