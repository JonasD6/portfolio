(function () {
  const finePointer = window.matchMedia("(pointer: fine)");
  if (!finePointer.matches) return;

  const cursor = document.createElement("div");
  const dot = document.createElement("div");

  cursor.className = "custom-cursor";
  dot.className = "custom-cursor-dot";

  document.body.append(cursor, dot);
  document.body.classList.add("cursor-enabled");

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  document.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;

    dot.style.left = x + "px";
    dot.style.top = y + "px";
  });

  function animate() {
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    requestAnimationFrame(animate);
  }

  animate();
})();