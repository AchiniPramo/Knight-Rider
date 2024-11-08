$(document).ready(function () {
  const lights = $(".light");
  let currentLight = -1;
  let direction = "RIGHT";
  let intervalId;

  function updateLight() {
    lights.css("background", "black").css("opacity", "0.2");

    if (direction === "RIGHT") {
      currentLight++;
      if (currentLight >= lights.length - 1) {
        direction = "LEFT";
      }
    } else {
      currentLight--;
      if (currentLight <= 0) {
        direction = "RIGHT";
      }
    }

    lights.eq(currentLight).css("background", "red").css("opacity", "1");
  }

  $(".start").on("click", function () {
    console.log("Start button clicked");
    if (!intervalId) {
      intervalId = setInterval(updateLight, 100);
    }
  });

  $(".stop").on("click", function () {
    console.log("Stop button clicked");
    clearInterval(intervalId);
    intervalId = null;
    lights.css("background", "black").css("opacity", "0.2");
  });
});
