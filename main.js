inputVar = "";
status = "";
objects = [];

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
    image(video, 0, 0, 480, 380);
    if(status != "")
    {
        objectDetector.detect(gotResult);
        video.stop();
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("object_found").innerHTML = "object found";
   
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            var synth = window.speechSynthesis;
            speak_data = objects[i].label;
        }
    }
}
function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
  

