import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloudTags from '../../components/CloudTags';
import Shelf from '../../components/Shelf';

class HomePage extends Component {
	render() {
		const { tags, myBooks, onChangeMoveShelf } = this.props;

		return(
			<div className="wrapper">
				<CloudTags tags={tags} />

				<Shelf title="Currently reading" books={myBooks.currentlyReading} onChangeMoveShelf={onChangeMoveShelf} />
				<Shelf title="Want to read" books={myBooks.wantToRead} onChangeMoveShelf={onChangeMoveShelf} />
				<Shelf title="Have read" books={myBooks.read} onChangeMoveShelf={onChangeMoveShelf} />
			</div>
		);
	}
}

HomePage.propTypes = {
	myBooks: PropTypes.object.isRequired,
	onChangeMoveShelf: PropTypes.func.isRequired,
	tags: PropTypes.array.isRequired
};

export default HomePage;
