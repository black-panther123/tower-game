class polygon
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		  
			
			
			}
			
			
		this.x=x;
		this.y=y;
		this.r=r;
		
	this.image=loadImage("images/polygon.png")
		this.polygon=Bodies.circle(this.x, this.y, this.r, options)

		World.add(world, this.polygon);

    }

    
    display(){
push()
imageMode(CENTER)
//image(polygon_img,polygo.positoin.x,polygon.positoin.y,40,40)

pop()






    }
}