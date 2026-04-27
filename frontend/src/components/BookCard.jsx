import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card">
      <img
        src={book.imageUrl || "https://via.placeholder.com/400x220?text=Book"}
        alt={book.title}
        className="card-image"
      />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
<p>Genre: {book.genre}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-book/${book._id}`}>Edit</Link>
        <button onClick={() => onDelete(book._id)}>
  Delete
</button>
      </div>
    </div>
  );
}

export default BookCard;
