// generation of random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// generate random integer from 0 to 99
function getRandomInteger() {
  return Math.floor(Math.random() * 100);
}

function onLoadFunction() {
  // creation of child div elements
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");

    // Add on hover listener
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = getRandomColor();
      div.textContent = getRandomInteger();
    });

    // Append the div to grid-layout
    document.getElementById("grid-layout").appendChild(div);
  }
}

function handleGridClick() {
  alert("LOL!");
}

// run function on load
window.onload = () => {
  onLoadFunction();
};
