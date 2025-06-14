const BooksService = require('./books.service');

// const MongoLibStub = {
//   getAll: () => [...fakeBooks],
// };

// const fakeBooks = [
//   {
//     _id: '1',
//     name: 'The Great Gatsby',
//   },
// ];

// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation( () => MongoLibStub));

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks', () => {
    test('should return a list of books', async () => {
      const books = await service.getBooks();
      console.log(books);
      expect(books.length).toEqual(1);
    });
  });

  describe('Test for createBook', () => {
    test('should return a createdbook', async () => {
      const newBook = {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
      };
      const book = await service.createBook(newBook);
      console.log(book);
      expect(book).toBeDefined();
      expect(book._id).toBeDefined();
      expect(book.title).toEqual(newBook.title);
    });
  });
});