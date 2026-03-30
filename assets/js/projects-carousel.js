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
  ]
};

const index = { 1: 0, 2: 0, 3: 0 };

function showSlide(project) {
  document.getElementById("carousel" + project).src = images[project][index[project]];
}

function nextSlide(project) {
  index[project] = (index[project] + 1) % images[project].length;
  showSlide(project);
}

function prevSlide(project) {
  index[project] = (index[project] - 1 + images[project].length) % images[project].length;
  showSlide(project);
}
