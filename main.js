// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];
for (let n = 0; n < 15; n++) {
  myArray.push(300);
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "#A963FF";
  ctx.strokeStyle = "#001A83";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Key Events
document.addEventListener("keydown", keydownHandler);
function keydownHandler(event) {
  console.log(event.code);
  if (event.code == "Space") {
    for (let i = 0; i < myArray.length; i++) {
      myArray[i] += Math.random() * 5;
    }
  } else if (event.code == "ArrowRight") {
    myArray.push(Math.random() * 600);
  } else if (event.code == "ArrowLeft") {
    myArray.pop();
  } else if (event.code == "ArrowUp") {
    myArray.unshift(Math.random() * 600);
  } else if (event.code == "ArrowDown") {
    myArray.shift();
  }

  let middleIndex = Math.floor(myArray.length / 2);

  if (event.code == "KeyU") {
    myArray.splice(middleIndex, 0, Math.random() * 600);
  } else if (event.code == "KeyT") {
    myArray.splice(middleIndex, 1);
  } else if (event.code == "KeyY") {
    for (let i = 0; i < myArray.length; i++) {
      myArray[i] += Math.random() * -10 + 5;
    }
  } else if (event.code == "KeyR") {
    myArray = [];
    for (let n = 0; n < 15; n++) {
      myArray.push(300);
    }
  } else if (event.code == "KeyH") {
    myArray = [];
    for (let i = 0; i < 100; i++) {
      myArray.push(300);
    }
  }
}
