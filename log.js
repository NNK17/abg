class Log extends Base {



    constructor(x, y, width, angle) {



        super(x, y, width, 25)

        this.image = loadImage("wood2.png")



        Matter.Body.setAngle(this.body, angle)


    }
    display() {
        super.display()
    }
}