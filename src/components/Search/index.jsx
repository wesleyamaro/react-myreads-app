import React, { Component } from 'react';
import DebounceInput from 'react-debounce-input';
import PropTypes from 'prop-types';

import './index.sass';

class Search extends Component {
	render() {
		return(
			<DebounceInput
				minLength={3}
				debounceTimeout={300}
				className="search-input large"
				placeholder="What are you looking for?"
				onChange={this.props.onChangeSearchInput} />
		);
	}
}

Search.propTypes = {
	onChangeSearchInput: PropTypes.func.isRequired
};

export default Search;
