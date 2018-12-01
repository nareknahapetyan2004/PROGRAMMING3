class Mard extends LivingCreature{
    constructor(x, y, ind) {
        super(x, y, ind);
        this.eatCount = 0;
        this.energy1 = 10;
    }

    move() {
        console.log(this.energy1);
        var xotCord = this.getDirections(1);
        var cord1 = random(xotCord);

        if (cord1) {
            var x = cord1[0];
            var y = cord1[1];

            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;

            this.x = x;
            this.y = y;
        }
        else {
            var emptyCord = this.getDirections(0);
            var cord = random(emptyCord);

            if (cord) {
                var x = cord[0];
                var y = cord[1];

                matrix[y][x] = 4;
                matrix[this.y][this.x] = 0;

                this.x = x;
                this.y = y;
            }
        }
    }



    eat() {
        var xotakerCord = this.getDirections(2);
        var cord1 = random(xotakerCord);

        if (cord1) {

            var x = cord1[0];
            var y = cord1[1];

            matrix[this.y][this.x] = 0;
            matrix[y][x] = 4;

            this.x = x;
            this.y = y;

            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }

            }
        }


		/*else if(this.getDirections(0).length != 0)
			{
				this.move();
			}

		else if(this.getDirections(3).length != 0)
		{
			this.move();
		}*/

        else {
            this.move();
            this.energy1--;
            if (this.energy1 == 0) {
                var xotakerCord = this.getDirections(1);
                var cord = random(xotakerCord);

                if (cord) {

                    var x = cord[0];
                    var y = cord[1];

                    matrix[this.y][this.x] = 0;
                    matrix[y][x] = 4;

                    this.x = x;
                    this.y = y;
                }

                this.die();
            }
        }
    }


    mul() {

    }

    die() {
        console.log("merav");
        matrix[this.y][this.x] = 0;
        for (var i in mardArr) {
            if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                mardArr.splice(i, 1);
            }
        }
    }
}
