const images = {
  1: [
    "assets/project1-1.png",
    "assets/project1-2.png",
    "assets/project1-3.png",
    "assets/project1-4.png",
    "assets/project1-5.png",
    "assets/project1-6.png"
  ],
  2: [
    "assets/project2-1.png",
    "assets/project2-2.png",
    "assets/project2-3.png",
    "assets/project2-4.png",
    "assets/project2-5.png"
  ],
  3: [
    "assets/project3-1.jpg",
    "assets/project3-2.jpg",
    "assets/project3-3.jpg",
    "assets/project3-4.jpg",
    "assets/project3-5.jpg",
    "assets/project3-6.jpg"
  ],
  4: [
    "assets/project4-1.png",
    "assets/project4-2.png",
    "assets/project4-3.png",
    "assets/project4-4.png",
    "assets/project4-5.png",
    "assets/project4-6.png",
    "assets/project4-7.png"
  ]
};

const index = { 1: 0, 2: 0, 3: 0, 4: 0 };

function setSlide(project, newIndex) {
  index[project] = (newIndex + images[project].length) % images[project].length;
  showSlide(project);
}

function updateCarouselMeta(project) {
  const counterEl = document.getElementById("carouselCounter" + project);
  if (counterEl) {
    counterEl.textContent = index[project] + 1 + " / " + images[project].length;
  }

  const dots = document.querySelectorAll('[data-project-dot="' + project + '"]');
  dots.forEach(function (dot, dotIndex) {
    dot.classList.toggle("active", dotIndex === index[project]);
  });
}

function initDots(project) {
  const dotsContainer = document.getElementById("carouselDots" + project);
  if (!dotsContainer) {
    return;
  }

  dotsContainer.innerHTML = "";

  images[project].forEach(function (_, i) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("aria-label", "Ga naar afbeelding " + (i + 1));
    dot.setAttribute("data-project-dot", String(project));
    dot.addEventListener("click", function () {
      setSlide(project, i);
    });
    dotsContainer.appendChild(dot);
  });
}

function showSlide(project) {
  const imageEl = document.getElementById("carousel" + project);
  if (!imageEl) {
    return;
  }

  imageEl.src = images[project][index[project]];
  updateCarouselMeta(project);
}

function nextSlide(project) {
  setSlide(project, index[project] + 1);
}

function prevSlide(project) {
  setSlide(project, index[project] - 1);
}

document.addEventListener("DOMContentLoaded", function () {
  Object.keys(images).forEach(function (projectKey) {
    const project = Number(projectKey);
    initDots(project);
    showSlide(project);
  });
});
