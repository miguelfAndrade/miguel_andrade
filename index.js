let aboutMeSection = document.getElementById('about-me');
let studiesSection = document.getElementById('studies');
let experienceSection = document.getElementById('experience');
let skillsSection = document.getElementById('skills');
let languagesSection = document.getElementById('languages');
let contactsSection = document.getElementById('contacts');

let aboutMeSectionList = document.getElementById('about-me-list');
let studiesSectionList = document.getElementById('studies-list');
let experienceSectionList = document.getElementById('experience-list');
let skillsSectionList = document.getElementById('skills-list');
let languagesSectionList = document.getElementById('languages-list');
let contactsSectionList = document.getElementById('contacts-list');

let menuList = document.getElementById('menu-list');
let menuListHeight = menuList.clientHeight;

let allSections = document.getElementsByClassName('section');
let allListElements = document.getElementsByClassName('list-element');

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function menuListCenterPosition(height) {
    let newPosY = (height/2) - (menuListHeight/2);
    menuList.style.top = newPosY + 'px';
}

function resetDisplaySections() {
    // console.log(allSections);
    for(i=0; i<allSections.length; i++) {
        allSections[i].style.display = 'none';
        allListElements[i].style.color = '#AAAAAA';
        allListElements[i].firstElementChild.style = "background-color: white;";
    }
}


window.onload = function() {
    aboutMeSection.style.display = 'inherit';
    aboutMeSectionList.style.color = '#5B5B5B';
    aboutMeSectionList.firstElementChild.style = "background-color: #AAAAAA;";
    menuListCenterPosition(window.innerHeight);
    for(i=0; i<allSections.length; i++) {
        document.getElementsByClassName('section')[i].style.height = window.innerHeight + 'px';
    }
    // console.log(window.innerHeight);
}

window.onresize = function() {
    menuListCenterPosition(window.innerHeight);
    // console.log(window.innerHeight);
};


aboutMeSectionList.onclick = () => {
    resetDisplaySections();
    aboutMeSection.style.display = 'inherit';
    aboutMeSectionList.style.color = '#5B5B5B';
    aboutMeSectionList.firstElementChild.style = "background-color: #AAAAAA;";
}

studiesSectionList.onclick = () => {
    resetDisplaySections();
    studiesSection.style.display = 'inherit';
    studiesSectionList.style.color = '#5B5B5B';
    studiesSectionList.firstElementChild.style = "background-color: #AAAAAA;";
}

experienceSectionList.onclick = () => {
    resetDisplaySections();
    experienceSection.style.display = 'inherit';
    experienceSectionList.style.color = '#5B5B5B';
    experienceSectionList.firstElementChild.style = "background-color: #AAAAAA;";
}

skillsSectionList.onclick = () => {
    resetDisplaySections();
    skillsSection.style.display = 'inherit';
    skillsSectionList.style.color = '#5B5B5B';
    skillsSectionList.firstElementChild.style = "background-color: #AAAAAA;";
}

languagesSectionList.onclick = () => {
    resetDisplaySections();
    languagesSection.style.display = 'inherit';
    languagesSectionList.style.color = '#5B5B5B';
    languagesSectionList.firstElementChild.style = "background-color: #AAAAAA;";
}

contactsSectionList.onclick = () => {
    resetDisplaySections();
    contactsSection.style.display = 'inherit';
    contactsSectionList.style.color = '#5B5B5B';
    contactsSectionList.firstElementChild.style = "background-color: #AAAAAA;";
}