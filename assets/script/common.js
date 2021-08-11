

let menuButton = document.getElementById("navigation-toggle");
menuButton.addEventListener('click', openNavigationMenu);

let closeMenuButton = document.getElementById("overlay-close");
closeMenuButton.addEventListener('click', closeNavigationMenu);

function openNavigationMenu(){
    document.getElementById("overlay").style.width = "100%";
    console.log("openNavigationMenu ran");
}

function closeNavigationMenu(){
    document.getElementById("overlay").style.width = "0";
    console.log("closeNavigationMenu ran");
}

/* https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html */
/**
 * If scroll history is true it will set it to manual, if not it will scroll to the top of the page on refresh
 */
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

let modal = document.getElementById("modal-container");
let modalOpen = document.getElementById("attributions-modal");
let modalClose = document.getElementById("credits-close");

function showCredits(){
    modal.style.display = "block";
}

function hideCredits(){
    modal.style.display = "none";
}

window.addEventListener('DOMContentLoaded', (event) => {
    modalOpen.addEventListener('click', showCredits);
    modalClose.addEventListener('click', hideCredits);
});