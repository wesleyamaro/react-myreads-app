import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloudTags from '../../components/CloudTags';
import BooksBox from '../../components/BooksBox/';
import EmptySearch from './emptySearch';

import './index.sass';

class SearchPage extends Component {
	render() {
		const { booksOnSearch, onChangeMoveShelf } = this.props;

		return(
			<div id="search-page" className="wrapper">
				<CloudTags />

				{
					booksOnSearch.books.length >= 1 ? (
						<div>
							<h1>{booksOnSearch.books.length} result(s) for "<span>{booksOnSearch.query}</span>"</h1>
							<ul className={`search-page-results ${booksOnSearch.books.length >= 8 ? 'justify-between' : ''}`}>
								{
									booksOnSearch.books.map(book => {
										return(
											<BooksBox key={book.id} book={book} onChangeMoveShelf={onChangeMoveShelf} />
										);
									})
								}
							</ul>
						</div>
					) : (
						<EmptySearch query={booksOnSearch.query} />
					)
				}
			</div>
		);
	}
}

SearchPage.propTypes = {
	booksOnSearch: PropTypes.object.isRequired,
	onChangeMoveShelf: PropTypes.func.isRequired
};

export default SearchPage;
