/* Project Video highlight hover */
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

/* Optional Vanilla JS AJAX Submission Handler */
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const button = contactForm.querySelector('button[type="submit"]');

    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const response = await fetch("https://formspree.io/f/mvkorgol", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thanks for your message!");
        contactForm.reset();
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
    } finally {
      button.disabled = false;
      button.textContent = "Submit";
    }
  });
}
