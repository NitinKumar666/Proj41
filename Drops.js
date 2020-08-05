class drops
{
    constructor(x,y,height,angle)
     {
        super(x,y,20,height,angle);
       this.image = loadImage("sprites/Kakashi.gif");
        Matter.Body.setAngle(this.body, angle);
        ellipse(2,3);

        var maxDrops=100;
    
        for(var i = 0; i<maxDrops; i++ )
        {
       drops.push(new createDrop(random(0,400),(random(0,400))));
        }

}
}
