import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BooksBox from '../../components/BooksBox/';
// import AliceCarousel from 'react-alice-carousel';
import './emptySearch.sass';

class EmptySearch extends Component {
	render() {
		const { query, relatedBooks, onChangeMoveShelf } = this.props;

		return(
			<div>
				<div className="no-results">
					<p>
						We could not find any results
						{query.length > 0 &&
							<span> for <strong>{query}</strong></span>
						}
					</p>
				</div>

				{relatedBooks && relatedBooks.length > 0 &&
					<div>
						<h1>You may be interested in</h1>
						<ul className="search-page-results">
							{
								relatedBooks.map(book => {
									return(
										<BooksBox key={book.id} book={book} onChangeMoveShelf={onChangeMoveShelf} />
									);
								})
							}
						</ul>
					</div>
				}
			</div>
		);
	}
}

EmptySearch.propTypes = {
	query: PropTypes.string.isRequired,
	relatedBooks: PropTypes.array.isRequired,
	onChangeMoveShelf: PropTypes.func.isRequired
};

export default EmptySearch;
