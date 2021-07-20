/*

    INFORMATION REGARDING COMMENTS
    Each line of comments either annotates the line of code below itself or is used
    for ease of reading. Comments are used to seperate each part of the program into
    sections. For example, a contact page may have the contact form seperate from the
    contact details. They may also be used to essentially draw a line between sections
    to visually seperate them so that it is easier to read

*/

let menuButton = document.getElementsByClassName("navigation-toggle");
menuButton.addEventListener('click', openNavigationMenu);

let closeMenuButton = document.getElementsByClassName("overlay-close");
closeMenuButton.addEventListener('click', closeNavigationMenu);

function openNavigationMenu(){
    document.getElementByClass("overlay").style.width = "100%";
}

function closeNavigationMenu(){
    document.getElementByClass("overlay").style.width = "0";
}