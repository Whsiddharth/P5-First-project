function preload(){
  
}

function setup() {
  canvas = createCanvas(450, 300);
  canvas.position(110,250);
  video=createCapture(VIDEO);
  video.hide();
  
}

function draw() {
  image(video,125,50,200,200);
  fill('#ffc2d7');
  rect(25,5, 400,20);
  rect(25,25,20,260);
  rect(405,25,20,260);
  rect(25,275, 400,20);
  fill('#c2fff4');
  circle(35,25,50);
  circle(415,25,50);
  circle(415,275,50);
  circle(35,275,50);
}
