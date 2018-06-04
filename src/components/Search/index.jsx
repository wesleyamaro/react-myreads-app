import React, { Component } from 'react';
import DebounceInput from 'react-debounce-input';
import PropTypes from 'prop-types';

import './index.sass';

class Search extends Component {
	render() {
		const {keyOnSearch, onChangeSearchInput} = this.props;

		return(
			<DebounceInput
				minLength={1}
				debounceTimeout={300}
				className="search-input large"
				placeholder="What are you looking for?"
				value={keyOnSearch}
				onChange={onChangeSearchInput} />
		);
	}
}

Search.propTypes = {
	keyOnSearch: PropTypes.string,
	onChangeSearchInput: PropTypes.func.isRequired
};

export default Search;
