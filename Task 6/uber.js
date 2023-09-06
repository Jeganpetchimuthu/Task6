class UberPricingCalculator {
  constructor(baseFare, costPerKilometer, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distanceInKm, timeInMinutes) {
    const distanceCost = distanceInKm * this.costPerKilometer;
    const timeCost = timeInMinutes * this.costPerMinute;
    const totalPrice = this.baseFare + distanceCost + timeCost;
    return totalPrice;
  }
}
const calculator = new UberPricingCalculator(5, 1.5, 0.25);
const distance = 10;
const time = 20;

const price = calculator.calculatePrice(distance, time);
console.log(`The estimated Uber price is $${price.toFixed(2)}`);
