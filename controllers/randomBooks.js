const { faker } = require("@faker-js/faker");
const { generateISBN13 } = require("../service/isbn");
const { generateFakeReviews } = require("../service/reviewGeerator");


exports.getRandomBooks = async (req, res) => {

  try {
    const { quantity = 20, seed = 12345 } = req.body;
    faker.seed(Number(seed));
    const books = [];

    for (let i = 0; i < quantity; i++) {
      const title = faker.book.title();

      books.push({
        title,
        author: faker.person.fullName(),
        genre: faker.book.genre(),
        publishedYear: faker.date.past().getFullYear(),
        isbn: generateISBN13(),
        review: generateFakeReviews(5),
      });
    }

    res.json(books);
  } catch (error) {
    console.error("Unexpected server error:", error);
    res.status(500).json({ message: "Server error" });
  }
};