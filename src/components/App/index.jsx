import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/';
import Footer from '../Footer/';
import Home from '../../pages/Home/';
import Search from '../../pages/Search/';

class App extends Component {
	render() {
		return(
			<div>
				<Header />

				<main>
					<Route exact path="/" render={() => (
						<Home />
					)}/>

					<Route path="/search" render={() => (
						<Search />
					)}/>
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
