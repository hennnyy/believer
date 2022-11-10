// 언어 별 디스플레이

window.onload = function () {
  let langVer = document.querySelectorAll('.lang_ver');
  let langBtn = document.querySelectorAll('.lang_btn');
  let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

  for (var i = 0; i < langBtn.length; i++) {
    langBtn[i].addEventListener('click', function (e) {
      e.preventDefault();
      console.log('.lang_btn');
      for (var j = 0; j < langBtn.length; j++) {
        // 나머지 버튼 클래스 제거
        langBtn[j].classList.remove('on');

        // 나머지 컨텐츠 display:none 처리
        langVer[j].style.display = 'none';
      }

      // 버튼 관련 이벤트
      this.parentNode.classList.add('on');

      // 버튼 클릭시 컨텐츠 전환
      activeCont = this.getAttribute('href');
      document.querySelector(activeCont).style.display = 'block';
    });
  }


}
