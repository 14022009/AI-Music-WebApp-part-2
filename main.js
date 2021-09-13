console.log("JS Loaded");
// song1 = "";
song1 = "";
song2 = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;
//
function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);

}

function modelloaded() {
    console.log("Model Loaded");
}

function draw() {
}

function gotposes() {
    
}