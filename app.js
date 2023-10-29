let servicesHomeGrid = document.querySelector(".bordered");
let serviesHomeBox = document.querySelector(".div-block-4");
let servicesHomeImgs = document.querySelectorAll(".services-img");

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
document.addEventListener("scroll", () => {
  if (isInViewport(servicesHomeGrid) || isInViewport(serviesHomeBox)) {
    if (middleImg) {
      middleImgTransform = Math.max(7 - scrollY / 145, 0);
      servicesHomeImgs[1].style.transform = `translate(0, -${middleImgTransform}vh)`;

      if (middleImgTransform === 0) {
        if (scrollYDiff === 0) {
          scrollYDiff = scrollY;
        }
        servicesImgProps.width = (scrollY - scrollYDiff) / 48;
        servicesHomeImgs.forEach((img) => {
          img.style.width = `${Math.max(
            Math.min(servicesImgProps.width, 20),
            10
          )}vw`;
        });
      }
    }

    // if (servicesImgProps.width <= 20 && servicesImgProps.width >= 14) {
    // servicesImgProps.width = li(servicesImgProps.width, scrollY / 38, 0.043);

    // servicesImgProps.width = Math.floor(servicesImgProps.width * 100) / 100;
    // }
  }
});
