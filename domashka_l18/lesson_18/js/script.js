"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest(".header__menu-icon")) {
        document.documentElement.classList.toggle("menu-open");
    }
}