function setup() {
createCanvas(800,600);//p1 Changes the width, p2 changes the height
}
var xLocation =100;
function draw() {
//background(mouseX ,mouseY ,14);// p1 changes the color (if we have three parameters they are red, blue, and green)
xLocation=xLocation +1
if(xLocation>700){
  rect(0,0,100,100)
xLocation=100;
}
rect(xLocation,100,50,50);//p1 moves the rectangle on the x axis, p2 moves the rectangle on the y axis, p3 width, p4 height
}
