class Circle {
  radius = 1.0;

  constructor(radius = 1.0) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle1 = new Circle(5);
console.log(
  `Circle with radius ${circle1.getArea()} has an area of ${circle1
    .getArea()
    .toFixed(2)} square units`
);
console.log(
  `Circle with radius ${circle1.getCircumference()} has a circumference of ${circle1
    .getCircumference()
    .toFixed(2)} units`
);

const circle2 = new Circle(7);
console.log(
  `Circle with radius ${circle2.getArea()} has an area of ${circle2
    .getArea()
    .toFixed(2)} square units`
);
console.log(
  `Circle with radius ${circle2.getCircumference()} has a circumference of ${circle2
    .getCircumference()
    .toFixed(2)} units`
);
