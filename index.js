let allSections = document.getElementsByClassName('section');
let allListElements = document.getElementsByClassName('list-element');
let allSectionTitles = document.getElementsByClassName('section-title');;

let aboutMeSection = document.getElementById("about-me");
let experienceSection = document.getElementById("experience");
let skillsSection = document.getElementById("skills");
let languagesSection = document.getElementById("languages");
let projectsSection = document.getElementById("projects");

let aboutMeHeight = aboutMeSection.clientHeight;
let experienceHeight = experienceSection.clientHeight;
let skillsHeight = skillsSection.clientHeight;
let languagesHeight = languagesSection.clientHeight;
let projectsHeight = projectsSection.clientHeight;

let allSectionsHeights = aboutMeHeight + experienceHeight + skillsHeight + languagesHeight + projectsHeight;

let sectionDivision = 1/allSections.length;

let scrollVar;

let mobileWidth = 1100;

let hideIcons = true;

window.onload = function() {
    allSectionTitles = document.getElementsByClassName('section-title');
    // animationSocials();
    document.body.style.setProperty('--body-height', ((allListElements.length * window.innerHeight) + 'px'));
    if(window.innerWidth <= mobileWidth) {
        resetDisplaySections('inherit');
        hideSocialsIcons('icons-list');
    }
    else {
        activateSection('about-me');
    }
}

window.onresize = function() {
    // animationSocials();
    if(window.innerWidth <= mobileWidth) {
        resetDisplaySections('inherit');
        hideSocialsIcons('icons-list');
    }
    else {
        activateSection('about-me');
        // hideIcons = false;
    }
};

window.onscroll = function(event) {
    event.preventDefault();
    scrollVar = document.documentElement.scrollTop / (document.body.offsetHeight - window.innerHeight);
        
    if(window.innerWidth <= mobileWidth) 
    {
        resetDisplaySections('inherit');
    }
    else 
    {
        if(0 < scrollVar <= sectionDivision)
        {
            activateSection('about-me');
        }
        else if(sectionDivision < scrollVar <= (2*sectionDivision))
        {
            activateSection('experience');
        }
        else if((2*sectionDivision) < scrollVar <= (3*sectionDivision))
        {
            activateSection('studies');
        }
        else if((3*sectionDivision) < scrollVar <= (4*sectionDivision))
        {
            activateSection('skills');
        }
        else if((4*sectionDivision) < scrollVar <= (5*sectionDivision))
        {
            activateSection('languages');
        }
        else if((5*sectionDivision) < scrollVar <= (6*sectionDivision))
        {
            activateSection('projects');
        }
    }

    // console.log(allSectionTitles[0].offsetHeight);
    // for(i=0; i<allSectionTitles.length; i++) {
    //     if(document.body.offsetHeight >= allSectionTitles[i].offsetHeight) {
    //         allSectionTitles[i].classList.add('shadow-section-title');
    //     }
    //     else {
    //         allSectionTitles[i].classList.remove('shadow-section-title');
    //     }
    // }
}

function cursorClicks(id) {
    activateSection(id);
}

function hideSocialsIcons(iconsListId) {
    // animationSocials();
    let iconsList = document.getElementById(iconsListId);
    if(hideIcons) {
        iconsList.classList.remove("icon-list-show");
        iconsList.classList.add("icon-list-hide");
    }
    else {
        iconsList.classList.remove("icon-list-hide");
        // iconsList.classList.remove("animation-icons-hide");
        iconsList.classList.add("icon-list-show");
        // iconsList.classList.add("animation-icons-show");
    }
    hideIcons = !hideIcons;
}


function activateSection(sectionId) {
    resetDisplaySections('none');
    let elem = document.getElementById(sectionId);
    let elemList = document.getElementById(elem.id + '-list');
    elem.style.display = 'inherit';
    elem.classList.add("section-animation");
    elemList.classList.add("section-active");
    elemList.firstElementChild.classList.add("dot-active");
    // if(sectionId == 'about-me') {
    //     document.documentElement.scrollTop = 0;
    //     console.log("Entrou!!!");
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
    // else if(sectionId == 'projects') {
    //     document.documentElement.scrollTop = (5*sectionDivision)*(document.body.offsetHeight - window.innerHeight);
    // }

    // console.log(scrollVar);
    // console.log(document.documentElement.scrollTop);
}

function resetDisplaySections(value) {
    for(i=0; i<allListElements.length; i++) {
        allSections[i].style.display = value;
        allSections[i].classList.remove("section-animation");
        allListElements[i].classList.remove("section-active");
        allListElements[i].firstElementChild.classList.remove("dot-active");
    }
}

// function animationSocials() {
//     let windowHeight = window.innerHeight;
//     let socialsHeight = document.getElementById('contacts-icons').clientHeight;
//     document.body.style.setProperty('--social-animations-from', (windowHeight + socialsHeight) + 'px');
//     document.body.style.setProperty('--social-animations-to', (windowHeight - socialsHeight) + 'px');
// }

