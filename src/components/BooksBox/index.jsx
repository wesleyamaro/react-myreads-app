import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../../assets/images/no-book.jpg';

import './index.sass';

const BooksBox = ({ book, onChangeMoveShelf }) => {
	return(
		<li className="books-box">
			<div className="book-wrapper">
				<figure>
					<img
						src={book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noImage}
						alt={book.title} />
				</figure>

				<div className="book-description">
					<p className="book-title" title={book.title}>{book.title}</p>
					<p className="book-authors" title={book.authors}>{book.authors}</p>
				</div>
			</div>

			<div className="book-status">
				<select className="full"
					value={book.shelf ? book.shelf : 'none'}
					onChange={(e) => onChangeMoveShelf(e, book, book.shelf)}>
					<option value="" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		</li>
	);
};

BooksBox.propTypes = {
	book: PropTypes.object.isRequired,
	onChangeMoveShelf: PropTypes.func.isRequired
};

export default BooksBox;
