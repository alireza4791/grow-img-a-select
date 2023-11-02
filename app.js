let servicesHomeGrid = document.querySelector(".bordered");
let serviesHomeBox = document.querySelector(".div-block-4");
let servicesHomeImgs = document.querySelectorAll(".services-img");
let servicesHomeContainer = document.querySelector(
  ".services-img-container-flex"
);

//helper functions
function li(a, b, n) {
  return (1 - n) * a + n * b;
}

let servicesImgProps = {
  width: 10,
};

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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
  if (isInViewport(servicesHomeGrid) || isInViewport(serviesHomeBox)) {
    if (middleImg) {
      middleImgTransform = Math.max(7 - scrollY / 80, 0);
      servicesHomeImgs[1].style.transform = `translate(0, -${middleImgTransform}vh)`;

      if (middleImgTransform === 0) {
        if (scrollYDiff === 0) {
          scrollYDiff = scrollY;
        } else {
          servicesImgProps.width = (scrollY - scrollYDiff) / 10;
          servicesHomeImgs.forEach((img) => {
            img.style.width = `${Math.max(
              Math.min(servicesImgProps.width, 30),
              10
            )}%`;
          });

          if (Math.max(Math.min(servicesImgProps.width, 30), 10) === 30) {
            servicesHomeImgs.forEach((img) => {
              if (!img.classList.contains("finished")) {
                img.classList.add("finished");
              }
            });
          }
        }
      }
    }
  }
});

servicesHomeImgs.forEach((img) => {
  img.addEventListener("mousemove", () => {
    if (Math.max(Math.min(servicesImgProps.width, 30), 10) === 30) {
      servicesHomeImgs.forEach((images) => {
        if (images != img) {
          images.style.width = "10%";
          images.querySelector(".service-header").style.fontSize = "30px";
          images.querySelector(".service-header").style.height = "40%";
          images.querySelector(".service-content").style.opacity = "0";
          images.querySelector(".service-header").style.transform =
            "translate(0px)rotate(-90deg)";
          images.querySelector(".service-header").style.opacity = "1";
        } else {
          images.style.width = "60%";
          images.querySelector(".service-header").style.transform =
            "translate(80px)rotate(-90deg)";
          images.querySelector(".service-header").style.opacity = "0";
          images.querySelector(".service-content").style.opacity = "1";
          images.querySelector(".service-header").style.height = "90%";
        }
      });
    }
  });
});

servicesHomeContainer.addEventListener("mouseleave", () => {
  servicesHomeImgs.forEach((img) => {
    img.style.width = `30%`;
    img.querySelector(".service-header").style.opacity = "1";
    img.querySelector(".service-header").style.transform =
      "translate(0px)rotate(-90deg)";
    img.querySelector(".service-content").style.opacity = "0";
    img.querySelector(".service-header").style.fontSize = baseFontSize;
    img.querySelector(".service-header").style.height = "90%";
  });
});
