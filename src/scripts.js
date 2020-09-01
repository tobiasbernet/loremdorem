var master = document.getElementById("lorem")
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
var res = lorem.split("");
var text = "";
var i;
var backgroundColors = ["#FFFF00", "#1919A6", "#2121DE"];
var foregroundColors = ["#DEA185", "#FD0000", "#00FF00"];

for (i = 0; i < res.length; i++) {
  text += "<span>" + res[i] + "</span>";
}

function getColor(colors) {
  maxIndex = colors.length;
  index = Math.floor(Math.random() * maxIndex);
  return colors[index];
}

master.innerHTML = text;
master.style.backgroundColor = getColor(foregroundColors);
document.body.style.backgroundColor = getColor(backgroundColors);
