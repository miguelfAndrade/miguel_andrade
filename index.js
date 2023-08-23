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

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function menuListCenterPosition(height) {
    let newPosY = (height/2) - (menuListHeight/2);
    menuList.style.top = newPosY + 'px';
}

function resetDisplaySections() {
    console.log(allSections);
    for(i=0; i<allSections.length; i++) {
        allSections[i].style.display = 'none';
    }
}


window.onload = function() {
    aboutMeSection.style.display = 'inherit';
    menuListCenterPosition(window.innerHeight);
    document.getElementsByClassName('section')[0].style.height = window.innerHeight + 'px';
    // console.log(window.innerHeight);
}

window.onresize = function() {
    menuListCenterPosition(window.innerHeight);
    // console.log(window.innerHeight);
};


aboutMeSectionList.onclick = () => {
    resetDisplaySections();
    aboutMeSection.style.display = 'inherit';
}

studiesSectionList.onclick = () => {
    resetDisplaySections();
    studiesSection.style.display = 'inherit';
}

experienceSectionList.onclick = () => {
    resetDisplaySections();
    experienceSection.style.display = 'inherit';
}

skillsSectionList.onclick = () => {
    resetDisplaySections();
    skillsSection.style.display = 'inherit';
}

languagesSectionList.onclick = () => {
    resetDisplaySections();
    languagesSection.style.display = 'inherit';
}

contactsSectionList.onclick = () => {
    resetDisplaySections();
    contactsSection.style.display = 'inherit';
}