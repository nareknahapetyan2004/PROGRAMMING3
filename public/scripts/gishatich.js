

class Gishatic
{
	constructor(x,y,ind)
	{
		this.index = ind;
		this.x = x;
		this.y = y;
		this.multiply = 0;
		this.eatCount = 0;
		this.energy1 = 25; 

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
		    [this.x + 1, this.y + 1],

			[this.x    , this.y    ],
			
			[this.x - 2, this.y - 2],
			[this.x - 2, this.y - 1],
			[this.x - 2, this.y + 2],
			[this.x - 2, this.y + 1],
			[this.x - 2, this.y    ],
			[this.x + 2, this.y - 2],
			[this.x + 2, this.y - 1],
			[this.x + 2, this.y + 2],
			[this.x + 2, this.y + 1],
			[this.x + 2, this.y    ],
			[this.x - 1, this.y + 2],
			[this.x - 1, this.y - 2],
			[this.x + 1, this.y - 2],
			[this.x + 1, this.y + 2],
			[this.x    , this.y + 2],
			[this.x    , this.y - 2]
		];
	}

	getDirections(t)
	{
		this.newDirections();
		var found = [];

		for(var i in this.directions)
		{
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length)
			{
				if(matrix[y][x] == t)
				{
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	move()
	{
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		

		if(cord)
		{
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
		} else {
			var xotCord = this.getDirections(1);
			var cord1 = random(xotCord);
			
			if(cord1)
			{
				var x = cord1[0];
				var y = cord1[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x] = 1;

				this.x = x;
				this.y = y;
			}
		}


	}
	


	eat()
	{
		
		//mard utelu mas
		var mardCord = this.getDirections(4);
		var cord1 = random(mardCord);

		if(cord1)
		{
			this.multiply++;
			var x = cord1[0];
			var y = cord1[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;	

			this.x = x;
			this.y = y;

			for(var i in mardArr)
			{			
				if(x == mardArr[i].x && y == mardArr[i].y)
				{
      				mardArr.splice(i,1);
				}
			} 
			if(this.multiply == 3){
				this.mul();
			}			
		}
		else {
			//xotaker utelu mas
			var xotakerCord = this.getDirections(2);
			var cord = random(xotakerCord);

			if(cord)
			{
				
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x] = 0;	

				this.x = x;
				this.y = y;

				
			if(this.multiply == 3)
			{
				this.mul();
				this.multiply = 0;		
			}
		

		 
			}
			else 
			{
				this.move();
				this.energy1--;
				if(this.energy1 == 0)
				{
					this.die();
				}
						
			}	
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

			
			  
			var norgazan = new Gishatic(x,y,this.index);
			gazanArr	.push(norgazan);

			matrix[y][x] = 1;
			this.multiply = 0;

		}
	}

	die()
	{
		matrix[this.y][this.x] = 0;
		for(var i in gazanArr)
		{			
			if(this.x == gazanArr[i].x && this.y == gazanArr[i].y)
			{
				gazanArr.splice(i,1);
				
			}
		} 	
	}	
}	







