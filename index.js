let allSections = document.getElementsByClassName('section');
let allListElements = document.getElementsByClassName('list-element');

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

let scrollVar = 0;

function activateSection(sectionId) {
    resetDisplaySections('none');
    elem = document.getElementById(sectionId);
    elemList = document.getElementById(sectionId + '-list');
    elem.style.display = 'inherit';
    elem.classList.add("section-animation");
    elemList.classList.add("section-active");
    elemList.firstElementChild.classList.add("dot-active");
}

function resetDisplaySections(value) {
    for(i=0; i<allListElements.length; i++) {
        allSections[i].style.display = value;
        allSections[i].classList.remove("section-animation");
        allListElements[i].classList.remove("section-active");
        allListElements[i].firstElementChild.classList.remove("dot-active");
    }
}


window.onload = function() {
    document.body.style.setProperty('--body-height', ((allListElements.length * window.innerHeight) + 'px'));
    if(window.innerWidth <= 900) {
        resetDisplaySections('inherit');
    }
    else {
        activateSection('about-me');
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

window.onscroll = function() {
    
    scrollVar = document.documentElement.scrollTop / (document.body.offsetHeight - window.innerHeight);
    
    console.log("Scroll Value: " + scrollVar);
    console.log("Section Division Value: " + sectionDivision);
    if(window.innerWidth <= 900) 
    {
        resetDisplaySections('inherit');
    }
    else 
    {
        if(0 < scrollVar <= sectionDivision)
        {
            activateSection('about-me');
            console.log("About Me!");
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

}

function cursorClicks(id) {
    activateSection(id);
}

