import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from './Search/';

import './index.sass';

class Header extends Component {
	render() {
		const { keyOnSearch, onChangeSearchInput, history } = this.props;

		return(
			<header>
				<div className="wrapper">
					<h1>
						<Link to="/"> <i className="icon-book-opened" /> MyReads App</Link>
					</h1>

					<Search
						keyOnSearch={keyOnSearch}
						onChangeSearchInput={(e) => onChangeSearchInput(e.target.value, history)} />
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	onChangeSearchInput: PropTypes.func.isRequired,
	history: PropTypes.object,
	keyOnSearch: PropTypes.string
};

export default withRouter(Header);
