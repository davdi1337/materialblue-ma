window.location.pathname.includes("epizod") &&
  setTimeout(() => {
    AutoNextEp();
  }, 1500);
function AutoNextEp() {
  let f = document.querySelector(
      "#MagyarAnime > div > div.plyr__video-wrapper"
    ),
    b = document.querySelector(
      "#MagyarAnime > div > div.plyr__controls > div.plyr__controls__item.plyr__time--current.plyr__time"
    ),
    c = document.querySelector(
      "#MagyarAnime > div > div.plyr__controls > div.plyr__controls__item.plyr__time--duration.plyr__time"
    ),
    d = document.querySelector(
      "body > div:nth-child(2) > section > div > div > div.col-lg-12 > div.anime__video__player > center > div:nth-child(1) > div.gomb_kovetkezo > a"
    );
  if (null === f) return;
  (i =
    parseInt(60 * b.innerHTML.slice(0, 2)) + parseInt(b.innerHTML.slice(-2))),
    (h =
      parseInt(60 * c.innerHTML.slice(0, 2)) + parseInt(c.innerHTML.slice(-2)));
  let g = 0.935 * h;
  var h,
    i,
    e = 25;
  let a = document.createElement("a");
  async function j() {
    null !== f &&
      null !== d &&
      (f.appendChild(a), $(".nextep_button").fadeIn());
  }
  async function k() {
    null !== f &&
      null !== document.querySelector(".nextep_button") &&
      (a.parentNode.removeChild(a), (e = 25));
  }
  if (
    (a.classList.add("gomb_kovetkezo", "nextep_button"),
    (a.innerHTML = `K\xf6vetkező r\xe9sz (${e})<div class="loading-anim" style="position: absolute; left: 0; top: 0; width: calc(100% - ${
      4 * e
    }%); height: 100%; z-index: -1; background-color: rgba(255,255,255,0.8);"></div>`),
    (a.style.position = "absolute"),
    (a.style.right = "5%"),
    (a.style.bottom = "10%"),
    (a.style.zIndex = 2),
    (a.href = d?.href),
    (a.style.padding = "10px 25px"),
    (a.style.backgroundColor = "rgba(255, 255, 255, 0.5)"),
    (a.style.color = "#000"),
    (a.style.backdropFilter = "blur(5px)"),
    (a.style.borderRadius = "6px"),
    (a.style.overflow = "hidden"),
    (a.style.minWidth = "250px"),
    (a.style.boxShadow =
      "0 0 10px 0 rgb(0 0 0 / 20%), 0 12px 24px -4px rgb(0 0 0 / 12%)"),
    b.addEventListener("DOMSubtreeModified", function () {
      (i =
        parseInt(60 * b.innerHTML.slice(0, 2)) +
        parseInt(b.innerHTML.slice(-2))) > g
        ? j()
        : i < g && k();
    }),
    null !== d)
  )
    var l = setInterval(function () {
      i > g &&
        (e <= -1
          ? (clearInterval(l), (window.location = d.href))
          : (a.innerHTML = `K\xf6vetkező r\xe9sz (${e})<div class="loading-anim" style="position: absolute; left: 0; top: 0; width: calc(100% - ${
              4 * e
            }%); height: 100%; z-index: -1; background-color: rgba(255,255,255,0.8);"></div>`),
        document
          .querySelector("#MagyarAnime > div")
          .classList.contains("plyr--paused") || (e -= 1));
    }, 1e3);
}
