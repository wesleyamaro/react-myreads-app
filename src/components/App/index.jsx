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
	}

	componentDidMount() {
		BooksAPI.getAll().then(obj => {
			const relatedSubjects = RelatedBooks.favouriteBook(obj);

			console.log('Keyword: ', relatedSubjects);

			BooksAPI.search(relatedSubjects, 10).then(res => {
				this.setState({
					myBooks: {
						currentlyReading: obj.filter(val => val.shelf === 'currentlyReading'),
						read: obj.filter(val => val.shelf === 'read'),
						wantToRead: obj.filter(val => val.shelf === 'wantToRead'),
						related: res.length ? res : []
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
		if(val.length >= 1){
			BooksAPI.search(val, 30).then((res) => {
				if(res !== undefined) {
					this.setState({
						booksOnSearch: {
							query: val,
							books: res.length ? res : ''
						}
					});

					if(history.location.pathname !== '/search')
						history.push('/search');
				}
			});
		}
	}

	onClickExpandTags() {
		const update = this.state.tagsOpened ? false : true;
		this.setState({
			tagsOpened: update
		});
	}

	render() {
		const { myBooks, booksOnSearch, tagsOpened } = this.state;

		return(
			<div>
				<Header keyOnSearch={booksOnSearch.query} onChangeSearchInput={this.onChangeSearchInput} />

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
