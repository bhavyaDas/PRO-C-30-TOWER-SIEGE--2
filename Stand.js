///////////////////////////Code Started//////////////////////////////

// Made a class Stand in js file with name here given as Stand
class Stand {

  //Used to constructor to construct the object
  constructor(x, y, width, height) {

    //Created a variable options and set it's  values
    var options = {

      //Object is static of this class
      isStatic: true

    }

    //Made a rectangular body inside this.body
    this.body = Bodies.rectangle(x, y, width, height, options);

    //Set value this.width as equal width
    this.width = width;

    //Set value this.height as equal to height
    this.height = height;

    //Added this.body to world
    World.add(world, this.body);

  }

  //Display the object using display function
  display() {

    //Variable (angle) is equal to this.body ' s angle
    var angle = this.body.angle;

    // Started the implementation of steps here
    push();

    //Translated this. body 's X position and Y also//
    translate(this.body.position.x, this.body.position.y);

    //Rotated the angle of the figure
    rotate(angle);

    //rect Mode is set as CENTER
    rectMode(CENTER);

    //Displayed physical object in rectangular shape
    rect(0, 0, this.width, this.height);

    //Stopped the implementation of steps here
    pop();

  }

}

/////////////////////////////////Code Ended//////////////////////////