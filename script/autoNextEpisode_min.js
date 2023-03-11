function NextEpisode(){let e=document.querySelector("div.gomb_kovetkezo > a");var t,o=document.createElement("style");o.innerHTML=`
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
            animation: nextep_anim 15s ease-out;
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
        `,document.head.appendChild(o);let n=setInterval(function o(){if(!e){clearInterval(n),console.log("%cNincs el\xe9rhető k\xf6vetkező r\xe9sz.","font-size: 16px; font-weight: bold");return}var r,i=Math.floor(player.currentTime),a=Math.floor(player.duration);i>=Math.floor(.935*a)&&((r=document.createElement("a")).id="nextep_button",r.href=e.href,r.innerHTML="K\xf6vetkező r\xe9sz",!player.elements.wrapper.contains(t)&&(player.elements.wrapper.appendChild(r),t=document.getElementById("nextep_button"),$("#nextep_button").fadeIn(),t.onanimationend=()=>{window.location=e.href}),player.paused?t.style.setProperty("--state","paused"):t.style.setProperty("--state","running")),i<Math.floor(.935*a)&&player.elements.wrapper.contains(t)&&$("#nextep_button").fadeOut("",()=>{player.elements.wrapper.removeChild(t)})},500);player.playing}function logStart(){console.log("%cAutoNextEpisode v1.0 - by: davdi1337","font-size: 18px; font-weight: bold"),console.log("%cA script sikeresen elindult!","font-size: 18px; font-weight: bold; color: rgb(32 209 95)")}function logError(){console.log("%cAutoNextEpisode v1.0 - by: davdi1337","font-size: 18px; font-weight: bold"),console.log("%cA script nem indult el, mivel nem vagy egyetlen anim\xe9hez tartoz\xf3 r\xe9sz oldal\xe1n sem.","font-size: 18px; font-weight: bold; color: rgb(209 32 32)")}window.location.pathname.includes("resz")?(NextEpisode(),logStart()):logError();
