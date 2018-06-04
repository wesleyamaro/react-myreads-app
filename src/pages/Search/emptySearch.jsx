import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmptySearch extends Component {
	render() {
		const { query } = this.props;

		return(
			<div>
				<h1>No result(s) for "<span>{query}</span>"</h1>
				<ul className="search-page-results">
					<li><p>No results found.</p></li>
				</ul>
			</div>
		);
	}
}

EmptySearch.propTypes = {
	query: PropTypes.string.isRequired
};

export default EmptySearch;
