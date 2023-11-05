let servicesHomeGrid = document.querySelector(".bordered");
let serviesHomeBox = document.querySelector(".div-block-4");
let servicesHomeImgs = document.querySelectorAll(".services-img");
let servicesHomeContainer = document.querySelector(
  ".services-img-container-flex"
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
  if (img.classList.contains("middle")) {
    middleImg = img;
  }
});

let middleImgTransform = 7;
let scrollYDiff = 0;
let baseFontSize = window
  .getComputedStyle(
    document.querySelector(".services-img .service-header"),
    null
  )
  .getPropertyValue("font-size");

document.addEventListener("scroll", () => {
  if (isVisible(servicesHomeGrid)) {
    if (middleImg) {
      middleImgTransform = Math.min(scrollY / 100, 7);
      servicesHomeImgs[0].style.transform = `translate(0, -${middleImgTransform}vh)`;
      servicesHomeImgs[2].style.transform = `translate(0, -${middleImgTransform}vh)`;

      if (scrollY < prevScroll) {
        servicesHomeImgs.forEach((images) => {
          if (!images.classList.contains('finished')) {
            images.querySelector(".service-header").style.transform =
              "translate(80px, 50%)rotate(-90deg)";
            images.querySelector(".service-header").style.opacity = "0";
            images.querySelector(".service-content").style.opacity = "0";
          }
        })
      }

      if (middleImgTransform === 7) {
        if (scrollYDiff === 0) {
          scrollYDiff = scrollY;
        } else {
          servicesImgProps.width = window.innerWidth > 900 ? (scrollY - scrollYDiff) / 8 : (scrollY - scrollYDiff) / 6;
          servicesHomeImgs.forEach((img) => {
            img.querySelector(".service-header").style.transitionDelay = '0.5s';
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
                img.querySelector(".service-header").style.transform =
                  "translate(0px, 50%)rotate(-90deg)";
                img.querySelector(".service-header").style.opacity = "1";
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
});

servicesHomeImgs.forEach((img) => {
  img.addEventListener("mousemove", () => {
    if (img.classList.contains("finished")) {
      servicesHomeImgs.forEach((images) => {
        images.querySelector(".service-header").style.transitionDelay = '0s';
        if (images != img) {
          images.style.width = "12%";
          images.querySelector(".service-header").style.fontSize = window.innerWidth <= 478 ? "16px" : "30px";
          // images.querySelector(".service-header").style.height = "40%";
          images.querySelector(".service-content").style.opacity = "0";
          images.querySelector(".service-header").style.transform =
            "translate(0px, 50%)rotate(-90deg)";
          images.querySelector(".service-header").style.opacity = "1";
          // images.querySelector(".service-header-container").style.right = "45%";
        } else {
          images.style.width = "69%";
          images.querySelector(".service-header").style.transform =
            "translate(80px, 50%)rotate(-90deg)";
          images.querySelector(".service-header").style.opacity = "0";
          images.querySelector(".service-content").style.opacity = "1";
          // images.querySelector(".service-header-container").style.right = "20%";
          // images.querySelector(".service-header").style.height = "90%";
        }
      });
    }
  });

  img.addEventListener("touchmove", () => {
    if (img.classList.contains("finished")) {
      servicesHomeImgs.forEach((images) => {
        images.querySelector(".service-header").style.transitionDelay = '0s';
        if (images != img) {
          images.style.width = "12%";
          images.querySelector(".service-header").style.fontSize = window.innerWidth <= 478 ? "16px" : "30px";
          // images.querySelector(".service-header").style.height = "40%";
          images.querySelector(".service-content").style.opacity = "0";
          images.querySelector(".service-header").style.transform =
            "translate(0px, 50%)rotate(-90deg)";
          images.querySelector(".service-header").style.opacity = "1";
          // images.querySelector(".service-header-container").style.right = "45%";
        } else {
          images.style.width = "69%";
          images.querySelector(".service-header").style.transform =
            "translate(80px, 50%)rotate(-90deg)";
          images.querySelector(".service-header").style.opacity = "0";
          images.querySelector(".service-content").style.opacity = "1";
          // images.querySelector(".service-header-container").style.right = "20%";
          // images.querySelector(".service-header").style.height = "90%";
        }
      });
    }
  });
});

servicesHomeContainer.addEventListener("mouseleave", () => {

  servicesHomeImgs.forEach((img) => {
    if (img.classList.contains("finished")) {
      img.querySelector(".service-header").style.transitionDelay = '0s';
      img.style.width = `31%`;
      img.querySelector(".service-header").style.opacity = "1";
      img.querySelector(".service-header").style.transform =
        "translate(0px, 50%)rotate(-90deg)";
      img.querySelector(".service-content").style.opacity = "0";
      img.querySelector(".service-header").style.fontSize = baseFontSize;
    }
    // img.querySelector(".service-header-container").style.right = "20%";
    // img.querySelector(".service-header").style.height = "90%";
  });

});


servicesHomeContainer.addEventListener("touchend", () => {

  servicesHomeImgs.forEach((img) => {
    if (img.classList.contains("finished")) {
      img.querySelector(".service-header").style.transitionDelay = '0s';
      img.style.width = `31%`;
      img.querySelector(".service-header").style.opacity = "1";
      img.querySelector(".service-header").style.transform =
        "translate(0px, 50%)rotate(-90deg)";
      img.querySelector(".service-content").style.opacity = "0";
      img.querySelector(".service-header").style.fontSize = baseFontSize;
    }
    // img.querySelector(".service-header-container").style.right = "20%";
    // img.querySelector(".service-header").style.height = "90%";
  });

});



let modalBg = document.querySelector(".dark-modal-bg");
let modaBlackBox = document.querySelector(".black-modal-bg");
let modalContainer = document.querySelector(".menu-modal-container");
let menuTxt = document.querySelector(".menu-text");
let modalCloseBtn = document.querySelector(".modal-close");
let listItems = document.querySelectorAll(".list-2 .list-item");
let modalBtnContainer = document.querySelector(".modal-buttons-container");
let modalContainerTimeOut;
let modalContainerTimeOutList;

const modalStateHandler = (state, isMobile) => {
    switch (state) {
        case "open":
            modalBg.style.display = "flex";
            modalContainerTimeOut = setTimeout(() => {
                if (isMobile) {
                    
                  if(window.innerWidth <= 568){
                    modalContainer.style.height = window.innerWidth <= 499 ? "520px" : "85vw";
                    modalContainer.style.width = window.innerWidth <= 499 ? "90vw" : "65vw";
                  } else {
                    modalContainer.style.height ="70vw";
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
                document.querySelector(".modal-services-icon").style.opacity = "1";
            }, 400);
            break;
        case "close":
            document.querySelector(".modal-services-icon").style.opacity = "0";
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
  let projectImgTitle = document.querySelector(".best-project-img-title");

  document.addEventListener("mousemove", function (e) {
    if (bestProjectsTitleIndex != -1) {
      projectImgTitle.style.left = `${e.pageX + 20}px`;
      projectImgTitle.style.top = `${e.pageY + 15}px`;
    }
  });

  let projectsImages = document.querySelectorAll(".best-project-img");
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
      projectImgTitle.innerText = bestProjectNames[index];
    });

    img.addEventListener("mouseleave", () => {
      bestProjectsTitleIndex = -1;
      projectImgTitle.style.opacity = "0";
    });
  });
});



let sliderPartnersSlider = document.getElementById("slides-partners"),
    slidesPartnersSlider =
        sliderPartnersSlider.querySelectorAll(".slide-partners"),
    slideWidthPartnersSlider = slidesPartnersSlider[0].offsetWidth,
    visibleSlidesPartnersSlider =
        Math.floor(window.innerWidth / slideWidthPartnersSlider) - 1,
    currentStatePartnersSlider = 0,
    lastIndentPartnersSlider = 20,
    activeSlideIndexPartnersSlider = window.innerWidth <= 768 ? 0 : 2;
let rightArrowPartnersSlider = document.querySelector(
    ".direction-arrow-partners.right"
);
let leftArrowPartnersSlider = document.querySelector(
    ".direction-arrow-partners.left"
);
let slideButtonsPartnersSlider = document.querySelectorAll(
    ".slide-button-partners"
);
let allSlideTextsPartnersSlider = document.querySelectorAll(
    ".slide-text-partners"
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
        if (
            currentStatePartnersSlider <
            slidesPartnersSlider.length - visibleSlidesPartnersSlider
        ) {
            currentStatePartnersSlider++;
        }
            if (activeSlideIndexPartnersSlider < slidesPartnersSlider.length - 1) {
                removeActiveIndex();
                activeSlideIndexPartnersSlider++;
            }
        addActiveIndex();
        scrollSlides(currentStatePartnersSlider);
    };
    rightArrowPartnersSlider.addEventListener("click", rightArrowClickHandler);
    rightArrowPartnersSlider.addEventListener("touchend", rightArrowClickHandler);
    const leftArrowClickHandler = () => {
        if (currentStatePartnersSlider > 0) {
            currentStatePartnersSlider--;
        }
        if (activeSlideIndexPartnersSlider > 0) {
            removeActiveIndex();
            activeSlideIndexPartnersSlider--;
        }
        addActiveIndex();
        scrollSlides(currentStatePartnersSlider);
    };
    leftArrowPartnersSlider.addEventListener("click", leftArrowClickHandler);
    leftArrowPartnersSlider.addEventListener("touchend", leftArrowClickHandler);
}
let translatePartnersSlider;
function scrollSlides(currentStatePartnersSlider) {
    translatePartnersSlider =
        currentStatePartnersSlider * slideWidthPartnersSlider;
    if (window.innerWidth > 768) lastIndentPartnersSlider = 0;
    if (
        currentStatePartnersSlider ===
        slidesPartnersSlider.length - visibleSlidesPartnersSlider
    )
        translatePartnersSlider =
            translatePartnersSlider - lastIndentPartnersSlider;
    sliderPartnersSlider.style.transform = `translateX(-${translatePartnersSlider}px)`;
}
const onpartnerSliderButton = (index) => {
    if (index === activeSlideIndexPartnersSlider) return;

    if (index === 0) {
        currentStatePartnersSlider = 0;
    } else if (index === slidesPartnersSlider.length - 1) {
        currentStatePartnersSlider = 2;
    } else {
        if (index > activeSlideIndexPartnersSlider) {
            if (
                currentStatePartnersSlider <
                slidesPartnersSlider.length - visibleSlidesPartnersSlider
            ) {
                currentStatePartnersSlider++;
            }
        } else if (index < activeSlideIndexPartnersSlider) {
            if (currentStatePartnersSlider > 0) {
                currentStatePartnersSlider--;
            }
        }
    }
    removeActiveIndex();
    activeSlideIndexPartnersSlider = index;
    addActiveIndex();
    scrollSlides(currentStatePartnersSlider);
};
