window.onload = function () {
  //언어별 디스플레이

  let koBtn = document.querySelectorAll('.ko_btn');
  let enBtn = document.querySelectorAll('.en_btn');
  let koVer = document.querySelectorAll('.ko_version');
  let enVer = document.querySelectorAll('.en_version');

  for (let i = 0; i < koBtn.length; i++) {
    koBtn[i].addEventListener('click', function () {
      for (let j = 0; j < enVer.length; j++) {
        enVer[j].style.display = "none";
        koVer[j].style.display = "block";
      }
    })
  }

  for (let i = 0; i < enBtn.length; i++) {
    enBtn[i].addEventListener('click', function () {
      for (let j = 0; j < koVer.length; j++) {
        koVer[j].style.display = "none";
        enVer[j].style.display = "block";
      }
    })
  }

  //고스트메뉴

  let menuBtn = document.querySelector('.menu_btn');
  let ghostList = document.querySelector('.ghost_menu');
  let list = document.querySelectorAll('.menu_list');
  let subToggle = true;

  menuBtn.addEventListener('click', function () {
    if (subToggle) {
      ghostList.style.setProperty('height', 'calc(100vh - 60px)');
    } else {
      ghostList.style.setProperty('height', '0px');
    }
    subToggle = !subToggle;
  });

  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
      menuBtn.checked = false;
      ghostList.style.setProperty('height', '0px');
      subToggle = !subToggle;
    });
  };

}

//스크롤 이벤트

window.addEventListener("scroll", function () {

  let gradient = document.querySelector('.ko_version .about_gradient');
  let animeOpacity = document.querySelector('.ko_version .about_opacity');

  let value = window.scrollY;

  if (window.innerWidth > 1024) {
    if (value > 700) {
      gradient.classList.add('active');
      animeOpacity.classList.add('on');
    }
    else {
      gradient.classList.remove('active');
      animeOpacity.classList.remove('on');
    }
  }

  if (window.innerWidth < 1024) {
    if (value > 500) {
      gradient.classList.add('active');
      animeOpacity.classList.add('on');
    }
    else {
      gradient.classList.remove('active');
      animeOpacity.classList.remove('on');
    }
  }

  //english
  let gradientEn = document.querySelector('.en_version .about_gradient');
  let animeOpacityEn = document.querySelector('.en_version .about_opacity');

  if (window.innerWidth > 1024) {
    if (value > 700) {
      gradientEn.classList.add('active');
      animeOpacityEn.classList.add('on');
    }
    else {
      gradientEn.classList.remove('active');
      animeOpacityEn.classList.remove('on');
    }
  }

  if (window.innerWidth < 1024) {
    if (value > 500) {
      gradientEn.classList.add('active');
      animeOpacityEn.classList.add('on');
    }
    else {
      gradientEn.classList.remove('active');
      animeOpacityEn.classList.remove('on');
    }
  }
});

// project 스크롤 영상 이벤트
var playV = document.querySelectorAll(".video1");
var playW = document.querySelectorAll(".video2");


  window.addEventListener("scroll", function () {
  var heightN = window.scrollY;
  for (k = 0; k < playV.length; k++) {
    if (heightN > 2000) {
      playV[k].play();
    } else {
      playV[k].pause();
    }
    if (heightN > 2500) {
      playW[k].play();
    } else {
      playW[k].pause();
    }
    if (heightN > 3500) {
      playV[k].pause();
      playW[k].pause();
    }
  }

});

// roadmap 스크롤 이벤트


window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log(value);
  let timeOne = document.querySelectorAll('.time1');
  let conOne = document.querySelectorAll('.con1');
  // 
  let timeTwo = document.querySelectorAll('.time2');
  let conTwo = document.querySelectorAll('.con2');
  //
  let timeThree = document.querySelectorAll('.time3');
  let conThree = document.querySelectorAll('.con3');
  //
  let timeFore = document.querySelectorAll('.time4');
  let conFore = document.querySelectorAll('.con4');
  //
  let timeFive = document.querySelectorAll('.time5');
  let conFive = document.querySelectorAll('.con5');
  //
  let timeSix = document.querySelectorAll('.time6');
  let conSix = document.querySelectorAll('.con6');
  //
  let timeSeven = document.querySelectorAll('.time7');
  let conSeven = document.querySelectorAll('.con7');

  // console.log(timeline);

  if (this.innerWidth > 1023) {
    for (let i = 0; i < timeOne.length; i++) {
      if (value >= 4300) {
        timeOne[i].classList.add('on');
        conOne[i].classList.add('on');
      } else {
        timeOne[i].classList.remove('on');
        conOne[i].classList.remove('on');
      }
    }
  

    for (let i = 0; i < timeOne.length; i++) {
      if (value >= 4700) {
        timeTwo[i].classList.add('on');
        conTwo[i].classList.add('on');
      } else {
        timeTwo[i].classList.remove('on');
        conTwo[i].classList.remove('on');
      }
    }

 
    for (let i = 0; i < timeThree.length; i++) {
      if (value >= 5000) {
        timeThree[i].classList.add('on');
        conThree[i].classList.add('on');
      } else {
        timeThree[i].classList.remove('on');
        conThree[i].classList.remove('on');
      }
    }
    

    for (let i = 0; i < timeFore.length; i++) {
      if (value >= 5500) {
        timeFore[i].classList.add('on');
        conFore[i].classList.add('on');
      } else {
        timeFore[i].classList.remove('on');
        conFore[i].classList.remove('on');
      }
    }
  

    for (let i = 0; i < timeOne.length; i++) {

      if (value >= 5800) {
        timeFive[i].classList.add('on');
        conFive[i].classList.add('on');
      } else {
        timeFive[i].classList.remove('on');
        conFive[i].classList.remove('on');
      }
    }
  

    for (let i = 0; i < timeOne.length; i++) {
      if (value >= 6000) {
        timeSix[i].classList.add('on');
        conSix[i].classList.add('on');
      } else {
        timeSix[i].classList.remove('on');
        conSix[i].classList.remove('on');
      }
    }


    for (let i = 0; i < timeOne.length; i++) {
      if (value >= 6200) {
        timeSeven[i].classList.add('on');
        conSeven[i].classList.add('on');
      } else {
        timeSeven[i].classList.remove('on');
        conSeven[i].classList.remove('on');
      }
    }
  }
    

  // 여기부터 테블릿

  else if (this.innerWidth > 767) {
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 3800) {
        timeOne[i].classList.add('on');
        conOne[i].classList.add('on');
      } else {
        timeOne[i].classList.remove('on');
        conOne[i].classList.remove('on');
      }
    }
      
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 4100) {
        timeTwo[i].classList.add('on');
        conTwo[i].classList.add('on');
      } else {
        timeTwo[i].classList.remove('on');
        conTwo[i].classList.remove('on');
      }
    }
      
  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 4700) {
        timeThree[i].classList.add('on');
        conThree[i].classList.add('on');
      } else {
        timeThree[i].classList.remove('on');
        conThree[i].classList.remove('on');
      }
    }

  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 5000) {
        timeFore[i].classList.add('on');
        conFore[i].classList.add('on');
      } else {
        timeFore[i].classList.remove('on');
        conFore[i].classList.remove('on');
      }
    }
  
  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 5500) {
        timeFive[i].classList.add('on');
        conFive[i].classList.add('on');
      } else {
        timeFive[i].classList.remove('on');
        conFive[i].classList.remove('on');
      }
    }
    
  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 5700) {
        timeSix[i].classList.add('on');
        conSix[i].classList.add('on');
      } else {
        timeSix[i].classList.remove('on');
        conSix[i].classList.remove('on');
      }
    }
      
  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 6000) {
        timeSeven[i].classList.add('on');
        conSeven[i].classList.add('on');
      } else {
        timeSeven[i].classList.remove('on');
        conSeven[i].classList.remove('on');
      }
    }
  } 

  // 여기부터 모바일

  else if (this.innerWidth < 767) {
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 4000) {
        timeOne[i].classList.add('on');
        conOne[i].classList.add('on');
      } else {
        timeOne[i].classList.remove('on');
        conOne[i].classList.remove('on');
      }
    }
      
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 4200) {
        timeTwo[i].classList.add('on');
        conTwo[i].classList.add('on');
      } else {
        timeTwo[i].classList.remove('on');
        conTwo[i].classList.remove('on');
      }
    }
      
  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 4400) {
        timeThree[i].classList.add('on');
        conThree[i].classList.add('on');
      } else {
        timeThree[i].classList.remove('on');
        conThree[i].classList.remove('on');
      }
    }

  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 4600) {
        timeFore[i].classList.add('on');
        conFore[i].classList.add('on');
      } else {
        timeFore[i].classList.remove('on');
        conFore[i].classList.remove('on');
      }
    }
  
  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 4800) {
        timeFive[i].classList.add('on');
        conFive[i].classList.add('on');
      } else {
        timeFive[i].classList.remove('on');
        conFive[i].classList.remove('on');
      }
    }
    
  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 5000) {
        timeSix[i].classList.add('on');
        conSix[i].classList.add('on');
      } else {
        timeSix[i].classList.remove('on');
        conSix[i].classList.remove('on');
      }
    }
      
  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 5200) {
        timeSeven[i].classList.add('on');
        conSeven[i].classList.add('on');
      } else {
        timeSeven[i].classList.remove('on');
        conSeven[i].classList.remove('on');
      }
    }
  } 

});






// let gradient = document.querySelectorAll('.about_gradient');
// let animeOpacity = document.querySelectorAll('.about_opacity');

// let value = window.scrollY;

// gradient.forEach(function (gra) {
//   window.addEventListener('scroll', function () {

//     if (window.innerWidth > 1024) {
//       if (value > 700) {
//         gra.classList.add('active');
//       }
//       else {
//         gra.classList.remove('active');
//       }
//     }

//     if (window.innerWidth < 1024) {
//       if (value > 500) {
//         gra.classList.add('active');
//       }
//       else {
//         gra.classList.remove('active');
//       }
//     }
//   })
// })