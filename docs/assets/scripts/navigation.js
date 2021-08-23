(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const $header = document.querySelector(".header");

    $header.addEventListener("click", event => {
      const $burgerButton = document.querySelector(".hamburger");
      const $body = document.querySelector("body");
      const $navigation = document.querySelector(".header__nav");
      if (event.target.classList.contains("hamburger")
        || event.target.classList.contains("hamburger-inner")
        || event.target.classList.contains("hamburger-box")) {
        $burgerButton.classList.toggle("is-active");
        $body.classList.toggle("navigation-open");
        $navigation.classList.toggle("header__nav--is-active");
      } else {
        $burgerButton.classList.remove("is-active");
        $body.classList.remove("navigation-open");
        $navigation.classList.remove("header__nav--is-active");
      }
    })
  })
})();
