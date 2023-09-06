class Movie {
  name = matharasapattinam;
  actor = arya;
  releaseYear = 2010;
  rating = 8.8;

  constructor(
    name = matharasapattinam,
    actor = arya,
    releaseYear = 2010,
    rating = 8.8
  ) {
    this.name = name;
    this.actor = actor;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getDetails() {
    return `Movie: ${this.name}, Actor: ${this.actor}, Year: ${this.releaseYear}, Rating: ${this.rating}`;
  }
}

const movie1 = new Movie("matharasapattinam", "arya", 2010, 8.8);
console.log(movie1.getDetails());

const movie2 = new Movie("The tall gross", "Tim Robbins", 1994, 9.3);
console.log(movie2.getDetails());
