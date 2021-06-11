class Base{

constructor(x, y,w,h) {

    this.image = loadImage("base.png")
    

    var option = {

      restitution: 0.68,
      density: 1,
      friction: 1
    }

    this.body = Bodies.rectangle(x, y, w, h, option);
    this.width = w;
    this.height = h;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("red");
    strokeWeight(5);
    stroke("white")
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }}