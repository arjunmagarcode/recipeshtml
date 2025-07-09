console.log("Hi My name is Arjun Pun Magar");

function paint(color) {
  const circle = document.getElementById('circleId');

  // If the color is 'random', generate a random hex color
  if (color === 'random') {
    color = getRandomColor();
  }

  circle.style.backgroundColor = color;
  console.log("Color changed to:", color);
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
