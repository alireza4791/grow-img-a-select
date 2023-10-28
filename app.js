let servicesHomeGrid = document.querySelector(".Grid");
let servicesHomeImgs = document.querySelectorAll(".services-img");

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
    if (servicesImgProps.width <= 20 && servicesImgProps.width >= 14)
      servicesImgProps.width += scrollY / 38;
    
    servicesHomeImgs.forEach((img) => {
      img.style.width = `${Math.max(
        Math.min(servicesImgProps.width, 20),
        14
      )}vw`;
    });
  }
});
