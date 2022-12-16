if (window.location.pathname.includes("epizod")) {
  NextEpisode();
}
function NextEpisode() {
  var multiply = 0.935;
  const nextep_href = document.querySelector("div.gomb_kovetkezo > a");
  var nextep_button;
  var animtime = 15; // in sec

  var style = document.createElement("style");
  style.innerHTML = `
        #nextep_button {
            --state: running;
            position: absolute;
            display: none;
            right: 5%;
            bottom: 10%;
            z-index: 2;
            padding: 10px 25px;
            min-width: 200px;
            backdrop-filter: blur(10px);
            overflow: hidden;
            border-radius: 0.5rem;
            background-color: rgba(255, 255, 255, 0.5);
            color: #000!important;
            box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%), 0 12px 24px -4px rgb(0 0 0 / 12%);
        }
        #nextep_button::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background-color: #fff;
            z-index: -1;
            animation: nextep_anim ${animtime}s ease-out;
            animation-play-state: var(--state);
        }
        @keyframes nextep_anim {
            from {
                width: 0%;
            }
            to {
            width: 100%;
            }
        }
        `;
  document.head.appendChild(style); // create style tag in head

  const timer = setInterval(checkTime, 500);
  function checkTime() {
    if (!nextep_href) {
      clearInterval(timer);
      return;
    }
    var currentTime = Math.floor(player.currentTime);
    var duration = Math.floor(player.duration);
    if (currentTime >= Math.floor(duration * multiply)) {
      createButton();
      if (player.paused) {
        nextep_button.style.setProperty("--state", "paused");
      } else {
        nextep_button.style.setProperty("--state", "running");
      }
    }
    if (currentTime < Math.floor(duration * multiply)) {
      removeButton();
    }
  }
  function createButton() {
    var button = document.createElement("a");
    button.id = "nextep_button";
    button.href = nextep_href.href;
    button.innerHTML = "Következő rész";
    if (player.elements.wrapper.contains(nextep_button)) {
      return; // if have a button return from function
    }
    player.elements.wrapper.appendChild(button);
    nextep_button = document.getElementById("nextep_button"); // set the element to var
    $("#nextep_button").fadeIn();
    nextep_button.onanimationend = () => {
      window.location = nextep_href.href;
    };
  }
  function removeButton() {
    if (player.elements.wrapper.contains(nextep_button)) {
      $("#nextep_button").fadeOut("", () => {
        player.elements.wrapper.removeChild(nextep_button);
      });
    }
    return;
  }
  if (player.playing) {
    timer;
  }
}
