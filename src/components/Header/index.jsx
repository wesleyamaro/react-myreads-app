import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/';

import './index.sass';

class Header extends Component {
	render() {
		return(
			<header>
				<div className="wrapper">
					<h1>
						<Link to="/">MyReads App</Link>
					</h1>

					<Search />
				</div>
			</header>
		);
	}
}

export default Header;
