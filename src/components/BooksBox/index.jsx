import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.sass';

class BooksBox extends Component {
	render() {
		const props = this.props;

		return(
			<li>
				<div className="book-wrapper">
					<figure>
						<img src={props.book.imageLinks.smallThumbnail} alt={props.book.title} />
					</figure>

					<div className="book-description">
						<p className="book-title" title={props.book.title}>{props.book.title}</p>
						<p className="book-authors" title={props.book.authors}>{props.book.authors}</p>
					</div>
				</div>

				<div className="book-status">
					<select className="full" value={props.book.shelf} onChange={(e) => props.onChangeMoveShelf(e, props.book, props.book.shelf)}>
						<option value="none" disabled>Move to...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</li>
		);
	}
}

BooksBox.propTypes = {
	book: PropTypes.object.isRequired,
	onChangeMoveShelf: PropTypes.func.isRequired
};

export default BooksBox;
