const { faker } = require("@faker-js/faker");
faker.locale = 'es';

exports.getRandomBooks = (req, res) => {

  try {
    const books = [];
    const numberOfBooks = 10;

    for (let i = 0; i < numberOfBooks; i++) {
      books.push({
        title: faker.book.title(),
        author: faker.person.fullName(),
        genre: faker.book.genre(),
        publishedYear: faker.date.past().getFullYear(),
        description: faker.lorem.paragraph(),
      });
    }


    res.json(books);

  } catch (error) {
    console.error("Unexpected server error:", error);
    res.status(500).json({ message: "Server error" });
  }
};