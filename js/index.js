let allSections = document.getElementsByClassName('section');
let allListElements = document.getElementsByClassName('list-element');

let birthDate = new Date("1996-01-18");
let ageText = document.getElementById('age');

let mainTitleHeight = document.getElementById('main-title').clientHeight;

let contactsIcons = document.getElementById('icons-list');

let contactIconsButton = document.getElementById('contacts-button');

let sectionDivision = 1/allSections.length;

let scrollVar;

let mobileWidth = 1100;

let showHideIcons = false;

let sectionCurrentlyActive = 'about-me';
let sectionLastActive = sectionCurrentlyActive;

window.onload = function() {
    ageText.innerHTML = calculateAge();
    document.body.style.setProperty('--body-height', ((allListElements.length * window.innerHeight) + 'px'));
    if(window.innerWidth <= mobileWidth) {
        resetDisplaySections('inherit');
        seeSocialsIcons();
    }
    else {
        sectionCurrentlyActive = 'about-me';
    }
    activateSection(sectionCurrentlyActive);
}

window.onresize = function() {
    seeSocialsIcons();
    activateSection(sectionCurrentlyActive);
    if(window.innerWidth <= mobileWidth) {
        resetDisplaySections('inherit');
    }
    else {
        showHideIcons = true;
    }
};

window.onscroll = function(event) {scrollDynamic(event)}

// Handles the scroll mechanism for the website
// The values are normalized to 1
// There is a variable that changes value when scrolling and if that number is within a certain range for the section, that section is showed
function scrollDynamic(event) {
    event.preventDefault();
    scrollVar = document.documentElement.scrollTop / (document.body.scrollHeight - window.innerHeight);
        
    if(window.innerWidth <= mobileWidth) 
    {
        resetDisplaySections('inherit');
    }
    else 
    {
        sectionLastActive = sectionCurrentlyActive;
        for (let i = 0; i < allSections.length; i++) {
            if(((i*sectionDivision) < scrollVar) && (scrollVar <= ((i+1)*sectionDivision))) {
                sectionCurrentlyActive = allSections.item(i).id;
                break;
            }
        }

        if(sectionCurrentlyActive !== sectionLastActive) {
            activateSection(sectionCurrentlyActive);
        }
    }
}

contactIconsButton.addEventListener('click', () => {
    showHideIcons = !showHideIcons;
    seeSocialsIcons();
})

// Adds or removes class names to the contacts icons div to show or hide the contact list in mobile view
function seeSocialsIcons() {
    if(showHideIcons) {
        contactsIcons.classList.remove("icon-list-hide");
        contactsIcons.classList.add("icon-list-show");
    }
    else {
        contactsIcons.classList.remove("icon-list-show");
        contactsIcons.classList.add("icon-list-hide");
    }
}

// Functions that handles the click in the section list
function sectionClick(id) {
    sectionLastActive = sectionCurrentlyActive;
    sectionCurrentlyActive = id;
    activateSection(sectionCurrentlyActive);
}

// Changes the appearence of the clicked section in the section list and shows the section in the website
// TODO - change the scroll value to the correspondent area for the selected section
function activateSection(sectionId) {
    resetDisplaySections('none');
    let elem = document.getElementById(sectionId);
    let elemList = document.getElementById(elem.id + '-list');

    elem.style.display = 'inherit';
    let sectionMarginTop = (window.innerHeight/2) - ((elem.clientHeight/2) + mainTitleHeight);
    if(sectionMarginTop >= 0) {
        elem.style.marginTop = sectionMarginTop + "px";
    }

    elem.classList.add("section-animation");

    elemList.classList.add("section-active");
    elemList.firstElementChild.classList.add("dot-active");
    // if(sectionId == 'about-me') {
    //     document.documentElement.scrollTop = 0;
    // }
    // else if(sectionId == 'experience') {
    //     document.documentElement.scrollTop = (sectionDivision)*(document.body.offsetHeight - window.innerHeight);
    // }
    // else if(sectionId == 'studies') {
    //     document.documentElement.scrollTop = (2*sectionDivision)*(document.body.offsetHeight - window.innerHeight);
    // }
    // else if(sectionId == 'skills') {
    //     document.documentElement.scrollTop = (3*sectionDivision)*(document.body.offsetHeight - window.innerHeight);
    // }
    // else if(sectionId == 'languages') {
    //     document.documentElement.scrollTop = (4*sectionDivision)*(document.body.offsetHeight - window.innerHeight);
    // }
    // else if(sectionId == 'personalProjects') {
    //     document.documentElement.scrollTop = (5*sectionDivision)*(document.body.offsetHeight - window.innerHeight);
    // }

    // console.log(scrollVar);
    // console.log(document.documentElement.scrollTop);
}

// It is used to reset the css classes when scrolling or clicking in a different section
function resetDisplaySections(value) {    
    for(i=0; i<allListElements.length; i++) {
        allSections[i].style.display = value;
        allSections[i].classList.remove("section-animation");
        allListElements[i].classList.remove("section-active");
        allListElements[i].firstElementChild.classList.remove("dot-active");
    }
}

// Function to show pop-up for additional content
function seeMoreInfo(idLinkMore, idLinkLess, idElem, showHide) {
    let elem = document.getElementById(idElem);
    let linkMore = document.getElementById(idLinkMore);
    let linkLess = document.getElementById(idLinkLess);
    if(showHide) {
        elem.style.display = 'initial';
        elem.classList.remove('hide-more-info-animation');
        elem.classList.add('show-more-info-animation');
        // link.innerHTML = 'Less information';
        linkMore.style.display = 'none';
        linkLess.style.display = 'initial';
    }
    else {
        elem.classList.remove('show-more-info-animation');
        elem.classList.remove('hide-more-info-animation');
        elem.style.display = 'none';
        // link.style.display = 'More information';
        linkMore.style.display = 'initial';
        linkLess.style.display = 'none';
    }
}

// Calculates my age with the birth month and current month into account
function calculateAge () {
    let todayDate = new Date();
    todayDate.toLocaleString("pt-PT");

    let years = (todayDate.getFullYear() - birthDate.getFullYear());
    if (todayDate.getMonth() < birthDate.getMonth() || 
        todayDate.getMonth() == birthDate.getMonth() && todayDate.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
}
