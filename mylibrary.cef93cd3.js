!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("ghnK3");var a=function(){return{modal:document.querySelector(".modal"),containerListRef:document.querySelector(".container__list"),modalCloseBtnRef:document.querySelector(".modal__close"),modalFilm:document.querySelector(".modal__film"),modalContainer:document.querySelector(".modal__conteiner"),watchedBthRef:document.querySelector(".js-btn-watched-render"),queueBtnRef:document.querySelector(".js-btn-queue-render"),emptyListContainer:document.querySelector(".js-empty-list-container")}},o=i("lHIzZ");function l(e){var t=e.id,n=e.genres,r=e.title,i=e.vote_average,a=e.release_date,o=e.poster_path,l=n.map((function(e){return e.name}));return l=l.length>2?l.slice(0,2).join(", ")+", Other":l.join(", "),'\n    <li class="film-card__item" data-id='.concat(t,'>\n      <img class="film-card__img"  src="https://image.tmdb.org/t/p/w500/').concat(o,' " alt="film poster"  />\n    <h2 class="film-card__title">').concat(r,'</h2>\n    <div class="film-card__flex">\n    <p class="film-card__flex__text">').concat(l,' |\n    </p>\n    <p class="film-card__flex__text">').concat(a.slice(0,-6),'</p>\n    <p class="film-card__flex__rating">').concat(i.toFixed(1),"</p>\n    </div>\n    </li>\n")}var c=i("iU1Pc"),d=(new(0,o.MovieAPI),"WATCHED");localStorage.getItem(d);var s=JSON.parse(localStorage.getItem(d));a().watchedBthRef.addEventListener("click",(function(){if(null===s||0===s.length)return c.Notify.warning('Please go to home page and add movie to "Watched" list'),a().emptyListContainer.classList.remove("is-hidden"),void(a().containerListRef.innerHTML="");a().emptyListContainer.classList.contains("is-hidden")||a().emptyListContainer.classList.add("is-hidden");a().containerListRef.innerHTML="";var e=s.map((function(e){return l(e)})).join("");a().containerListRef.insertAdjacentHTML("beforeend",e)}));o=i("lHIzZ"),c=i("iU1Pc"),new(0,o.MovieAPI);var u="QUEUE";localStorage.getItem(u);var m=JSON.parse(localStorage.getItem(u));a().queueBtnRef.addEventListener("click",(function(){if(null===m||0===m.length)return c.Notify.warning('Please go to home page and add movie to "Watched" list'),a().emptyListContainer.classList.remove("is-hidden"),void(a().containerListRef.innerHTML="");a().emptyListContainer.classList.contains("is-hidden")||a().emptyListContainer.classList.add("is-hidden");a().containerListRef.innerHTML="";var e=m.map((function(e){return l(e)})).join("");a().containerListRef.insertAdjacentHTML("beforeend",e)}));var f=i("8nrFW"),g=(o=i("lHIzZ"),i("k5SnF")),v=(c=i("iU1Pc"),i("l1RgP")),h=new(0,o.MovieAPI);function p(){a().modal.classList.add("is-hidden"),document.removeEventListener("keydown",L),a().modalContainer.removeEventListener("click",y)}function y(e){e.target===e.currentTarget&&(p(),(0,v.default)().html.style.overflow="visible")}function L(e){"Escape"===e.key&&(p(),(0,v.default)().html.style.overflow="visible")}a().containerListRef.addEventListener("click",(function(e){var t=e.target.closest(".film-card__item").dataset.id;if(e.target===e.currentTarget)return;a().modal.classList.remove("is-hidden"),document.addEventListener("keydown",L),a().modalContainer.addEventListener("click",y),h.getFilms(t).then((function(e){var t=(0,g.renderModalMarkup)(e);(0,v.default)().modal.style.backgroundImage="linear-gradient(to right, rgba(47, 48, 58, 0.9), rgba(47, 48, 58, 0.9)),\n\t\turl(https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path,")"),(0,v.default)().modal.style.backgroundSize="cover",(0,v.default)().html.style.overflow="hidden",a().modalFilm.innerHTML=t})).then((function(){document.querySelector(".js-btn-watched").addEventListener("click",R),document.querySelector(".js-btn-queue").addEventListener("click",q)})).catch((function(e){return console.log(e)})).finally((function(){(0,v.default)().loaderModal.classList.add("visually-hidden")}))})),a().modalCloseBtnRef.addEventListener("click",p);var _=[],S="WATCHED",w=[],b="QUEUE",R=function(t){var n=t.target.dataset.id,r=document.querySelector(".js-btn-watched");if(null!==localStorage.getItem(S)&&(_=e(f)(JSON.parse(localStorage.getItem(S)))),_.includes(n)){_=_.filter((function(e){return Number(e)!==n})),c.Notify.warning("Film Remove from watched");var i=_.indexOf(n);_.splice(i,1),r.textContent="Add to watched"}else _.push(n),c.Notify.success("Film add to watched"),r.textContent="Remove from watched";try{var a=JSON.stringify(_);localStorage.setItem(S,a)}catch(e){console.error("Set state error: ",e.message)}},q=function(t){var n=t.target.dataset.id;if(null!==localStorage.getItem(b)&&(w=e(f)(JSON.parse(localStorage.getItem(b)))),w.includes(n)){w=w.filter((function(e){return Number(e)!==n})),c.Notify.warning("Film Remove from queue");var r=w.indexOf(n);w.splice(r,1),t.target.textContent="Add to queue"}else w.push(n),c.Notify.success("Фільм додано"),t.target.textContent="Remove from queue";try{var i=JSON.stringify(w);localStorage.setItem(b,i)}catch(e){console.error("Set state error: ",e.message)}};i("23Ajj")}();
//# sourceMappingURL=mylibrary.cef93cd3.js.map
