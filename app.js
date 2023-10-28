let servicesHomeGrid = document.querySelector(".grid");
let servicesHomeImgs = document.querySelectorAll(".services-img");

//helper functions
function li(a, b, n) {
  return (1 - n) * a + n * b;
}

let servicesImgProps = {
  width: window
    .getComputedStyle(servicesHomeImgs[0], null)
    .getPropertyValue("width"),
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

window.addEventListener("scroll", () => {
  if (isInViewport(servicesHomeGrid)) {
    if (servicesImgProps.width <= 20 && servicesImgProps.width >= 14) {
      servicesImgProps.width = li(servicesImgProps.width, scrollY / 38, 0.043);
      servicesImgProps.width = Math.floor(servicesImgProps.width * 100) / 100;
    }
    servicesHomeImgs.forEach((img) => {
      img.style.width = `${Math.max(
        Math.min(servicesImgProps.width, 20),
        14
      )}vw`;
    });
  }
});
