window.location.pathname.includes("epizod") &&
  setTimeout(() => {
    AutoNextEp();
  }, 1500);
function AutoNextEp() {
  let e = document.querySelector(
      "#MagyarAnime > div > div.plyr__video-wrapper"
    ),
    t = document.querySelector(
      "#MagyarAnime > div > div.plyr__controls > div.plyr__controls__item.plyr__time--current.plyr__time"
    ),
    i = document.querySelector(
      "#MagyarAnime > div > div.plyr__controls > div.plyr__controls__item.plyr__time--duration.plyr__time"
    ),
    n = document.querySelector(
      "body > div:nth-child(2) > section > div > div > div.col-lg-12 > div.anime__video__player > center > div:nth-child(1) > div.gomb_kovetkezo > a"
    ),
    l = document.querySelector(
      "#MagyarAnime > div > div.plyr__controls > button:nth-child(11)"
    ),
    r = document.createElement("button"),
    o = document.querySelector("#MagyarAnime > div > div.plyr__controls");
  if (
    (r.classList.add("plyr__controls__item", "plyr__control"),
    (r.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Time</title><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z"/></svg>
`),
    null === e)
  )
    return;
  (d =
    parseInt(60 * t.innerHTML.slice(0, 2)) + parseInt(t.innerHTML.slice(-2))),
    (a =
      parseInt(60 * i.innerHTML.slice(0, 2)) + parseInt(i.innerHTML.slice(-2))),
    o.insertBefore(r, l);
  let s = !0;
  r.addEventListener("click", function (e) {
    (s = !s)
      ? (e.target.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Time</title><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z"/></svg>')
      : (e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Time</title><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg>    
    `);
  });
  let _ = 0.935 * a;
  var a,
    d,
    c = 25;
  let p = document.createElement("a");
  async function v() {
    null !== e &&
      null !== n &&
      (e.appendChild(p), $(".nextep_button").fadeIn());
  }
  async function y() {
    null !== e &&
      null !== document.querySelector(".nextep_button") &&
      (p.parentNode.removeChild(p), (c = 25));
  }
  if (
    (p.classList.add("gomb_kovetkezo", "nextep_button"),
    (p.innerHTML = `K\xf6vetkező r\xe9sz (${c})<div class="loading-anim" style="position: absolute; left: 0; top: 0; width: calc(100% - ${
      4 * c
    }%); height: 100%; z-index: -1; background-color: rgba(255,255,255,0.8);"></div>`),
    (p.style.position = "absolute"),
    (p.style.right = "5%"),
    (p.style.bottom = "10%"),
    (p.style.zIndex = 2),
    (p.href = n?.href),
    (p.style.padding = "10px 25px"),
    (p.style.backgroundColor = "rgba(255, 255, 255, 0.5)"),
    (p.style.color = "#000"),
    (p.style.backdropFilter = "blur(5px)"),
    (p.style.borderRadius = "6px"),
    (p.style.overflow = "hidden"),
    (p.style.minWidth = "250px"),
    (p.style.boxShadow =
      "0 0 10px 0 rgb(0 0 0 / 20%), 0 12px 24px -4px rgb(0 0 0 / 12%)"),
    t.addEventListener("DOMSubtreeModified", function () {
      (d =
        parseInt(60 * t.innerHTML.slice(0, 2)) +
        parseInt(t.innerHTML.slice(-2))) > _
        ? v()
        : d < _ && y();
    }),
    null !== n)
  )
    var u = setInterval(function () {
      d > _ &&
        (c <= -1
          ? (clearInterval(u), (window.location = n.href))
          : (p.innerHTML = `K\xf6vetkező r\xe9sz (${c})<div class="loading-anim" style="position: absolute; left: 0; top: 0; width: calc(100% - ${
              4 * c
            }%); height: 100%; z-index: -1; background-color: rgba(255,255,255,0.8);"></div>`),
        document
          .querySelector("#MagyarAnime > div")
          .classList.contains("plyr--paused") ||
          !s ||
          (c -= 1));
    }, 1e3);
}
