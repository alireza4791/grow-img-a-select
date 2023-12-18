<script>
let menuWrapper = document.querySelector(".menu-wrapper");
let menuOptions = document.querySelectorAll(".menu-item");
let menuText = document.querySelector(".is--menu-button");
let prevSroll = 0;
let menuScrollAnimationTimeout;
let lockTimeoutFirst;
let lock = false;
document.addEventListener("scroll", () => {
  if (scrollY > prevSroll) {
    if (!menuWrapper.classList.contains("menu-wrapper-closed") && !lock) {
      lock = true;
      menuOptions.forEach((option) => {
        if (!option.classList.contains("is--menu-button")) {
          option.style.opacity = "0";
          option.style.width = "0%";
        }
        option.querySelector(".menu-item__text").style.color = "var(--fourth)";
      });
      menuWrapper.style.opacity = "1";

      menuWrapper.style.border = "0.0520833vw solid rgba(0, 0, 0, .1)";
      menuWrapper.style.borderRadius = "0.208333vw";
      menuWrapper.style.animation =
        "header_animation_scroll 1.2s cubic-bezier(.58,0,.01,1) 0s forwards";

      menuScrollAnimationTimeout = setTimeout(() => {
        menuWrapper.classList.add("menu-wrapper-closed");
        menuOptions.forEach((option) => {
          if (!option.classList.contains("is--menu-button"))
            option.classList.add("is--closed");
        });
      }, 1200);
      lockTimeoutFirst = setTimeout(() => {
        lock = false;
      }, 1200);
    }
  } else if (scrollY < prevSroll && scrollY <= 150) {
    
    if (menuWrapper.classList.contains("menu-wrapper-closed") && !lock) {
      lock = true;
      menuWrapper.style.background = "#fafaf9";
      menuWrapper.style.border = "none";
      menuWrapper.style.animation =
        "header_animation_backward 1.48s cubic-bezier(.58,0,.01,1) .28s forwards";

      menuScrollAnimationTimeout = setTimeout(() => {
        menuWrapper.classList.remove("menu-wrapper-closed");
        menuOptions.forEach((option) => {
          if (!option.classList.contains("is--menu-button")) {
            option.classList.remove("is--closed");
            option.style.opacity = "1";
            option.style.width = "auto";
          }
          option.querySelector(".menu-item__text").style.color = "var(--third)";
        });
      }, 400);
    }
    lockTimeoutFirst = setTimeout(() => {
      lock = false;
    }, 1480);
  }
  prevSroll = scrollY;
});
menuWrapper.addEventListener("mouseenter", () => {
  if (menuWrapper.classList.contains("menu-wrapper-closed")) {
    menuWrapper.style.opacity = "0.8";
  }
});
menuWrapper.addEventListener("mouseleave", () => {
  menuWrapper.style.opacity = "1";
});

</script>
<script>
let bestProjectsImages = document.querySelectorAll(".best-projects__img");
let bestProjectsContainer = document.querySelector(".best-projects");
const handleImgHoverIn = (img, index) => {
  if (bestProjectsImages.length === index + 1) {
    img.style.width = window.innerWidth <= 990 ? "34vw" : "28vw";
    img.style.height = window.innerWidth <= 990 ? "34vw" : "28vw";
    img.style.opacity = "1";
    bestProjectsImages[index - 1].style.width = window.innerWidth <= 990 ? "26vw" : "18vw";
    bestProjectsImages[index - 1].style.height = window.innerWidth <= 990 ? "26vw" : "18vw";
    bestProjectsImages[index - 1].style.opacity = "0.8";
    bestProjectsImages.forEach((project, i) => {
      if (i !== index && i !== index + 1 && i !== index - 1) {
        project.style.width = window.innerWidth <= 990 ? "18vw" : "10vw";
        project.style.height = window.innerWidth <= 990 ? "18vw" : "10vw";
      }
    });
    return;
  }
  if (index === 0) {
    img.style.width = window.innerWidth <= 990 ? "34vw" : "28vw";
    img.style.height = window.innerWidth <= 990 ? "34vw" : "28vw";
    img.style.opacity = "1";
    bestProjectsImages[index + 1].style.width = window.innerWidth <= 990 ? "26vw" : "18vw";
    bestProjectsImages[index + 1].style.height = window.innerWidth <= 990 ? "26vw" : "18vw";
    bestProjectsImages[index + 1].style.opacity = "0.8";
    bestProjectsImages.forEach((project, i) => {
      if (i !== index && i !== index + 1 && i !== index - 1) {
        project.style.width = window.innerWidth <= 990 ? "18vw" : "10vw";
        project.style.height = window.innerWidth <= 990 ? "18vw" : "10vw";
      }
    });
    return;
  }
  img.style.width = window.innerWidth <= 990 ? "34vw" : "28vw";
  img.style.height = window.innerWidth <= 990 ? "34vw" : "28vw";
  img.style.opacity = "1";
  bestProjectsImages[index - 1].style.width = window.innerWidth <= 990 ? "26vw" : "18vw";
  bestProjectsImages[index - 1].style.height = window.innerWidth <= 990 ? "26vw" : "18vw";
  bestProjectsImages[index - 1].style.opacity = "0.8";
  bestProjectsImages[index + 1].style.width = window.innerWidth <= 990 ? "26vw" : "18vw";
  bestProjectsImages[index + 1].style.height = window.innerWidth <= 990 ? "26vw" : "18vw";
  bestProjectsImages[index + 1].style.opacity = "0.8";
  bestProjectsImages.forEach((project, i) => {
    if (i !== index && i !== index + 1 && i !== index - 1) {
      project.style.width = window.innerWidth <= 990 ? "18vw" : "10vw";
      project.style.height = window.innerWidth <= 990 ? "18vw" : "10vw";
    }
  });
};
const handleImgHoverOut = () => {
  bestProjectsImages.forEach((project, i) => {
    project.style.width = window.innerWidth <= 990 ? "24vw" : "15vw";
    project.style.height = window.innerWidth <= 990 ? "24vw" : "15vw";
    project.style.opacity = "0.6";
  });
};
bestProjectsImages.forEach((img, index) => {
  img.addEventListener("mouseenter", () => {
    handleImgHoverIn(img, index);
  });
  img.addEventListener("touchmove", () => {
    handleImgHoverIn(img, index);
  });
});

bestProjectsContainer.addEventListener("mouseleave", () => {
  handleImgHoverOut();
});
bestProjectsContainer.addEventListener("touchleave", () => {
  handleImgHoverOut();
});
</script>
<script>
//dropdown
let servicesContainer = document.querySelector(".dropdown-link");
let servicesIcon = document.querySelector(".dropdown-link__icon");
let servicesOptions = document.querySelector(".dropdown-options");

let modalServiceOptions = document.querySelector(".modal-dropdown-items");
let modalServiceContainer = document.querySelector(".modal-services");
let modalServiceIcon = document.querySelector(".modal-dropdown-icon");
let modalServiceText = document.querySelector(
  ".modal-services > .div-block-40 > .list-item"
);

let modalTimeoutService;

const initiateDropDown = (status) => {
  if (status === "open") {
    servicesIcon.style.transform = "rotate(0deg)";
    servicesOptions.style.opacity = "1";
  } else if (status === "close") {
    servicesIcon.style.transform = "rotate(-90deg)";
    servicesOptions.style.opacity = "0";
  }
};

servicesContainer.addEventListener("mouseenter", () => {
  initiateDropDown("open");
});

servicesContainer.addEventListener("mouseleave", () => {
  initiateDropDown("close");
});

servicesContainer.addEventListener("toucheenter", () => {
  initiateDropDown("open");
});

servicesContainer.addEventListener("touchleave", () => {
  initiateDropDown("close");
});

const initiateDropDownModal = (status) => {
  if (status === "open") {
    modalServiceIcon.style.transform = "rotate(0deg)";
    modalServiceOptions.style.display = "flex";
    modalTimeoutService = setTimeout(() => {
      modalServiceOptions.style.opacity = "1";
      modalServiceOptions.style.height = "auto";
    }, 200);
  } else if (status === "close") {
    modalServiceIcon.style.transform = "rotate(-90deg)";
    modalServiceOptions.style.display = "none";
    modalTimeoutService = setTimeout(() => {
      modalServiceOptions.style.opacity = "0";
      modalServiceOptions.style.height = "0px";
    }, 200);
  }
};

modalServiceContainer.addEventListener("mouseenter", () => {
  initiateDropDownModal("open");
});

modalServiceContainer.addEventListener("mouseleave", () => {
  initiateDropDownModal("close");
});

modalServiceContainer.addEventListener("touchenter", () => {
  initiateDropDownModal("open");
});

modalServiceContainer.addEventListener("touchleave", () => {
  initiateDropDownModal("close");
});
</script>
<script src="https://alireza4791.github.io/grow-img-a-select/app.js">
</script>
