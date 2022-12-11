inputVar = "";
status = "";

function setup() {
    canvas = createCanvas(426, 240);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    inputVar = document.getElementById("object-input").value;
    console.log("object is" + inputVar);
  }

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
}

function draw() {
    image(video, 0, 0, 426, 240);
}