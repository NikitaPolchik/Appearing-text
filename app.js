window.addEventListener("scroll", scrollAppear);

function scrollAppear() {
  let text = document.querySelector(".text");
  //   shows where is picked item in relation to top of a page
  let textPosition = text.getBoundingClientRect().top;
  //   height adjustments for all types of window resolutions
  let screenPosition = window.innerHeight;

  if (textPosition < screenPosition / 1.5) {
    text.classList.add("text-appear");
  } else {
    text.classList.remove("text-appear");
  }
}
