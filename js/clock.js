const clockContainer = document.querySelector(".js-clock"),
  clockTitle = document.querySelector(".js-clock h1");

// 시간 가져오는 합수
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  clockTitle.innerText = `${
    hours < 10 ? `0${hours}` : hours
  }:${
    min < 10 ? `0${min}`  : min
  }:${
    sec < 10 ? `0${sec}` : sec
  }`;
}

// 초기화
function init() {
  getTime();
  setInterval(getTime, 1000);  // 함수의 괄호를 생략할 것!
}

init();
