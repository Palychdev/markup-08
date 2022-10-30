(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileMenuContainerRef = document.querySelector("[data-menu-container]");
  const mobileMenuAuthRef = document.querySelector("[data-menu-auth]");
  const mobileMenuSocialRef = document.querySelector("[data-menu-social]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    mobileMenuAuthRef.classList.toggle("is-open");
    mobileMenuContainerRef.classList.toggle("is-open");
    mobileMenuSocialRef.classList.toggle("is-open");
  });
})();