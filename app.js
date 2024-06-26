let servicesHomeGrid = document.querySelector(".is--bordered");
let serviesHomeBox = document.querySelector(".div-block-4");
let servicesHomeImgs = document.querySelectorAll(".services-img");
let servicesHomeContainer = document.querySelector(
    ".is--services-flex"
);

let prevScroll = 0;
//helper function
function li(a, b, n) {
    return (1 - n) * a + n * b;
}

let servicesImgProps = {
    width: 15,
};

function isVisible(ele) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
        (top > 0 || bottom > 0) &&
        top < vHeight
    );
}

let middleImg;
servicesHomeImgs.forEach((img) => {
    if (img.classList.contains("is--middle")) {
        middleImg = img;
    }
});

let middleImgTransform = 7;
let scrollYDiff = 0;
let baseFontSize = window
    .getComputedStyle(
        document.querySelector(".services-img .services-link__header"),
        null
    )
    .getPropertyValue("font-size");

document.addEventListener("scroll", () => {
    if (window.innerWidth > 991) {
        if (isVisible(servicesHomeGrid)) {
            if (middleImg) {
                middleImgTransform = Math.min(scrollY / 100, 7);
                servicesHomeImgs[0].style.transform = `translate(0, -${middleImgTransform}vh)`;
                servicesHomeImgs[2].style.transform = `translate(0, -${middleImgTransform}vh)`;

                if (scrollY < prevScroll) {
                    servicesHomeImgs.forEach((images) => {
                        if (!images.classList.contains('finished')) {
                            images.querySelector(".services-link__header").style.transform =
                                "translate(80px, 50%)rotate(-90deg)";
                            images.querySelector(".services-link__header").style.opacity = "0";
                            images.querySelector(".services-link__content").style.opacity = "0";
                        }
                    })
                }

                if (middleImgTransform === 7) {
                    if (scrollYDiff === 0) {
                        scrollYDiff = scrollY;
                    } else {
                        servicesImgProps.width = window.innerWidth > 900 ? (scrollY - scrollYDiff) / 8 : (scrollY - scrollYDiff) / 6;
                        servicesHomeImgs.forEach((img) => {
                            img.querySelector(".services-link__header").style.transitionDelay = '0.5s';
                            if (!img.classList.contains("finished")) {
                                img.style.width = `${Math.max(
                                    Math.min(servicesImgProps.width, 31),
                                    15
                                )}%`;
                            }
                        });

                        if (Math.max(Math.min(servicesImgProps.width, 31), 15) === 31) {
                            servicesHomeImgs.forEach((img) => {
                                if (!img.classList.contains("finished")) {
                                    img.classList.add("finished");
                                    img.querySelector(".services-link__header").style.transform =
                                        "translate(0px, 50%)rotate(-90deg)";
                                    img.querySelector(".services-link__header").style.opacity = "1";
                                }
                            });
                        } else {
                            servicesHomeImgs.forEach((img) => {
                                if (img.classList.contains("finished")) {
                                    img.classList.remove("finished");
                                }
                            });
                        }
                    }
                }
            }
        }
        prevScroll = scrollY
    }
});

servicesHomeImgs.forEach((img) => {
    img.addEventListener("mousemove", () => {
        if (window.innerWidth > 991) {
            if (img.classList.contains("finished")) {
                servicesHomeImgs.forEach((images) => {
                    images.querySelector(".services-link__header").style.transitionDelay = '0s';
                    if (images != img) {
                        images.style.width = "12%";
                        images.querySelector(".services-link__header").style.fontSize = window.innerWidth <= 478 ? "16px" : "30px";
                        images.querySelector(".services-link__content").style.opacity = "0";
                        images.querySelector(".services-link__header").style.transform =
                            "translate(0px, 50%)rotate(-90deg)";
                        images.querySelector(".services-link__header").style.opacity = "1";
                    } else {
                        images.style.width = "69%";
                        images.querySelector(".services-link__header").style.transform =
                            "translate(80px, 50%)rotate(-90deg)";
                        images.querySelector(".services-link__header").style.opacity = "0";
                        images.querySelector(".services-link__content").style.opacity = "1";
                    }
                });
            }
        }
    });
});

servicesHomeContainer.addEventListener("mouseleave", () => {
    if (window.innerWidth > 991) {
        servicesHomeImgs.forEach((img) => {
            if (img.classList.contains("finished")) {
                img.querySelector(".services-link__header").style.transitionDelay = '0s';
                img.style.width = `31%`;
                img.querySelector(".services-link__header").style.opacity = "1";
                img.querySelector(".services-link__header").style.transform =
                    "translate(0px, 50%)rotate(-90deg)";
                img.querySelector(".services-link__content").style.opacity = "0";
                img.querySelector(".services-link__header").style.fontSize = baseFontSize;
            }
        });
    }
});




let modalBg = document.querySelector(".modal-wrap");
let modaBlackBox = document.querySelector(".modal-bg");
let modalContainer = document.querySelector(".modal-menu-container");
let menuTxt = document.querySelector(".is--menu-button");
let modalCloseBtn = document.querySelector(".modal-close");
let listItems = document.querySelectorAll(".modal-menu-item__link");
let modalBtnContainer = document.querySelector(".modal-buttons-container");
let modalContainerTimeOut;
let modalContainerTimeOutList;

const modalStateHandler = (state, isMobile) => {
    switch (state) {
        case "open":
            modalBg.style.display = "flex";
            modalContainerTimeOut = setTimeout(() => {
                if (isMobile) {

                    if (window.innerWidth <= 568) {
                        modalContainer.style.height = window.innerWidth <= 499 ? "520px" : "85vw";
                        modalContainer.style.width = window.innerWidth <= 499 ? "90vw" : "65vw";
                    } else {
                        modalContainer.style.height = "70vw";
                        modalContainer.style.width = "60vw";
                    }
                } else {
                    modalContainer.style.width = "33vw";
                    modalContainer.style.height = "40vw";
                }
                listItems.forEach((item) => {
                    item.style.transform = "translate(0px, 0px)";
                    item.style.opacity = "1";
                });

                modalBtnContainer.style.transform = "translate(0px, 0px)";
                modalBtnContainer.style.opacity = "1";

                modalCloseBtn.style.transform = "translate(0px, 0px)";
                modalCloseBtn.style.opacity = "1";
            }, 400);
            break;
        case "close":
            modalContainer.style.width = "0vw";
            modalContainer.style.height = "0vw";
            listItems.forEach((item) => {
                item.style.opacity = "0";
            });
            modalBtnContainer.style.opacity = "0";
            modalCloseBtn.style.opacity = "0";
            modalContainerTimeOut = setTimeout(() => {
                modalBg.style.display = "none";

                modalContainerTimeOutList = setTimeout(() => {
                    listItems.forEach((item) => {
                        item.style.transform = "translate(0px, 50px)";
                    });

                    modalBtnContainer.style.transform = "translate(0px, 50px)";

                    modalCloseBtn.style.transform = "translate(0px, 50px)";
                }, 500);
            }, 400);
            break;
        default:
            break;
    }
};

if (window.innerWidth <= 768) {
    menuTxt.addEventListener("touchend", () => {
        modalStateHandler("open", true);
    });
    modalCloseBtn.addEventListener("touchend", () => {
        modalStateHandler("close", true);
    });
    modaBlackBox.addEventListener("touchend", () => {
        modalStateHandler("close", true);
    });
} else {
    menuTxt.addEventListener("click", () => {
        modalStateHandler("open", false);
    });
    modalCloseBtn.addEventListener("click", () => {
        modalStateHandler("close", false);
    });
    modaBlackBox.addEventListener("click", () => {
        modalStateHandler("close", false);
    });
}



window.addEventListener("load", () => {
    let projectImgTitle = document.querySelector(".best-project__title");

    document.addEventListener("mousemove", function (e) {
        if (bestProjectsTitleIndex != -1) {
            projectImgTitle.style.left = `${e.pageX + 20}px`;
            projectImgTitle.style.top = `${e.pageY + 15}px`;
        }
    });

    let projectsImages = document.querySelectorAll(".best-projects__img");
    let bestProjectsTitleIndex = -1;

    const bestProjectNames = [
        "Home",
        "Building",
        "Story",
        "Location",
        "Availability",
        "Contact",
    ];

    projectsImages.forEach((img, index) => {
        img.addEventListener("mousemove", () => {
            bestProjectsTitleIndex = index;
            projectImgTitle.style.opacity = "1";
            projectImgTitle.innerText = img.alt;
        });

        img.addEventListener("mouseleave", () => {
            bestProjectsTitleIndex = -1;
            projectImgTitle.style.opacity = "0";
        });
    });
});



//partners slider
let sliderPartnersSlider = document.getElementById("partners-logo-wrap"),
    slidesPartnersSlider =
        document.querySelectorAll(".slide-logo-wrap"),
    slideWidthPartnersSlider = slidesPartnersSlider[0].offsetWidth,
    visibleSlidesPartnersSlider =
        Math.floor(window.innerWidth / slideWidthPartnersSlider) - 1,
    currentStatePartnersSlider = 0,
    lastIndentPartnersSlider = 20,
    partnerDivider = window.innerWidth <= 768 ? 2 : 3
reminderDivider = window.innerWidth <= 768 ? 1 : 2;
let prevSlideCount = 0;
let activeSlideIndexPartnersSlider = 2;
if (window.innerWidth <= 991) {
    if (window.innerWidth <= 568) {
        activeSlideIndexPartnersSlider = 0;
    } else {
        activeSlideIndexPartnersSlider = 1;
    }
}
let rightArrowPartnersSlider = document.querySelector(
    ".control-icon.is--right"
);
let leftArrowPartnersSlider = document.querySelector(
    ".control-icon.is--left"
);
let slideButtonsPartnersSlider = document.querySelectorAll(
    ".index-button"
);
let allSlideTextsPartnersSlider = document.querySelectorAll(
    ".sliders-text"
);


initMouseEvents();
const addActiveIndex = () => {
    slideButtonsPartnersSlider[activeSlideIndexPartnersSlider].classList.add(
        "active"
    );
    slidesPartnersSlider[activeSlideIndexPartnersSlider].classList.add("active");
    allSlideTextsPartnersSlider[activeSlideIndexPartnersSlider].classList.add(
        "active"
    );
};
const removeActiveIndex = () => {
    slideButtonsPartnersSlider[activeSlideIndexPartnersSlider].classList.remove(
        "active"
    );
    slidesPartnersSlider[activeSlideIndexPartnersSlider].classList.remove(
        "active"
    );
    allSlideTextsPartnersSlider[activeSlideIndexPartnersSlider].classList.remove(
        "active"
    );
};
addActiveIndex();

function initMouseEvents() {
    const rightArrowClickHandler = () => {
        if (activeSlideIndexPartnersSlider === slideButtonsPartnersSlider.length - 1) {
            return;
        } else if (activeSlideIndexPartnersSlider < slideButtonsPartnersSlider.length - 1) {
            if (window.innerWidth <= 479) {
                prevSlideCount = currentStatePartnersSlider;
                currentStatePartnersSlider++;
            } else {
                if (activeSlideIndexPartnersSlider % partnerDivider === reminderDivider) {
                    currentStatePartnersSlider++;
                }
            }
            removeActiveIndex();
            activeSlideIndexPartnersSlider++;
            addActiveIndex();
            scrollSlides(currentStatePartnersSlider);
        }
    };
    if (window.innerWidth <= 900) {
        rightArrowPartnersSlider.addEventListener("touchend", rightArrowClickHandler);
    } else {
        rightArrowPartnersSlider.addEventListener("click", rightArrowClickHandler);
    }

    const leftArrowClickHandler = () => {
        prevSlideCount = currentStatePartnersSlider;
        if (activeSlideIndexPartnersSlider === 0) {
            return;
        } else if (activeSlideIndexPartnersSlider >= 0) {
            if (window.innerWidth <= 479) {

                currentStatePartnersSlider--;
            } else {
                if (activeSlideIndexPartnersSlider % partnerDivider === 0) {
                    currentStatePartnersSlider--;
                }
            }
            removeActiveIndex();
            activeSlideIndexPartnersSlider--;
            addActiveIndex();
            scrollSlides(currentStatePartnersSlider);
        }
    };

    if (window.innerWidth <= 900) {
        leftArrowPartnersSlider.addEventListener("touchend", leftArrowClickHandler);
    } else {
        leftArrowPartnersSlider.addEventListener("click", leftArrowClickHandler);
    }
}

let translatePartnersSlider;
let mobileTranformSlider = 0;
function scrollSlides(currentStatePartnersSlider) {
    translatePartnersSlider =
        currentStatePartnersSlider * slideWidthPartnersSlider;
    if (window.innerWidth > 991) lastIndentPartnersSlider = 0;
    if (
        currentStatePartnersSlider ===
        slidesPartnersSlider.length - visibleSlidesPartnersSlider
    )
        translatePartnersSlider =
            translatePartnersSlider - lastIndentPartnersSlider;
    if (window.innerWidth <= 479) {
        if (prevSlideCount < currentStatePartnersSlider) {
            mobileTranformSlider += 88.5;
        } else {
            mobileTranformSlider -= 88.5;
        }
        sliderPartnersSlider.style.transform = `translateX(-${mobileTranformSlider}vw)`;
    }
    else {
        sliderPartnersSlider.style.transform = `translateX(-${translatePartnersSlider}px)`;
    }
}


slideButtonsPartnersSlider.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (index === activeSlideIndexPartnersSlider) return;

        if (index === 0) {
            currentStatePartnersSlider = 0;
        } else if (index === slidesPartnersSlider.length - 1) {
            currentStatePartnersSlider = Math.floor(slidesPartnersSlider.length / 5);
        } else {
            if (index > activeSlideIndexPartnersSlider) {
                currentStatePartnersSlider = Math.floor(index / 5);
            } else if (index < activeSlideIndexPartnersSlider) {
                if (currentStatePartnersSlider > 0) {
                    currentStatePartnersSlider = Math.floor(index / 5);
                }
            }
        }
        removeActiveIndex();

        activeSlideIndexPartnersSlider = index;
        addActiveIndex();
        scrollSlides(currentStatePartnersSlider);
    })
})
