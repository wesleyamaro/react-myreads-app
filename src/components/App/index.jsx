import React, { Component } from 'react';
import Header from '../Header/';
import Home from '../../pages/Home/';
import Footer from '../Footer/';

class App extends Component {
	render() {
		return(
			<div>
				<Header />

				<main>
					<Home />
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
