
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
    for (let i = 0; i < timeOne.length; i++)
    if (value >= 600 && value <= 700) {
      timeTwo[i].classList.add('on');
      conTwo[i].classList.add('on');
    } else {
      timeTwo[i].classList.remove('on');
      conTwo[i].classList.remove('on');
    }
    
    // 세번째스크롤
    for (let i = 0; i < timeOne.length; i++)
    if (value >= 1100 && value <= 1200) {
      timeThree[i].classList.add('on');
      conThree[i].classList.add('on');
    } else {
      timeThree[i].classList.remove('on');
      conThree[i].classList.remove('on');
    }
    
    //오른쪽 스크롤 영역
    for (let i = 0; i < timeOne.length; i++)
    if (value >= 50 && value <= 200) {
      timeFore[i].classList.add('on');
      conFore[i].classList.add('on');
    } else {
      timeFore[i].classList.remove('on');
      conFore[i].classList.remove('on');
    }
  
    // 두번째스크롤
    for (let i = 0; i < timeOne.length; i++)
    if (value >= 400 && value <= 500) {
      timeFive[i].classList.add('on');
      conFive[i].classList.add('on');
    } else {
      timeFive[i].classList.remove('on');
      conFive[i].classList.remove('on');
    }
  
    //세번째스크롤
    for (let i = 0; i < timeOne.length; i++)
    if (value >= 700 && value <= 900) {
      timeSix[i].classList.add('on');
      conSix[i].classList.add('on');
    } else {
      timeSix[i].classList.remove('on');
      conSix[i].classList.remove('on');
    }
  
    //네번째스크롤
    for (let i = 0; i < timeOne.length; i++)
    if (value >= 1300 && value <= 1500) {
      timeSeven[i].classList.add('on');
      conSeven[i].classList.add('on');
    } else {
      timeSeven[i].classList.remove('on');
      conSeven[i].classList.remove('on');
    }
  }

  // 여기부터 테블릿

  else if (this.innerWidth > 767) {
    for (let i = 0; i < timeOne.length; i++)
    if (value >= 50 && value <= 100) {
      timeOne[i].classList.add('on');
      conOne[i].classList.add('on');
    } else {
      timeOne[i].classList.remove('on');
      conOne[i].classList.remove('on');
    }
  }

  for (let i = 0; i < timeOne.length; i++)
    if (value >= 180 && value <= 250) {
      timeTwo[i].classList.add('on');
      conTwo[i].classList.add('on');
    } else {
      timeTwo[i].classList.remove('on');
      conTwo[i].classList.remove('on');
    }
  
  for (let i = 0; i < timeOne.length; i++)
    if (value >= 300 && value <= 500) {
      timeThree[i].classList.add('on');
      conThree[i].classList.add('on');
    } else {
      timeThree[i].classList.remove('on');
      conThree[i].classList.remove('on');
    }
  
  for (let i = 0; i < timeOne.length; i++)
    if (value >= 700 && value <= 800) {
      timeFore[i].classList.add('on');
      conFore[i].classList.add('on');
    } else {
      timeFore[i].classList.remove('on');
      conFore[i].classList.remove('on');
    }
  
  for (let i = 0; i < timeOne.length; i++)
    if (value >= 850 && value <= 900) {
      timeFive[i].classList.add('on');
      conFive[i].classList.add('on');
    } else {
      timeFive[i].classList.remove('on');
      conFive[i].classList.remove('on');
    }
  
  for (let i = 0; i < timeOne.length; i++)
    if (value >= 950 && value <= 1100) {
      timeSix[i].classList.add('on');
      conSix[i].classList.add('on');
    } else {
      timeSix[i].classList.remove('on');
      conSix[i].classList.remove('on');
    }
  
  for (let i = 0; i < timeOne.length; i++)
    if (value >= 1200 && value <= 1300) {
      timeSeven[i].classList.add('on');
      conSeven[i].classList.add('on');
    } else {
      timeSeven[i].classList.remove('on');
      conSeven[i].classList.remove('on');
    }
  
  
})

