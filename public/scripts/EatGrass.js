
class Eatgrass
{
	constructor(x,y,ind)
	{
		this.index = ind;
		this.x = x;
		this.y = y;
		this.multiply = 0;
		this.eatCount = 0;
		this.energy = 3;
		
	}

	newDirections()
	{
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}


	getDirections(t)
	{
		this.newDirections();
        return super.getDirections(num);
	}

	


	move()
	{
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
			

			if(cord)
			{
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 2;

				matrix[this.y][this.x] = 0;

				this.x = x;
				this.y = y;

			}
	}
	


	eat()
	{
		
		var emptyCord = this.getDirections(1);

		var cord = random(emptyCord);

		if(cord)
		{
			this.multiply++;
			
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 2;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			

			for(var i in xotArr)
			{			
				if(x == xotArr[i].x && y == xotArr[i].y)
				{
      				xotArr.splice(i,1);
				}
			} 
			if(this.multiply == 10)
			{
				this.mul()
				this.multiply = 0;
			}

		}
		else 
		{
			this.move();
			this.energy--;
			if(this.energy < 3)
			{
				this.die();
				this.energy = 10;
			}
			//console.log(this.energy);
		}
	}
	
    mul()
    {
		var emptyCord = this.getDirections(0);

		var cord = random(emptyCord);
		if(cord)
		{
			var x = cord[0];
			var y = cord[1];

			this.multiply++;
			  
			var norXotaker = new Eatgrass(x,y,this.index);
			eatArr.push(norXotaker);

			matrix[y][x] = 1;
			this.multiply = 0;
		}
	}
	die()
	{
		matrix[this.y][this.x] = 0;
		for(var i in eatArr)
		{			
			if(this.x == eatArr[i].x && this.y == eatArr[i].y)
			{
				eatArr.splice(i,1);
			}
		} 	
	}
	
} 