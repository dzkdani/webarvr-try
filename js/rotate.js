AFRAME.registerComponent("gesture-rotate", {
  init: function () {
    const el = this.el;
    let isDragging = false;
    let previousX;
    let isReady = false;

    // Wait for model to load
    el.addEventListener("model-loaded", () => {
      console.log("Model loaded");
      isReady = true;
    });

    // Wait for marker detection
    el.addEventListener("targetFound", () => {
      console.log("Marker found - gesture ready");
      isReady = true;
    });

    document.querySelector("a-scene").addEventListener("loaded", () => {
      console.log("Scene loaded");
    });

    window.addEventListener("pointerdown", (e) => {
      isDragging = true;
      previousX = e.clientX;
    });

    window.addEventListener("pointerup", () => {
      isDragging = false;
    });

    window.addEventListener("pointermove", (e) => {
      if (!isDragging || !isReady) return;

      const delta = e.clientX - previousX;
      previousX = e.clientX;

      const rot = el.getAttribute("rotation");
      rot.y += delta * 0.5;

      el.setAttribute("rotation", rot);
    });
  },
});
