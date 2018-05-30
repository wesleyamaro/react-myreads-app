import React, { Component } from 'react';
import Search from '../Search/';

import './index.sass';

class Header extends Component {
	render() {
		return(
			<header>
				<div className="wrapper">
					<h1>
						<a href="#">MyReads App</a>
					</h1>

					<Search />
				</div>
			</header>
		);
	}
}

export default Header;
