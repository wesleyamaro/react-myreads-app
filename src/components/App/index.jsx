import React, { Component } from 'react';
import Header from '../Header/';
import Footer from '../Footer/';
import CloudTags from '../CloudTags';
import Shelf from '../Shelf';

class App extends Component {
	render() {
		return(
			<div>
				<Header />

				<main>
					<div className="wrapper">
						<CloudTags />

						<Shelf title="Currently reading" />
						<Shelf title="Want to read" />
						<Shelf title="Have read" />
					</div>
				</main>

				<Footer />
			</div>
		);
	}
}

export default App;
