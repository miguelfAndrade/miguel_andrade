let allSections = document.getElementsByClassName('section');
let allListElements = document.getElementsByClassName('list-element');

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// let sectionClicked = "about-me";
let c = 0;

function activateSection(sectionId) {
    resetDisplaySections('none');
    elem = document.getElementById(sectionId);
    elemList = document.getElementById(sectionId + '-list');
    elem.style.display = 'inherit';
    elemList.classList.add("section-active");
    elemList.firstElementChild.classList.add("dot-active");
}

function resetDisplaySections(value) {
    for(i=0; i<allListElements.length; i++) {
        // allSections[i].style.display = value;
        allListElements[i].classList.remove("section-active");
        allListElements[i].firstElementChild.classList.remove("dot-active");
    }
}


window.onload = function() {
    activateSection('about-me');
    for(i=0; i<allSections.length; i++) {
        document.getElementsByClassName('section')[i].style.height = window.innerHeight + 'px';
    }
}

window.onresize = function() {
    if(window.innerWidth <= 900) {
        resetDisplaySections('inherit');
    }
    else {
        activateSection('about-me');
    }
};

// window.onscroll = function() {
//     console.log(allSections[0].clientHeight);
//     // let topScroll = document.documentElement.scrollTop;
//     // if(0 <= topScroll < allSections[0].clientHeight)
//     // {
//     //     window.scroll({top: 0, behavior: "smooth"});
//     // }
//     // else if(allSections[0].clientHeight <= topScroll < allSections[1].clientHeight)
//     // {
//     //     window.scroll({top: allSections[0].clientHeight, behavior: "smooth"});
//     // }
// }

function cursorClicks(id) {
    activateSection(id);
}

// function cursorEnters(id) {
//     if(sectionClicked !== id) {
//         elemList = document.getElementById(id + '-list');
//         elemList.style.color = '#5B5B5B';
//         elemList.firstElementChild.style = "background-color: #AAAAAA;";
//     }
// }

// function cursorLeaves(id) {
//     if(sectionClicked !== id) {
//         elemList = document.getElementById(id + '-list');
//         elemList.style.color = '#AAAAAA';
//         elemList.firstElementChild.style = "background-color: white;";
//     }
// }
