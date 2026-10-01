const form = document.getElementById("font-form");
const fontsize = document.getElementById("fontsize");
const fontcolor = document.getElementById("fontcolor");

function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    const parts = cookie.split("=");

    if (parts[0] === name) {
      return parts[1];
    }
  }

  return null;
}

function applyPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      savedFontSize
    );

    fontsize.value = parseInt(savedFontSize);
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor
    );

    fontcolor.value = savedFontColor;
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const size = fontsize.value;
  const color = fontcolor.value;

  document.cookie = `fontsize=${size}px; path=/`;
  document.cookie = `fontcolor=${color}; path=/`;

  document.documentElement.style.setProperty(
    "--fontsize",
    size + "px"
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    color
  );
});

applyPreferences();