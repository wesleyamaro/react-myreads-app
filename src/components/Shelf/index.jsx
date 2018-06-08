import React from 'react';
import PropTypes from 'prop-types';
import EmptyShelf from './emptyShelf';
import BooksBox from '../BooksBox/';

import './index.sass';

const Shelf = ({ books, title, onChangeMoveShelf }) => {
	return(
		<div className="shelf">
			<h2>{title}</h2>
			<ul>
				{
					books.length ? (
						books.map((book) => {
							return(
								<BooksBox key={book.id} book={book} onChangeMoveShelf={onChangeMoveShelf} />
							);
						})
					) : (
						<EmptyShelf />
					)
				}
			</ul>
		</div>
	);
};

Shelf.propTypes = {
	title: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	onChangeMoveShelf: PropTypes.func.isRequired
};

export default Shelf;
