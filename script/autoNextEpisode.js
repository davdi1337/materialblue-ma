if (window.location.pathname.includes("epizod")) {
  // 1500ms timeout hogy biztosan lekérje a jó időt
  setTimeout(() => {
    AutoNextEp();
  }, 1500);
}

function AutoNextEp() {
  const player = document.querySelector(
    "#MagyarAnime > div > div.plyr__video-wrapper"
  );
  const currentTime_el = document.querySelector(
    "#MagyarAnime > div > div.plyr__controls > div.plyr__controls__item.plyr__time--current.plyr__time"
  );
  const epDuration_el = document.querySelector(
    "#MagyarAnime > div > div.plyr__controls > div.plyr__controls__item.plyr__time--duration.plyr__time"
  );
  const nextEpisode = document.querySelector(
    "body > div:nth-child(2) > section > div > div > div.col-lg-12 > div.anime__video__player > center > div:nth-child(1) > div.gomb_kovetkezo > a"
  );

  var epDuration_converted;
  var currentTime_converted;
  if (player === null) {
    return; // ha nincs lejátszó ne csináljon semmit
  } else {
    currentTime_converted =
      parseInt(currentTime_el.innerHTML.slice(0, 2) * 60) +
      parseInt(currentTime_el.innerHTML.slice(-2));
    epDuration_converted =
      parseInt(epDuration_el.innerHTML.slice(0, 2) * 60) +
      parseInt(epDuration_el.innerHTML.slice(-2));
  }

  const epTarget = epDuration_converted * 0.935; // honnan kezdődjön
  var countdown = 25; // számláló

  const nextEp_button = document.createElement("a");
  nextEp_button.classList.add("gomb_kovetkezo", "nextep_button");
  // nextEp_button.innerHTML = `Következő rész (${countdown})`; // RÉGI, ANIMÁCIÓ NÉLKÜL
  nextEp_button.innerHTML = `Következő rész (${countdown})<div class="loading-anim" style="position: absolute; left: 0; top: 0; width: calc(100% - ${
    countdown * 4
  }%); height: 100%; z-index: -1; background-color: rgba(255,255,255,0.8);"></div>`;
  nextEp_button.style.position = "absolute";
  nextEp_button.style.right = "5%";
  nextEp_button.style.bottom = "10%";
  nextEp_button.style.zIndex = 2;
  nextEp_button.href = nextEpisode?.href;
  nextEp_button.style.padding = "10px 25px";
  nextEp_button.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  nextEp_button.style.color = "#000";
  nextEp_button.style.backdropFilter = "blur(5px)";
  nextEp_button.style.borderRadius = "6px";
  nextEp_button.style.overflow = "hidden";
  nextEp_button.style.minWidth = "250px";
  nextEp_button.style.boxShadow =
    "0 0 10px 0 rgb(0 0 0 / 20%), 0 12px 24px -4px rgb(0 0 0 / 12%)";

  async function createButton() {
    if (player === null) {
      return; // ne csináljon gombot
    } else if (nextEpisode !== null) {
      player.appendChild(nextEp_button);
      $(".nextep_button").fadeIn() // jQuery animation in
    }
  }
  async function removeButton() {
    if (player === null) {
      return; // ne csináljon semmit
    } else if (document.querySelector(".nextep_button") !== null) {
      nextEp_button.parentNode.removeChild(nextEp_button);
      countdown = 25; // számláló reset
    }
  }
  currentTime_el.addEventListener("DOMSubtreeModified", function () {
    currentTime_converted =
      parseInt(currentTime_el.innerHTML.slice(0, 2) * 60) +
      parseInt(currentTime_el.innerHTML.slice(-2)); // jelenlegi idő frissítése automatikusan
    if (currentTime_converted > epTarget) {
      createButton();
    } else if (currentTime_converted < epTarget) {
      $(".nextep_button").fadeOut() // jQuery animation out
      setTimeout(() => {
        removeButton(); // timeout removebutton
      }, 500)
    }
  });
  if (nextEpisode !== null) {
    var timer = setInterval(function () {
      if (currentTime_converted > epTarget) {
        if (countdown <= -1) {
          clearInterval(timer);
          window.location = nextEpisode.href;
        } else {
          // nextEp_button.innerHTML = `Következő rész (${countdown})`; // RÉGI, ANIMÁCIÓ NÉLKÜL
          nextEp_button.innerHTML = `Következő rész (${countdown})<div class="loading-anim" style="position: absolute; left: 0; top: 0; width: calc(100% - ${
            countdown * 4
          }%); height: 100%; z-index: -1; background-color: rgba(255,255,255,0.8);"></div>`;
        }
        if (
          document
            .querySelector("#MagyarAnime > div")
            .classList.contains("plyr--paused")
        ) {
          countdown; // ha megáll a lejátszás megáll a számláló
        } else {
          countdown -= 1; // ha elindul a lejátszás elindul a számláló
        }
      } else {
        return;
      }
    }, 1000);
  }
}
