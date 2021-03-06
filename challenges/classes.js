// 1. Copy and paste your prototype in here and refactor into class syntax.
// function CuboidMaker(info) {
//     this.length = info.length;
//     this.width = info.width;
//     this.height = info.height;
// }
// CuboidMaker.prototype.volume = function() {
//     return this.length * this.width * this.height;
// }

// CuboidMaker.prototype.surfaceArea = function() {
//     return 2 * (this.length * this.width + this.length * this.height + this.width*this.height);
// }

class CuboidMaker {
    constructor(info) {
        this.length = info.length;
        this.width = info.width;
        this.height = info.height;
    }
    volume() {
        return this.length * this.width * this.height;
        
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width*this.height);
        
    }
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(data) {
        super(data);
        //this.side = data.side could also be used since a cube has 3 equal length, width and height properties
    }
    volume() {
        return this.length * this.width * this.height;
        //return this.side * this.side * this.side 
    }
    surfaceArea() {
        return 6 * (this.width * this.height);
        //return 6 * this.side**2;
    }
}

const cube = new CubeMaker({length: 3, width: 3, height: 3});
//const cube = newCubeMaker({side: 3});
console.log(cube.volume());
console.log(cube.surfaceArea());