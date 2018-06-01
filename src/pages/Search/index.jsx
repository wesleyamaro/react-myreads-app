import React, { Component } from 'react';
import CloudTags from '../../components/CloudTags';
import BooksBox from '../../components/BooksBox/';
import * as BooksAPI from '../../api/booksAPI';
import * as TagsAPI from '../../api/tagsAPI';


import './index.sass';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tags: [],
			myBooks: {
				currentlyReading: [],
				read: [],
				wantToRead: []
			}
		};
	}

	render() {
		return(
			<div id="search-page" className="wrapper">
				<CloudTags tags={this.state.tags} />

				<ul className="search-page-results">
					{/* <BooksBox /> */}
				</ul>
			</div>
		);
	}
}

export default Home;
