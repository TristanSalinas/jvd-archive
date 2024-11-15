var mixer = mixitup(".galery");

addEventListener("DOMContentLoaded", function () {
  let burgerButtonDOM = document.querySelector(".burger-button");
  let hiddenMenuDOM = document.querySelector(".footer__hiddenMenu");

  burgerButtonDOM.addEventListener("click", function () {
    // Basculer la classe "show" sur l'élément du menu caché
    hiddenMenuDOM.classList.toggle("show");
  });
});
