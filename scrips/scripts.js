const isElementVisible = (el, thresh) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= thresh * (window.innerHeight || document.documentElement.clientHeight)
  ); /* or $(window).height() */
};

const aboutRect = document.querySelector("#about");
const educationRect = document.querySelector("#education");
const workRect = document.querySelector("#work");

document.addEventListener("scroll", () => {
  [aboutRect, educationRect, workRect].forEach((rect) => {
    const isVisible = isElementVisible(rect, 0.85);
    if (isVisible) {
      rectWrapper = rect.querySelector(".section-wrapper");
      rectWrapper.classList.add("slide-in");
    }
  });
});
