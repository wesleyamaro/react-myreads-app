import React from 'react';
import PropTypes from 'prop-types';
import CloudTags from '../../components/CloudTags';
import BooksBox from '../../components/BooksBox/';
import EmptySearch from './emptySearch';

import './index.sass';

const SearchPage = ({ booksOnSearch, onChangeMoveShelf, onChangeTagsInput, tagsOpened, onClickExpandTags, relatedBooks }) => {
	return(
		<div id="search-page" className="wrapper">
			<CloudTags
				keyOnSearch={booksOnSearch.query}
				tagsOpened={tagsOpened}
				onChangeTagsInput={onChangeTagsInput}
				onClickExpandTags={onClickExpandTags} />

			{
				booksOnSearch.books.length >= 1 ? (
					<div>
						<h1>{booksOnSearch.books.length} result(s) for "<span>{booksOnSearch.query}</span>"</h1>
						<ul className="search-page-results">
							{
								booksOnSearch.books.map(book => {
									return(
										<BooksBox
											key={book.id}
											book={book}
											onChangeMoveShelf={onChangeMoveShelf} />
									);
								})
							}
						</ul>
					</div>
				) : (
					<EmptySearch relatedBooks={relatedBooks} query={booksOnSearch.query} onChangeMoveShelf={onChangeMoveShelf} />
				)
			}
		</div>
	);
};

SearchPage.propTypes = {
	booksOnSearch: PropTypes.object.isRequired,
	onChangeMoveShelf: PropTypes.func.isRequired,
	onChangeTagsInput: PropTypes.func.isRequired,
	tagsOpened: PropTypes.bool.isRequired,
	onClickExpandTags: PropTypes.func.isRequired,
	relatedBooks: PropTypes.array.isRequired
};

export default SearchPage;
