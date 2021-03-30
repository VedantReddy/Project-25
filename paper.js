class Paper extends BaseClass {
    constructor(x,y) {
        var options = {
            isStatic : false,
        }
        
        super(x,y,100,100);

        this.image = loadImage("paper.png");
    }
}