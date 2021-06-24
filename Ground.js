///////////////////////////Code Started//////////////////////////////

// Made a class Ground in js file with name here given as Ground
class Ground {

    //Used to constructor to construct the object  
    constructor() {

        //Created a variable ground_options and set it's  values  
        var ground_options = {

            //Object is static of this class  
            isStatic: true

        }

        //Made a rectangular body inside this.ground
        this.ground = Bodies.rectangle(450, 390, 900, 20, ground_options)

        //Added this.ground to world
        World.add(world, this.ground);

    }

    //Display the object using display function
    display() {

        //Set no outline color
        noStroke();

        //Fill the shape
        fill(188, 67, 67);

        //Set Rect Mode as CENTER
        rectMode(CENTER);

        //Displayed physical object in rectangular shape
        rect(this.ground.position.x, this.ground.position.y, 900, 20);

    }

}

///////////////////////////Code Ended//////////////////////////////