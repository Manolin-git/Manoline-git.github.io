let img;
let x;

function setup() {
  img = loadImage("walker.png");
  const c = createCanvas(600, 330);
  c.parent("mainCanvas");
  background(255);
  x = 0;
}

function draw() {
  background(255);
  for (let i = 0; i < x; i++) {
    tint(255, 255 - 25 * x);
    image(
      img,
      width / 2 - img.width / 4 - (i * img.width) / 2,
      0,
      img.width / 2,
      img.height / 2
    );
    image(
      img,
      width / 2 - img.width / 4 + (i * img.width) / 2,
      0,
      img.width / 2,
      img.height / 2
    );
  }
}

function mouseClicked() {
  x += 1;
}
