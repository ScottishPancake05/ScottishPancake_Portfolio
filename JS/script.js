/* Project Vidoe highlight hover */
document.querySelectorAll(".project-box").forEach((box) => {
  const video = box.querySelector(".preview-video");

  if (!video) return;

  box.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  box.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

/* Skill bar animation */
document.querySelectorAll(".skill-fill").forEach((el) => {
  const width = el.style.width;

  el.style.width = "0";

  setTimeout(() => {
    el.style.width = width;
  }, 100);
});

setTimeout(() => {
  document.querySelectorAll(".skill-label").forEach((label) => {
    label.classList.add("show");
  });
}, 1100);

/* Showcase arrows */
function changeShowcase(imageSrc) {
  const mainImage = document.getElementById("mainImage");

  if (!mainImage) return;

  mainImage.src = imageSrc;
}

function scrollThumbnails(direction) {
  const thumbnailWindow = document.querySelector(".thumbnail-window");

  if (!thumbnailWindow) return;

  const scrollAmount = 200;

  thumbnailWindow.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}
