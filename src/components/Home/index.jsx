import React, { Component } from 'react';
import CloudTags from '../CloudTags';
import Shelf from '../Shelf';
import * as BooksAPI from '../../api/BooksAPI';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			myBooks: {
				currentlyReading: [],
				read: [],
				wantToRead: []
			}
		};

		this.onChangeMoveShelf = this.onChangeMoveShelf.bind(this);
	}

	componentDidMount() {
		BooksAPI.getAll().then(obj => {
			this.setState({
				myBooks: {
					currentlyReading: obj.filter(val => val.shelf === 'currentlyReading'),
					read: obj.filter(val => val.shelf === 'read'),
					wantToRead: obj.filter(val => val.shelf === 'wantToRead')
				}
			});
		});
	}

	onChangeMoveShelf(e, book, oldShelf) {
		e.preventDefault();
		const newShelf = e.target.value;

		BooksAPI.update(book, newShelf).then(() => {
			BooksAPI.get(book.id).then((newBook) => {
				this.setState(prevState => {
					prevState.myBooks[newShelf].push(newBook);
					prevState.myBooks[oldShelf] = prevState.myBooks[oldShelf].filter(obj => obj.id !== book.id);
				});
			});
		});
	}

	render() {
		const state = this.state;

		return(
			<div className="wrapper">
				<CloudTags />

				<Shelf title="Currently reading" books={state.myBooks.currentlyReading} onChangeMoveShelf={this.onChangeMoveShelf} />
				<Shelf title="Want to read" books={state.myBooks.wantToRead} onChangeMoveShelf={this.onChangeMoveShelf} />
				<Shelf title="Have read" books={state.myBooks.read} onChangeMoveShelf={this.onChangeMoveShelf} />
			</div>
		);
	}
}

export default Home;
