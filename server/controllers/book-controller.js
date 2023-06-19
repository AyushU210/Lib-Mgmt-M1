const BookModel = require("../models/Books");

const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await BookModel.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json("No books found");
  }
  return res.status(200).json({ books });
};

const AddBook = async (req, res) => {
  const book = req.body;
  const newBook = new BookModel(book);
  await newBook.save();
  res.json(book);
};

const UpdateBook = async (req, res) => {
  const id = req.params.id;
  const { title, author, publisher, year, copies, image } = req.body;
  let book; //reason why i used let here is because const variable requires initializing
  try {
    book = await BookModel.findByIdAndUpdate(id, {
      title,
      author,
      publisher,
      year,
      copies,
      image,
    });
    await book.save().then(() => res.json(book));
  } catch (error) {
    console.log(error);
  }
};

const DeleteBook = (req, res) => {
  BookModel.findByIdAndDelete({ _id: req.params.id })
    .then(res.status(200).json("Delete Successfully"))
    .catch((err) => console.log(err));
};

const getBookById = async (req, res) => {
  BookModel.find({ _id: req.params.id }).then((result) => {
    res.json(result);
  });
};

const getBookByTitle = async (req, res) => {
  BookModel.find({ title: req.params.title }).then((result) => {
    res.json(result);
  });
};

exports.getAllBooks = getAllBooks;
exports.AddBook = AddBook;
exports.getBookById = getBookById;
exports.getBookByTitle = getBookByTitle;
exports.UpdateBook = UpdateBook;
exports.DeleteBook = DeleteBook;
