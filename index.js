let allSections = document.getElementsByClassName('section');
let allListElements = document.getElementsByClassName('list-element');

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let sectionClicked = "about-me";


function resetDisplaySections(value) {
    for(i=0; i<allSections.length; i++) {
        allSections[i].style.display = value;
        allListElements[i].style.color = '#AAAAAA';
        allListElements[i].firstElementChild.style = "background-color: white;";
    }
}


window.onload = function() {
    allSections[0].style.display = 'inherit';
    allListElements[0].style.color = '#5B5B5B';
    allListElements[0].firstElementChild.style = "background-color: #AAAAAA;";
    for(i=0; i<allSections.length; i++) {
        document.getElementsByClassName('section')[i].style.height = window.innerHeight + 'px';
    }
}

window.onresize = function() {
    if(window.innerWidth <= 900) {
        resetDisplaySections('inherit');
    }
    else {
        resetDisplaySections('none');
        allSections[0].style.display = 'inherit';
        allListElements[0].style.color = '#5B5B5B';
        allListElements[0].firstElementChild.style = "background-color: #AAAAAA;";
    }
};

function cursorClicks(id) {
    sectionClicked = id;
    resetDisplaySections('none');
    elem = document.getElementById(id);
    elemList = document.getElementById(id + '-list');
    elem.style.display = 'inherit';
    elemList.style.color = '#5B5B5B';
    elemList.firstElementChild.style = "background-color: #AAAAAA;";
}

function cursorEnters(id) {
    if(sectionClicked !== id) {
        elemList = document.getElementById(id + '-list');
        elemList.style.color = '#5B5B5B';
        elemList.firstElementChild.style = "background-color: #AAAAAA;";
    }
}

function cursorLeaves(id) {
    if(sectionClicked !== id) {
        elemList = document.getElementById(id + '-list');
        elemList.style.color = '#AAAAAA';
        elemList.firstElementChild.style = "background-color: white;";
    }
}
