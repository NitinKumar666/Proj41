class umbrella{
    constructor(x,y,height,angle){
        super(x,y,20,height,angle);
    //    this.image = loadImage("sprites/Kakashi.gif");
        Matter.Body.setAngle(this.body, angle);

}
}