// 언어 별 디스플레이

window.onload = function () {

  //언어별 디스플레이

  // let koBtn = document.querySelector('.ko_btn');
  // let koVer = document.querySelector('.ko_version');
  // let enBtn = document.querySelector('.en_btn');
  // let enVer = document.querySelector('.en_version');

  // koBtn.addEventListener('click', function () {
  //   enVer.style.display = "none";
  //   koVer.style.display = "block";
  //   console.log(enVer);
  // })

  // enBtn.addEventListener('click', function () {
  //   koVer.style.display = "none";
  //   enVer.style.display = "block";
  // })

  //고스트메뉴

  let menuBtn = document.querySelector('.menu_btn');
  let ghostList = document.querySelector('.ghost_menu');
  let langBtn = document.querySelector('.lang_btn');
  // let list = document.querySelectorAll('.menu_list');
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

  for (let i = 0; i < langBtn.length; i++) {
    langBtn[i].addEventListener("click", function () {
      menuBtn.checked = false;
      ghostList.style.setProperty('height', '0px');
      subToggle = !subToggle;
    });
  };

}
