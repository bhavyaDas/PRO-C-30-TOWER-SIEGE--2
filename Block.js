///////////////////////////Code Started//////////////////////////////

// Made a class Block in js file with name here given as Block
class Block {

  //Used to constructor to construct the object
  constructor(x, y, width, height) {

    //Created a variable options and set it's  values
    var options = {

      //Set restitution as 0.4
      restitution: 0.4,

      //Set friction as 0.0
      friction: 0.0,

    }

    //Created a property this.visiblity and set visiblity as 255
    this.visiblity = 225;

    //Made a rectangular body inside this.body
    this.body = Bodies.rectangle(x, y, width, height, options);

    //Set value this.width as equal width 
    this.width = width;

    //Set value this.height as equal to height
    this.height = height;

    //Loaded an image inside this.image
    this.image = loadImage("block.png")

    //Added this.body to world
    World.add(world, this.body);

  }

  //Display the object using display function
  display() {

    //Variable (pos) is equal to this.body ' s position
    var pos = this.body.position;

    //Put a condition if speed of this.body is lesser than 3
    if (this.body.speed < 3) {

      //Set imageMode as CENTER
      imageMode(CENTER);

      //Displayed physical object in rectangular shape
      image(this.image, pos.x, pos.y, this.width, this.height);

    }

    //Put a else 
    else {

      //Removed this.body from world if the condition is false
      World.remove(world, this.body);

      // Started the implementation of steps here
      push();

      //Decreasing this.visiblity's value 5 at every frame
      this.visiblity = this.visiblity - 5;

      //Used tint to make it transparent from a point till point of color
      tint(255, this.visiblity);

      //Displayed physical object in rectangular shape
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

      // Stopped the implementation of steps here
      pop();

    }

  }

}

///////////////////////////Code Ended//////////////////////////////