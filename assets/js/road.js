
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
      if (value >= 4600) {
        timeOne[i].classList.add('on');
        conOne[i].classList.add('on');
      } else {
        timeOne[i].classList.remove('on');
        conOne[i].classList.remove('on');
      }
    }
      
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 4800) {
        timeTwo[i].classList.add('on');
        conTwo[i].classList.add('on');
      } else {
        timeTwo[i].classList.remove('on');
        conTwo[i].classList.remove('on');
      }
    }
      
  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 5000) {
        timeThree[i].classList.add('on');
        conThree[i].classList.add('on');
      } else {
        timeThree[i].classList.remove('on');
        conThree[i].classList.remove('on');
      }
    }

  
    for (let i = 0; i < timeOne.length; i++){
      if (value >= 5200) {
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
      if (value >= 5800) {
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

});


