/* Project Video highlight hover */
document.querySelectorAll(".project-box").forEach(box => {
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
document.querySelectorAll(".skill-fill").forEach(el => {
  const width = el.style.width;

  el.style.width = "0";

  setTimeout(() => {
    el.style.width = width;
  }, 100);
});

setTimeout(() => {
  document.querySelectorAll(".skill-label").forEach(label => {
    label.classList.add("show");
  });
}, 1100);

/* Showcase Switching & Video Controls */
function changeShowcase(mediaSrc) {
  const mainImage = document.getElementById("mainImage");
  const videoContainer = document.getElementById("videoContainer");
  const mainVideo = document.getElementById("mainVideo");

  if (!mainImage || !videoContainer || !mainVideo) return;

  const isVideo =
    mediaSrc.toLowerCase().endsWith(".mp4") ||
    mediaSrc.toLowerCase().endsWith(".webm");

  if (isVideo) {
    mainImage.style.display = "none";
    videoContainer.style.display = "block";

    if (mainVideo.src !== mediaSrc) {
      mainVideo.src = mediaSrc;
    }

    mainVideo.play().catch(err => console.log("Autoplay blocked:", err));
    updatePlayBtnState();
  } else {
    mainVideo.pause();
    videoContainer.style.display = "none";
    mainImage.src = mediaSrc;
    mainImage.style.display = "block";
  }
}

function updatePlayBtnState() {
  const mainVideo = document.getElementById("mainVideo");
  const playPauseBtn = document.getElementById("playPauseBtn");
  if (mainVideo && playPauseBtn) {
    playPauseBtn.textContent = mainVideo.paused ? "▶" : "⏸";
  }
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

/* RETROWAVE PLAYER EVENT LISTENERS */
document.addEventListener("DOMContentLoaded", () => {
  const mainVideo = document.getElementById("mainVideo");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const progressWrapper = document.getElementById("progressWrapper");
  const progressFill = document.getElementById("progressFill");

  if (!mainVideo) return;

  // Play / Pause Toggle
  playPauseBtn.addEventListener("click", () => {
    if (mainVideo.paused) {
      mainVideo.play();
    } else {
      mainVideo.pause();
    }
    updatePlayBtnState();
  });

  mainVideo.addEventListener("play", updatePlayBtnState);
  mainVideo.addEventListener("pause", updatePlayBtnState);

  // Neon Progress Bar Sync
  mainVideo.addEventListener("timeupdate", () => {
    if (mainVideo.duration) {
      const percentage = (mainVideo.currentTime / mainVideo.duration) * 100;
      progressFill.style.width = percentage + "%";
    }
  });

  // Click on Progress Bar to Scrub Video
  progressWrapper.addEventListener("click", e => {
    const rect = progressWrapper.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    mainVideo.currentTime = pos * mainVideo.duration;
  });
});

/* Link to make the contact form work */
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async e => {
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
