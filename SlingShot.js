///////////////////////////Code Started//////////////////////////////

// Made a class slingShot in js file with name here given as Slingshot
class Slingshot {

    //Used to constructor to construct the object  
    constructor(bodyA, pointB) {

        //Created a variable options and set it's  values
        var options = {

            //Set bodyA as bodyA only
            bodyA: bodyA,

            //Set poinB as pointB only
            pointB: pointB,

            //Set stiffness as 0.04 units
            stiffness: 0.04,

            //Set length as 1 units
            length: 1

        }

        //Created constraint through options of this.sling
        this.sling = Constraint.create(options);

        //this.pointB value is set as pointB
        this.pointB = pointB;

        //Added this.sling to World
        World.add(world, this.sling);

    }

    //Created attach function with passed a value (body)//
    attach(body) {

        //Set this.sling ' s body A to be body
        this.sling.bodyA = body;

    }

    //Created fly function
    fly() {

        //Set this.sling ' s body A to be null
        this.sling.bodyA = null;

    }

    //Display the object using display function
    display() {

        //Put a if condition  ;the bodyA is there then what should happen
        if (this.sling.bodyA) {

            //pointA stores this.sling ' s position
            var pointA = this.sling.bodyA.position;

            //pointB stores this.pointB 's position
            var pointB = this.pointB;

            //Set stroke weight as 4 pixels
            strokeWeight(4);

            //Set stroke outline as "turquoise"
            stroke("turquoise");

            //Displayed slingshot as line
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }

    }

}

///////////////////////////////Code Ended//////////////////////////////////