import React from 'react';
import DebounceInput from 'react-debounce-input';
import PropTypes from 'prop-types';

import './index.sass';

const Search = ({keyOnSearch, onChangeSearchInput}) => {
	return(
		<label className="search-label">
			<i className="icon-search" />
			<DebounceInput
				minLength={1}
				debounceTimeout={150}
				className="search-input large"
				placeholder="What are you looking for?"
				value={keyOnSearch}
				onChange={onChangeSearchInput} />
		</label>
	);
};

Search.propTypes = {
	keyOnSearch: PropTypes.string,
	onChangeSearchInput: PropTypes.func.isRequired
};

export default Search;
