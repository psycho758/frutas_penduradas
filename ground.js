class Ground
{
    constructor(x, y, larg, alt)
    {
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, larg, alt,options);
        this.larg = larg;
        this.alt = alt;
        World.add(world, this.body);
    }

    show()
    {
        var pos = this.body.position;
        
        push();
        stroke("white");
        fill("black");
        rect(pos.x, pos.y, this.larg, this.alt);
        pop();
    }

}