function addEvent(o,e,t){o.addEventListener?o.addEventListener(e,t,!1):o.attachEvent("on"+e,t)}function showPopup(o){var e;window.localStorage.getItem("visit")?(e=window.localStorage.getItem("visit"),console.log(e),e<=3&&(body.classList.add("scroll-hide"),overlay.classList.add("overlay--show"),o.classList.add("popup--show"),window.localStorage.setItem("visit",e+1))):(body.classList.add("scroll-hide"),overlay.classList.add("overlay--show"),o.classList.add("popup--show"),e=1,window.localStorage.setItem("visit",e))}var popup=document.querySelector(".popup"),body=document.querySelector("body"),popupClose=popup.querySelector(".popup__btn-close"),overlay=document.querySelector(".overlay"),inputName=document.getElementById("contact-name"),inputEmail=document.getElementById("contact-email");addEvent(popupClose,"click",function(o){o.preventDefault(),popup.classList.contains("popup--show")&&(popup.classList.remove("popup--show"),overlay.classList.remove("overlay--show"),body.classList.remove("scroll-hide"))}),addEvent(overlay,"click",function(o){o.preventDefault(),popup.classList.contains("popup--show")&&popup.classList.remove("popup--show"),overlay.classList.remove("overlay--show"),body.classList.remove("scroll-hide")}),addEvent(window,"keydown",function(o){27==o.keyCode&&popup.classList.contains("popup--show")&&(popupLogin.classList.remove("popup--show"),overlay.classList.remove("popup--show"),body.classList.remove("scroll-hide"))}),inputName.oninvalid=function(o){o.target.setCustomValidity("The username length shouldn’t be more than 15 characters.")},inputEmail.oninvalid=function(o){o.target.setCustomValidity("Email must be in the following order: characters@characters.domain")},setTimeout(showPopup(popup),5e3);