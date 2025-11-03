let experienceSection = document.getElementById("experience");

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

let scrollOffset = 50; // offset value for the scroll when the section is clicked

let slideIndex = 1;
let startX = 0;

window.onload = function() {
    fetch('../data.json').then(response => response.json())
    .then(data => {
        fillInfoExperience(data);
        showSlides(slideIndex);
    });
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
    mobileSlides();
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

// Function that handles the click in the section list
// Also handles the scroll for when the section is clicked
function sectionClick(id) {
    sectionLastActive = sectionCurrentlyActive;
    sectionCurrentlyActive = id;
    activateSection(sectionCurrentlyActive);
    if (id !== "") {
        for (let i = 0; i < allSections.length; i++) {
            if(allSections.item(i).id == id) {
                if(i == 0) document.documentElement.scrollTop = 0;
                else if(i == (allSections.length-1)) document.documentElement.scrollTop = (allSections.length*sectionDivision)*(document.body.offsetHeight - window.innerHeight);
                else {
                    document.documentElement.scrollTop = (i*sectionDivision)*(document.body.offsetHeight - window.innerHeight) + scrollOffset;
                    break;
                }
            }
        }
    }
}

// Changes the appearence of the clicked section in the section list and shows the section in the website
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
}

// It is used to reset the css classes when scrolling or clicking in a different section
function resetDisplaySections(value) {    
    for(let i=0; i<allListElements.length; i++) {
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

showSlides(slideIndex);

function mobileSlides() {
    if(typeof experienceSection !== 'undefined') {
    let slides = document.getElementsByClassName("slide-exp");
    experienceSection.addEventListener('touchstart', event => {
            startX = event.touches[0].clientX;
        });
    
        experienceSection.addEventListener('touchend', event => {
            const endX = event.changedTouches[0].clientX;
            if (startX - endX > 50 && slideIndex < slides.length) {
                plusSlides(1)
            } else if (endX - startX > 50 && slideIndex > 0) {
                plusSlides(-1)
            }
        });
    }
};

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-exp");
  let dots = document.getElementsByClassName("dot-section");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (typeof slides[slideIndex-1] !== 'undefined') {
    slides[slideIndex-1].style.display = "block";
  }
  if (typeof dots[slideIndex-1] !== 'undefined') {
    dots[slideIndex-1].className += " active";
  }
}

function fillInfoExperience(jsonData) {
    let slidesContainer = "";
    let allInfo = "";
    let allMoreInfo = "";
    let slideNumber = 0;
    jsonData.experience.forEach((job, index) => {
        const techList = job.techStack.join(", ");
        const links = job.usefulLinks.map(link =>
            `<a class="isolated-link" href="${link.url}" target="_blank">${link.label}</a>`
        ).join(" ");

        const detailsList = job.details.map(detail => `<li>${detail}</li>`).join("");

        const infoSection = `
            <div class="info-section">
                <h3>${job.companyName}</h3>
                <h4>${job.role}</h4>
                ${job.details.length ? `
                <div class="proj-detail-mobile">
                <ul class="proj-info">
                    ${detailsList}
                </ul>
                </div>` : ""}
                <h5>${links} ${techList}</h5>
                <p>${job.datePeriod.start} - ${job.datePeriod.end}</p>
            </div>
        `;
        const moreInfo = `
            <div class="more-info-section">
                <h3>${job.companyName}</h3>
                <ul class="proj-info">
                    ${detailsList}
                </ul>
            </div>
        `;

        allInfo += infoSection;
        allMoreInfo += moreInfo;

        if(index % 2 == 1) {
            slideNumber++;
            slidesContainer += `
                <div class="slide-exp page-sweep" style="display: block;">
                    ${allInfo}
                    <div class="mobile-info">
                        <a id="slide-${slideNumber}-link" class="more-info-link" onclick="seeMoreInfo('slide-${slideNumber}-link', 'slide-${slideNumber}-link-2', 'slide-${slideNumber}-info', true)">More information</a>
                        <a id="slide-${slideNumber}-link-2" class="more-info-link more-info-link-2" onclick="seeMoreInfo('slide-${slideNumber}-link', 'slide-${slideNumber}-link-2', 'slide-${slideNumber}-info', false)">Less information</a>
                        <div id="slide-${slideNumber}-info" class="more-info">
                            <a id="more-info-close" class="more-info-close" onclick="seeMoreInfo('slide-${slideNumber}-link', 'slide-${slideNumber}-link-2', 'slide-${slideNumber}-info', false)">&times;</a>
                            ${allMoreInfo}
                        </div>
                    </div>
                </div>
                `;
            allInfo = "";
            allMoreInfo = "";
        }
        else if(index == jsonData.experience.length - 1) {
            slideNumber++;
            slidesContainer += `
                <div class="slide-exp page-sweep" style="display: block;">
                    ${allInfo}
                    <div class="mobile-info">
                        <a id="slide-${slideNumber}-link" class="more-info-link" onclick="seeMoreInfo('slide-${slideNumber}-link', 'slide-${slideNumber}-link-2', 'slide-${slideNumber}-info', true)">More information</a>
                        <a id="slide-${slideNumber}-link-2" class="more-info-link more-info-link-2" onclick="seeMoreInfo('slide-${slideNumber}-link', 'slide-${slideNumber}-link-2', 'slide-${slideNumber}-info', false)">Less information</a>
                        <div id="slide-${slideNumber}-info" class="more-info">
                            <a id="more-info-close" class="more-info-close" onclick="seeMoreInfo('slide-${slideNumber}-link', 'slide-${slideNumber}-link-2', 'slide-${slideNumber}-info', false)">&times;</a>
                            ${allMoreInfo}
                        </div>
                    </div>
                </div>
                `;
            allInfo = "";
            allMoreInfo = "";
        }
        
    });

    experienceSection.innerHTML += slidesContainer + `
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
        <br/>
        <div class="bullets-dot">`;
    const dotNumber = Math.ceil(jsonData.experience.length/2);
    let i = 0;
    while(i < dotNumber) {
        experienceSection.innerHTML += `<span class="dot-section" onclick="currentSlide(${i+1})"></span>`
        i++;
    };
    experienceSection.innerHTML += `</div>`;
}
