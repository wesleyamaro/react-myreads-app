import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/';
import Footer from '../Footer/';
import HomePage from '../../pages/Home/';
import SearchPage from '../../pages/Search/';
import * as BooksAPI from '../../api/booksAPI';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			myBooks: {
				currentlyReading: [],
				read: [],
				wantToRead: []
			},
			booksOnSearch: {
				query: '',
				books: []
			}
		};

		this.onChangeMoveShelf = this.onChangeMoveShelf.bind(this);
		this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
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
			book.shelf = newShelf;

			this.setState(prevState => {
				if(newShelf !== 'none')
					prevState.myBooks[newShelf].push(book);

				if(oldShelf)
					prevState.myBooks[oldShelf] = prevState.myBooks[oldShelf].filter(obj => obj.id !== book.id);
			});
		});
	}

	onChangeSearchInput(e, history) {
		let val = e.target.value;

		if(val.length >= 1){
			BooksAPI.search(val, 30).then((res) => {
				if(res !== undefined) {
					this.setState({
						booksOnSearch: {
							query: val,
							books: res ? res : res.items
						}
					});

					if(history.location.pathname !== '/search')
						history.push('/search');
				}
			});
		}
	}

	render() {
		const { myBooks, booksOnSearch } = this.state;

		return(
			<div>
				<Header onChangeSearchInput={this.onChangeSearchInput} />

				<main>
					<Route exact path="/" render={() => (
						<HomePage
							myBooks={myBooks}
							onChangeMoveShelf={this.onChangeMoveShelf} />
					)}/>

					<Route path="/search" render={() => (
						<SearchPage
							booksOnSearch={booksOnSearch}
							onChangeMoveShelf={this.onChangeMoveShelf} />
					)}/>
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
