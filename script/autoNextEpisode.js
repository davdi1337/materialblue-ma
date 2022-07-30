var x = document.querySelector("#MagyarAnime > div > div.plyr__controls > div.plyr__controls__item.plyr__time--duration.plyr__time").innerText;
var y = document.querySelector("#MagyarAnime > div > div.plyr__controls > div.plyr__controls__item.plyr__time--current.plyr__time").innerText;
var currentTime_div = document.querySelector("#MagyarAnime > div > div.plyr__controls > div.plyr__controls__item.plyr__time--current.plyr__time");
var video_player = document.querySelector("#MagyarAnime > div > div.plyr__video-wrapper");
var button = document.querySelector("#MagyarAnime > div > button");
var nextEp = document.querySelector("body > div:nth-child(2) > section > div > div > div.col-lg-12 > div.anime__video__player > center > div:nth-child(1) > div.gomb_kovetkezo > a");
var epTime = parseInt(x.slice(0, 2) * 60) + parseInt(x.slice(-2));
var targetTime = epTime * 0.935; // 93,5% a rész teljes hosszából
var countdown = 25; // visszaszámláló ideje

const element = document.createElement("a");
element.innerHTML = `Következő rész (${countdown})`;
if (nextEp != null) {
  element.href = nextEp.href; // ha nincs következő rész ne csináljon gombot
}
element.classList.add("kovetkezo_ep", "gomb_kovetkezo");
element.style.color = "white";
element.style.zIndex = 10;
element.style.right = "5%";
element.style.bottom = "10%";
element.style.position = "absolute";
element.style.padding = "10px 25px";
element.style.minWidth = "250px";
element.style.display = "block";
element.style.transition = "opacity 1s";
element.style.opacity = 0;
element.style.boxShadow = "0 0 10px 0 rgb(0 0 0 / 20%), 0 12px 24px -4px rgb(0 0 0 / 12%)";

var timer = setInterval(function () {
  if (countdown <= 0) {
    clearInterval(timer);
    window.location = nextEp.href;
  } else {
    element.innerHTML = `Következő rész (${countdown})`;
  }
  if (document.querySelector("#MagyarAnime > div").classList.contains("plyr--paused")) {
    countdown; // ha megállítják a lejátszást megáll a számláló
  } else {
    countdown -= 1; // ha elindul a lejátszás elindul a számláló
  }
}, 1000);

function createButton() {
  video_player.appendChild(element);
  // timeout animation
  setTimeout(() => {
    element.style.opacity = 1;
  }, 500);
}

currentTime_div.addEventListener("DOMSubtreeModified", function () {
  var currentTime_mins = parseInt(currentTime_div.innerText.slice(0, 2) * 60);
  var currentTime_sec = parseInt(currentTime_div.innerText.slice(-2));
  var currentTime = currentTime_mins + currentTime_sec;
  var kovetkezo_ep_buttons = document.querySelectorAll(".kovetkezo_ep");

  if (currentTime >= targetTime) {
    // ne csináljon több gombot 1-nél
    if (kovetkezo_ep_buttons[0] === null && kovetkezo_ep_buttons.length >= 1) {
      return;
    } else {
      createButton(); // megcsinálja a gombot
    }
  } else if (currentTime <= targetTime) {
    countdown = 25; // visszaszámláló alaphelyzet
    if (kovetkezo_ep_buttons[0] !== null) {
      kovetkezo_ep_buttons[0].style.opacity = 0;
      video_player.removeChild(kovetkezo_ep_buttons[0]);
    } else {
      return;
    }
  }
});
