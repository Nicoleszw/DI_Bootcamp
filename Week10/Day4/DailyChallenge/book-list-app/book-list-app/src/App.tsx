import React, { useState } from 'react';
import { List } from './components/List';
import { Book } from './types/Book';

export default function App() {
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 2, title: '1984', author: 'George Orwell' },
  ]);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = () => {
    if (!title || !author) return;
    const newBook: Book = {
      id: books.length + 1,
      title,
      author,
    };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="app">
      <h1>📚 Book List</h1>
      
      <div className="add-book">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <List
        items={books}
        renderItem={(book) => (
          <div>
            <strong>{book.title}</strong> by {book.author}
          </div>
        )}
      />
    </div>
  );
}
