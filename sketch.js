

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}
for (var k = 0; k <= width ; k = k + 80){
  devision.push(new Devision(k,height-devisionHeight/2,10,devisionHeight));
}

function draw() {
  background("red");  
  drawSprites();
}