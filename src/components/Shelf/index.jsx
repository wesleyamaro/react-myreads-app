import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmptyShelf from './emptyShelf';
import BooksBox from '../BooksBox/';

import './index.sass';

class Shelf extends Component {
	render() {
		const props = this.props;

		return(
			<div className="shelf">
				<h2>{props.title}</h2>
				<ul className={props.books.length >= 8 ? 'justify-between' : ''}>
					{
						props.books.length ? (
							props.books.map((book) => {
								return(
									<BooksBox key={book.id} book={book} onChangeMoveShelf={props.onChangeMoveShelf} />
								);
							})
						) : (
							<EmptyShelf />
						)
					}
				</ul>
			</div>
		);
	}
}

Shelf.propTypes = {
	title: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	onChangeMoveShelf: PropTypes.func.isRequired
};

export default Shelf;
