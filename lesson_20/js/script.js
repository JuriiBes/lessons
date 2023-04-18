"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest(".header__burger")) {
        document.documentElement.classList.toggle("menu-open");
    }

    if (targetItem.closest(".right-side__button") || targetItem.closest(".right-side__search-close")) {
        document.documentElement.classList.toggle("search-open");
    }

    if (targetItem.closest(".title-after1")) {
        document.documentElement.classList.toggle("menu-column-open1");
    }

    if (targetItem.closest(".title-after2")) {
        document.documentElement.classList.toggle("menu-column-open2");
    }

    if (targetItem.closest(".title-after3")) {
        document.documentElement.classList.toggle("menu-column-open3");
    }

    if (targetItem.closest(".title-after4")) {
        document.documentElement.classList.toggle("menu-column-open4");
    }

    if (targetItem.closest(".catalog__categories")) {
        document.documentElement.classList.toggle("categories-open");
    }

}

