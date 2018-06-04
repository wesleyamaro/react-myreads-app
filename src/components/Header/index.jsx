import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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

					<Search onChangeSearchInput={(e) => this.props.onChangeSearchInput(e, this.props.history)} />
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	onChangeSearchInput: PropTypes.func.isRequired
};

export default withRouter(Header);
