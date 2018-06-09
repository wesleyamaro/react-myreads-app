import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/';
import Footer from '../Footer/';
import HomePage from '../../pages/Home/';
import SearchPage from '../../pages/Search/';
import * as BooksAPI from '../../api/booksAPI';
import * as RelatedBooks from '../../api/relatedBooksAPI';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			myBooks: {
				currentlyReading: [],
				read: [],
				wantToRead: [],
				related: []
			},
			booksOnSearch: {
				query: '',
				books: []
			},
			tagsOpened: false
		};

		this.onChangeMoveShelf = this.onChangeMoveShelf.bind(this);
		this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
		this.onClickExpandTags = this.onClickExpandTags.bind(this);
		this.checkShelvesStatus = this.checkShelvesStatus.bind(this);
		this.buildRelatedBooks = this.buildRelatedBooks.bind(this);
	}

	componentDidMount() {
		BooksAPI.getAll().then(obj => {
			this.buildRelatedBooks(obj).then(res => {
				this.setState({
					myBooks: {
						currentlyReading: obj.filter(val => val.shelf === 'currentlyReading'),
						read: obj.filter(val => val.shelf === 'read'),
						wantToRead: obj.filter(val => val.shelf === 'wantToRead'),
						related: res && res.length ? res : []
					}
				});
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

	onChangeSearchInput(val, history) {
		if(val.length){
			BooksAPI.search(val, 30).then((res) => {
				this.setState({
					booksOnSearch: {
						query: val,
						books: res.length ? this.checkShelvesStatus(res) : []
					}
				});

				if(history.location.pathname !== '/search')
					history.push('/search');
			});
		} else {
			this.setState({
				booksOnSearch: {
					query: '',
					books: []
				}
			});
		}
	}

	onClickExpandTags() {
		this.setState({
			tagsOpened: this.state.tagsOpened ? false : true
		});
	}

	checkShelvesStatus(booksList) {
		const booksOnShelves = [
			...this.state.myBooks.currentlyReading,
			...this.state.myBooks.read,
			...this.state.myBooks.wantToRead
		];

		booksList.filter(bookOnList => {
			booksOnShelves.map(bookOnshelf => {
				if(bookOnList.id === bookOnshelf.id) {
					return bookOnList.shelf = bookOnshelf.shelf;
				}
			});
		});

		return booksList;
	}

	buildRelatedBooks(obj) {
		const relatedSubjects = RelatedBooks.favoriteBook(obj);

		return BooksAPI.search(relatedSubjects, 10).then(res => {
			res && res.length ? this.checkShelvesStatus(res) : [];
		});
	}

	render() {
		const { myBooks, booksOnSearch, tagsOpened } = this.state;

		return(
			<div>
				<Header
					keyOnSearch={booksOnSearch.query}
					onChangeSearchInput={this.onChangeSearchInput} />

				<main>
					<Route exact path="/" render={() => (
						<HomePage
							myBooks={myBooks}
							onChangeMoveShelf={this.onChangeMoveShelf}
							onChangeTagsInput={this.onChangeSearchInput}
							onClickExpandTags={this.onClickExpandTags}
							tagsOpened={tagsOpened} />
					)}/>

					<Route path="/search" render={() => (
						<SearchPage
							booksOnSearch={booksOnSearch}
							onChangeMoveShelf={this.onChangeMoveShelf}
							onChangeTagsInput={this.onChangeSearchInput}
							onClickExpandTags={this.onClickExpandTags}
							tagsOpened={tagsOpened}
							relatedBooks={myBooks.related} />
					)}/>
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
