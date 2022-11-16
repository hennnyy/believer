
window.addEventListener("scroll", function (){
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
  //왼쪽 스크롤 영역
  if (this.innerWidth > 1023) {
    for (let i = 0; i < timeOne.length; i++) {
      if (value >= 200 && value <= 300) {
        timeOne[i].classList.add('on');
        conOne[i].classList.add('on');
      } else {
        timeOne[i].classList.remove('on');
        conOne[i].classList.remove('on');
      }
    }
  
    // 두번째스크롤
    if (value >= 600 && value <= 700) {
      timeTwo.classList.add('on');
      conTwo.classList.add('on');
    } else {
      timeTwo.classList.remove('on');
      conTwo.classList.remove('on');
    }
    
    // 세번째스크롤
    if (value >= 1100 && value <= 1200) {
      timeThree.classList.add('on');
      conThree.classList.add('on');
    } else {
      timeThree.classList.remove('on');
      conThree.classList.remove('on');
    }
    
    //오른쪽 스크롤 영역
    if (value >= 50 && value <= 200) {
      timeFore.classList.add('on');
      conFore.classList.add('on');
    } else {
      timeFore.classList.remove('on');
      conFore.classList.remove('on');
    }
  
    // 두번째스크롤
    if (value >= 400 && value <= 500) {
      timeFive.classList.add('on');
      conFive.classList.add('on');
    } else {
      timeFive.classList.remove('on');
      conFive.classList.remove('on');
    }
  
    //세번째스크롤
    if (value >= 700 && value <= 900) {
      timeSix.classList.add('on');
      conSix.classList.add('on');
    } else {
      timeSix.classList.remove('on');
      conSix.classList.remove('on');
    }
  
    //네번째스크롤
    if (value >= 1300 && value <= 1500) {
      timeSeven.classList.add('on');
      conSeven.classList.add('on');
    } else {
      timeSeven.classList.remove('on');
      conSeven.classList.remove('on');
    }
  }

  else if (this.innerWidth > 767) {
    if (value >= 50 && value <= 100) {
      timeOne.classList.add('on');
      conOne.classList.add('on');
    } else {
      timeOne.classList.remove('on');
      conOne.classList.remove('on');
    }
  
  }

  
})

