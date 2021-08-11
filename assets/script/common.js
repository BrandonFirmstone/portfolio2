
let menuButton = document.getElementById("navigation-toggle");
let closeMenuButton = document.getElementById("overlay-close");

let modal = document.getElementById("modal-container");
let modalOpen = document.getElementById("attributions-modal");
let modalClose = document.getElementById("credits-close");


/**
 * Opens the navigation menu by setting the width to 100%
 */
function openNavigationMenu(){
    document.getElementById("overlay").style.width = "100%";
}

/**
 * Closes the navigation menu by giving it a width of 0
 */
function closeNavigationMenu(){
    document.getElementById("overlay").style.width = "0";
}

/**
 * Sets the credit modal's display to block, revealing it.
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
 * Link above helped with making modal. 
 */
function showCredits(){
    modal.style.display = "block";
}

/**
 * Hides the credit modal by setting the display to none
 */
function hideCredits(){
    modal.style.display = "none";
}


/**
 * Checks for the window to be fully loaded before adding the event listeners
 */
window.addEventListener('DOMContentLoaded', (event) => {
    modalOpen.addEventListener('click', showCredits);
    modalClose.addEventListener('click', hideCredits);
    closeMenuButton.addEventListener('click', closeNavigationMenu);
    menuButton.addEventListener('click', openNavigationMenu);
});


/**
 * If scroll history is true it will set it to manual, if not it will scroll to the top of the page on refresh
 * Source: https://stackoverflow.com/questions/3664381/force-page-scroll-position-to-top-at-page-refresh-in-html
 */
 if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}