import React from 'react';
import PropTypes from 'prop-types';
import CloudTags from '../../components/CloudTags';
import Shelf from '../../components/Shelf';

const HomePage = ({ myBooks, onChangeTagsInput, onChangeMoveShelf, tagsOpened, onClickExpandTags }) => {
	return(
		<div className="wrapper">
			<CloudTags tagsOpened={tagsOpened} onChangeTagsInput={onChangeTagsInput} onClickExpandTags={onClickExpandTags} />

			<Shelf title="Currently reading" books={myBooks.currentlyReading} onChangeMoveShelf={onChangeMoveShelf} />
			<Shelf title="Want to read" books={myBooks.wantToRead} onChangeMoveShelf={onChangeMoveShelf} />
			<Shelf title="Have read" books={myBooks.read} onChangeMoveShelf={onChangeMoveShelf} />
		</div>
	);
};

HomePage.propTypes = {
	myBooks: PropTypes.object.isRequired,
	onChangeMoveShelf: PropTypes.func.isRequired,
	onChangeTagsInput: PropTypes.func.isRequired,
	tagsOpened: PropTypes.bool.isRequired,
	onClickExpandTags: PropTypes.func.isRequired
};

export default HomePage;
