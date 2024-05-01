let allSections = document.getElementsByClassName('section');
let allListElements = document.getElementsByClassName('list-element');

let birthDate = new Date("1996-01-18");
let ageText = document.getElementById('age');

let mainTitleHeight = document.getElementById('main-title').clientHeight;

let contactsIcons = document.getElementById('icons-list');

let contactIconsButton = document.getElementById('contacts-button');

let moreInfoSkill = document.getElementById('more-info-skill');
let closeMoreInfoSkill = document.getElementById("more-info-close-skill");
let linkMoreInfoSkill = document.getElementById("more-info-link-skill");
let showMoreInfoSkill = false;

let aboutMeSection = document.getElementById("about-me");
let profissionalProjectsSection = document.getElementById("profissionalProjects");
let experienceSection = document.getElementById("experience");
let skillsSection = document.getElementById("skills");
let languagesSection = document.getElementById("languages");
let personalProjectsSection = document.getElementById("personalProjects");

let aboutMeHeight = aboutMeSection.clientHeight;
let profissionalProjectsHeight = profissionalProjectsSection.clientHeight;
let experienceHeight = experienceSection.clientHeight;
let skillsHeight = skillsSection.clientHeight;
let languagesHeight = languagesSection.clientHeight;
let personalProjectsHeight = personalProjectsSection.clientHeight;

let allSectionsHeights = aboutMeHeight + profissionalProjectsHeight + experienceHeight + skillsHeight + languagesHeight + personalProjectsHeight;

let sectionDivision = 1/allSections.length;

let scrollVar;

let mobileWidth = 1100;

let showHideIcons = false;

let sectionCurrentlyActive = 'about-me';
let sectionLastActive = sectionCurrentlyActive;

window.onload = function() {    
    document.body.style.setProperty('--body-height', ((allListElements.length * window.innerHeight) + 'px'));
    if(window.innerWidth <= mobileWidth) {
        resetDisplaySections('inherit');
        seeSocialsIcons();
    }
    else {
        sectionCurrentlyActive = 'about-me';
    }
    activateSection(sectionCurrentlyActive);
    ageText.innerHTML = calculateAge();
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

function scrollDynamic(event) {
    event.preventDefault();
    scrollVar = document.documentElement.scrollTop / (document.body.offsetHeight - window.innerHeight);
        
    if(window.innerWidth <= mobileWidth) 
    {
        resetDisplaySections('inherit');
    }
    else 
    {
        sectionLastActive = sectionCurrentlyActive;
        for (let i = 0; i < allSections.length; i++) {
            if((i*sectionDivision) < scrollVar <= ((i+1)*sectionDivision)) {
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
    // console.log(showHideIcons);
    seeSocialsIcons();
})

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

function sectionClick(id) {
    sectionLastActive = sectionCurrentlyActive;
    sectionCurrentlyActive = id;
    activateSection(sectionCurrentlyActive);
}

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

//

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
