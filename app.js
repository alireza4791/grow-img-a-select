let servicesHomeGrid = document.querySelector(".Grid");
let servicesHomeImgs = document.querySelectorAll(".services-img");

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
    servicesHomeImgs.forEach((img) => {
      img.style.width = "20vw";
      img.style.width = "28vw";
    });
  }
});
