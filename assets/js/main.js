// 언어 별 디스플레이

window.onload = function () {
  //언어별 디스플레이

  let koBtn = document.querySelectorAll('.ko_btn');
  let enBtn = document.querySelectorAll('.en_btn');
  let koVer = document.querySelectorAll('.ko_version');
  let enVer = document.querySelectorAll('.en_version');


  // console.log(koBtn);
  // console.log(enBtn);
  // console.log(koVer);
  // console.log(enVer);

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
  // moKoBtn.addEventListener('click', function () {
  //   enVer.style.display = "none";
  //   koVer.style.display = "block";
  //   console.log(enVer);
  // })

  // moEnBtn.addEventListener('click', function () {
  //   koVer.style.display = "none";
  //   enVer.style.display = "block";
  // })


  //고스트메뉴

  let menuBtn = document.querySelector('.menu_btn');
  let ghostList = document.querySelector('.ghost_menu');
  let list = document.querySelectorAll('.menu_list');
  let subToggle = true;

  console.log(menuBtn);
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
