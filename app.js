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
      middleImgTransform = Math.max(scrollY / 120, 7);
      servicesHomeImgs[0].style.transform = `translate(0, -${middleImgTransform}vh)`;
      servicesHomeImgs[2].style.transform = `translate(0, -${middleImgTransform}vh)`;

      if (scrollY < prevScroll) {
        servicesHomeImgs.forEach((images) => {
          if (!images.classList.contains('finished')) {
            images.querySelector(".service-header").style.transform =
              "translate(80px, 50%)rotate(-90deg)";
            images.querySelector(".service-header").style.opacity = "0";
          }
        })
      }

      if (middleImgTransform === 7) {
        if (scrollYDiff === 0) {
          scrollYDiff = scrollY;
        } else {
          servicesImgProps.width = (scrollY - scrollYDiff) / 10;
          servicesHomeImgs.forEach((img) => {
            img.querySelector(".service-header").style.transitionDelay = '0.5s';
            if (!img.classList.contains("finished")) {
              img.style.width = `${Math.max(
                Math.min(servicesImgProps.width, 28),
                15
              )}%`;
            }
          });

          if (Math.max(Math.min(servicesImgProps.width, 28), 15) === 28) {
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
          images.querySelector(".service-header").style.fontSize = "30px";
          // images.querySelector(".service-header").style.height = "40%";
          images.querySelector(".service-content").style.opacity = "0";
          images.querySelector(".service-header").style.transform =
            "translate(0px, 50%)rotate(-90deg)";
          images.querySelector(".service-header").style.opacity = "1";
          // images.querySelector(".service-header-container").style.right = "45%";
        } else {
          images.style.width = "60%";
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
      img.style.width = `28%`;
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
