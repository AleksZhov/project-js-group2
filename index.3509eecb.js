!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("ghnK3",(function(e,n){var r=i("dyT35"),o=i("cZ9fw"),a=i("kabT2"),c=i("1KnmS"),l=i("epP3A"),s=i("bjiGR"),u=i("bocik"),d=i("4nqoS"),f=i("19eBY");var h=[{nameDev:"Oлександр",surnameDev:"Жовтий",photo:"".concat(t(o)),roleDev:"Team-lead",gitDev:"https://github.com/AleksZhov"},{nameDev:"Юрій",surnameDev:"Риков",photo:"".concat(t(a)),roleDev:"Scrum-master",gitDev:"https://github.com/Yurii-Rykov"},{nameDev:"Сергій",surnameDev:"Маслов",photo:"".concat(t(c)),roleDev:"Front-end Developer",gitDev:"https://github.com/gsmoff"},{nameDev:"Олег",surnameDev:"Гнатик",photo:"".concat(t(l)),roleDev:"Front-end Developer",gitDev:"https://github.com/yavenir"},{nameDev:"YODA",surnameDev:"Master",photo:"".concat(t(u)),roleDev:"Front-end Developer",gitDev:"https://github.com/"},{nameDev:"Володимир",surnameDev:"Бондаренко",photo:"".concat(t(s)),roleDev:"Front-end Developer",gitDev:"https://github.com/qweeqer"}].map((function(e){var n=e.surnameDev,r=e.nameDev,o=e.photo,i=e.roleDev,a=e.gitDev;return'\n<li class="team-card">\n    <img src="'.concat(o,'" alt="').concat(r,'" class="team-image">\n    <p class="team-name">').concat(r,"<br>").concat(n,'</p>\n    <p class="team-role">').concat(i,'</p>\n    <a href="').concat(a,'" target="_blank" class="team-git"><svg class="git__icon" width="24" height="24">\n      <use href="').concat(t(d),'#icon-github-logo"></use>\n    </svg></a>\n</li>')})).join(""),m="<p class=\"team-title\">JAVA YODA <span class=\"yoda\"></span></p>\n <button type='button' class='modal-window__close-btn' data-modal-close>\n    <span class='material-icons'>close</span>\n  </button>\n<ul class=\"team-wrapper\">\n".concat(h,"\n</ul>\n</div>"),g=document.querySelector(".developers");console.log(g),g.addEventListener("click",(function(e){e.preventDefault(),f.default.create(document.getElementById("canvas"),{resize:!0,useWorker:!0})({particleCount:300,spread:200,zIndex:2021}),v.show();var t=document.querySelector("body");t.classList.add("bg-scrolling-element-when-modal-open");var n=document.querySelector("[data-modal-close]");n.addEventListener("click",(function e(r){v.close(),t.classList.remove("bg-scrolling-element-when-modal-open"),n.removeEventListener("click",e)})),window.addEventListener("keydown",(function e(n){"Escape"===n.key&&(v.close(),t.classList.remove("bg-scrolling-element-when-modal-open"),window.removeEventListener("keydown",e))}));var r=document.querySelector(".basicLightbox");r.addEventListener("click",(function e(n){n.target===r&&(v.close(),t.classList.remove("bg-scrolling-element-when-modal-open"),r.removeEventListener("click",e))}))}));var v=r.create(m)})),i.register("dyT35",(function(e,t){e.exports=function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var l=void 0;if(!c&&l)return l(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,(function(e){return o(t[a][1][e]||e)}),u,u.exports,e,t,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=o(i,"IMG"),c=o(i,"VIDEO"),l=o(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var c={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:a};return c}},{}]},{},[1])(1)})),i.register("cZ9fw",(function(e,t){e.exports=i("aNJCr").getBundleURL("dxYGr")+i("iE7OH").resolve("fpenM")})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i.register("kabT2",(function(e,t){e.exports=i("aNJCr").getBundleURL("dxYGr")+i("iE7OH").resolve("btXeb")})),i.register("1KnmS",(function(e,t){e.exports=i("aNJCr").getBundleURL("dxYGr")+i("iE7OH").resolve("jcOhI")})),i.register("epP3A",(function(e,t){e.exports=i("aNJCr").getBundleURL("dxYGr")+i("iE7OH").resolve("l7plt")})),i.register("bjiGR",(function(e,t){e.exports=i("aNJCr").getBundleURL("dxYGr")+i("iE7OH").resolve("3lk1K")})),i.register("bocik",(function(e,t){e.exports=i("aNJCr").getBundleURL("dxYGr")+i("iE7OH").resolve("gpaH0")})),i.register("4nqoS",(function(e,t){e.exports=i("aNJCr").getBundleURL("dxYGr")+i("iE7OH").resolve("ee16w")})),i.register("19eBY",(function(t,n){e(t.exports,"default",(function(){return o}));var r={};!function e(t,n,r,o){var i=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function a(){}function c(e){var r=n.exports.Promise,o=void 0!==r?r:t.Promise;return"function"==typeof o?new o(e):(e(a,a),null)}var l,s,u,d,f,h,m,g,v,p=(u=Math.floor(1e3/60),d={},f=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(l=function(e){var t=Math.random();return d[t]=requestAnimationFrame((function n(r){f===r||f+u-1<r?(f=r,delete d[t],e()):d[t]=requestAnimationFrame(n)})),t},s=function(e){d[e]&&cancelAnimationFrame(d[e])}):(l=function(e){return setTimeout(e,u)},s=function(e){return clearTimeout(e)}),{frame:l,cancel:s}),b=(g={},function(){if(h)return h;if(!r&&i){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{h=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,r,o){if(m)return t(n,null),m;var i=Math.random().toString(36).slice(2);return m=c((function(r){function a(t){t.data.callback===i&&(delete g[i],e.removeEventListener("message",a),m=null,o(),r())}e.addEventListener("message",a),t(n,i),g[i]=a.bind(null,{data:{callback:i}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),g)g[t](),delete g[t]}}(h)}return h}),w={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:w[t],n)}function x(e){return e<0?0:Math.floor(e)}function E(e){return parseInt(e,16)}function M(e){return e.map(L)}function L(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:E(t.substring(0,2)),g:E(t.substring(2,4)),b:E(t.substring(4,6))}}function S(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function C(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function D(e,t,n,i,a){var l,s,u=t.slice(),d=e.getContext("2d"),f=c((function(t){function c(){l=s=null,d.clearRect(0,0,i.width,i.height),a(),t()}l=p.frame((function t(){!r||i.width===o.width&&i.height===o.height||(i.width=e.width=o.width,i.height=e.height=o.height),i.width||i.height||(n(e),i.width=e.width,i.height=e.height),d.clearRect(0,0,i.width,i.height),u=u.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,o=t.y+t.random*t.tiltSin,i=t.wobbleX+t.random*t.tiltCos,a=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(a-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,o,i,a,c,l){e.save(),e.translate(t,n),e.rotate(i),e.scale(r,o),e.arc(0,0,1,a,c,l),e.restore()}(e,t.x,t.y,Math.abs(i-r)*t.ovalScalar,Math.abs(a-o)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(o)),e.lineTo(Math.floor(i),Math.floor(a)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(d,e)})),u.length?l=p.frame(t):c()})),s=c}));return{addFettis:function(e){return u=u.concat(e),f},canvas:e,promise:f,reset:function(){l&&p.cancel(l),s&&s()}}}function k(e,n){var r,o=!e,a=!!y(n||{},"resize"),l=y(n,"disableForReducedMotion",Boolean),s=i&&!!y(n||{},"useWorker")?b():null,u=o?S:C,d=!(!e||!s)&&!!e.__confetti_initialized,f="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function h(t,n,o){for(var i,a,c,l,s,d=y(t,"particleCount",x),f=y(t,"angle",Number),h=y(t,"spread",Number),m=y(t,"startVelocity",Number),g=y(t,"decay",Number),v=y(t,"gravity",Number),p=y(t,"drift",Number),b=y(t,"colors",M),w=y(t,"ticks",Number),E=y(t,"shapes"),L=y(t,"scalar"),S=function(e){var t=y(e,"origin",Object);return t.x=y(t,"x",Number),t.y=y(t,"y",Number),t}(t),C=d,k=[],_=e.width*S.x,O=e.height*S.y;C--;)k.push((i={x:_,y:O,angle:f,spread:h,startVelocity:m,color:b[C%b.length],shape:E[(l=0,s=E.length,Math.floor(Math.random()*(s-l))+l)],ticks:w,decay:g,gravity:v,drift:p,scalar:L},a=void 0,c=void 0,a=i.angle*(Math.PI/180),c=i.spread*(Math.PI/180),{x:i.x,y:i.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*i.startVelocity+Math.random()*i.startVelocity,angle2D:-a+(.5*c-Math.random()*c),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:i.color,shape:i.shape,tick:0,totalTicks:i.ticks,decay:i.decay,drift:i.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*i.gravity,ovalScalar:.6,scalar:i.scalar}));return r?r.addFettis(k):(r=D(e,k,u,n,o)).promise}function m(n){var i=l||y(n,"disableForReducedMotion",Boolean),m=y(n,"zIndex",Number);if(i&&f)return c((function(e){e()}));o&&r?e=r.canvas:o&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(m),document.body.appendChild(e)),a&&!d&&u(e);var g={width:e.width,height:e.height};function v(){if(s){var t={getBoundingClientRect:function(){if(!o)return e.getBoundingClientRect()}};return u(t),void s.postMessage({resize:{width:t.width,height:t.height}})}g.width=g.height=null}function p(){r=null,a&&t.removeEventListener("resize",v),o&&e&&(document.body.removeChild(e),e=null,d=!1)}return s&&!d&&s.init(e),d=!0,s&&(e.__confetti_initialized=!0),a&&t.addEventListener("resize",v,!1),s?s.fire(n,g,p):h(n,g,p)}return m.reset=function(){s&&s.reset(),r&&r.reset()},m}function _(){return v||(v=k(null,{useWorker:!0,resize:!0})),v}n.exports=function(){return _().apply(this,arguments)},n.exports.reset=function(){_().reset()},n.exports.create=k}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),r,!1);var o=r.exports;r.exports.create})),i("iE7OH").register(JSON.parse('{"dxYGr":"index.3509eecb.js","5UbS1":"index.0ba44550.css","fpenM":"oleksandr.918ce8c3.jpg","btXeb":"yurii.f7974647.jpg","jcOhI":"sergii.c6fbafba.jpg","l7plt":"oleg.b0e85bab.jpg","3lk1K":"volodymyr.12ca3665.jpg","gpaH0":"yoda.0f232cb6.jpg","ee16w":"sprite.46b8323e.svg"}'))}();
//# sourceMappingURL=index.3509eecb.js.map