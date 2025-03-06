document.addEventListener("DOMContentLoaded", function () {
  // Código para los corazones
  const heartsContainer = document.getElementById("hearts");
  const colors = ["#d23669", "#f8b195", "#e66465", "#9198e5"];

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Random position, size, and color
    const startPosX = Math.random() * 100;
    const size = Math.random() * 10 + 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const duration = Math.random() * 5 + 5;
    const translateX = (Math.random() - 0.5) * 200;

    heart.style.left = `${startPosX}%`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.backgroundColor = color;
    heart.style.animationDuration = `${duration}s`;
    heart.style.setProperty("--tx", `${translateX}px`);

    heartsContainer.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  // Create hearts periodically
  setInterval(createHeart, 800);

  // Create some initial hearts
  for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 300);
  }

  // Código para los pétalos
  const petalsContainer = document.getElementById("petals-container");
  const petalColors = ["#ff8da1", "#ffa6c9", "#ff6b81", "#ff4d6d", "#ffb6c1"];

  function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    // Random position and properties
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const size = Math.random() * 20 + 30;
    const aspectRatio = 0.5 + Math.random() * 0.3;
    const color = petalColors[Math.floor(Math.random() * petalColors.length)];
    const rotation = Math.random() * 360;
    const duration = Math.random() * 4 + 6;

    petal.style.left = `${posX}%`;
    petal.style.top = `${posY}%`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * aspectRatio}px`;
    petal.style.backgroundColor = color;
    petal.style.setProperty("--rotation", `${rotation}deg`);
    petal.style.animation = `fadeInOut ${duration}s ease-in-out`;
    petal.style.transform = `rotate(${rotation}deg)`;

    petalsContainer.appendChild(petal);

    // Remove petal after animation completes
    setTimeout(() => {
      petal.remove();
    }, duration * 1000);
  }

  // Create petals periodically
  setInterval(createPetal, 400);

  // Create some initial petals with immediate visibility
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const petal = document.createElement("div");
      petal.classList.add("petal");

      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const size = Math.random() * 20 + 30;
      const aspectRatio = 0.5 + Math.random() * 0.3;
      const color = petalColors[Math.floor(Math.random() * petalColors.length)];
      const rotation = Math.random() * 360;
      const duration = Math.random() * 4 + 6;

      petal.style.left = `${posX}%`;
      petal.style.top = `${posY}%`;
      petal.style.width = `${size}px`;
      petal.style.height = `${size * aspectRatio}px`;
      petal.style.backgroundColor = color;
      petal.style.opacity = "0.8"; // Inicialmente visible
      petal.style.setProperty("--rotation", `${rotation}deg`);
      petal.style.animation = `fadeInOut ${duration}s ease-in-out`;
      petal.style.transform = `rotate(${rotation}deg)`;

      petalsContainer.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, duration * 1000);
    }, i * 100);
  }
});