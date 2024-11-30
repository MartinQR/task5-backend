const { faker } = require("@faker-js/faker");


const generateFakeReviews = (count) => {
  const reviews = [];

  for (let i = 0; i < count; i++) {
    const adjective = faker.word.adjective();
    const noun = faker.word.noun();
    const verb = faker.word.verb();
    const adverb = faker.word.adverb();
    const preposition = faker.word.preposition();
    const conjunction = faker.word.conjunction();
    const interjection = faker.word.interjection();

    const review = `I ${verb} the ${adjective} ${noun} ${adverb}. It is ${preposition} my expectations, ${conjunction} I would highly recommend it! ${interjection}`;

    reviews.push(review);
  }

  return reviews;
};

module.exports = {
  generateFakeReviews
};