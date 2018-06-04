import React, { Component } from 'react';
import DebounceInput from 'react-debounce-input';
import PropTypes from 'prop-types';

class Search extends Component {
	render() {
		return(
			<form>
				<DebounceInput
					minLength={3}
					debounceTimeout={300}
					className="large"
					placeholder="What are you looking for?"
					onChange={this.props.onChangeSearchInput} />
			</form>
		);
	}
}

Search.propTypes = {
	onChangeSearchInput: PropTypes.func.isRequired
};

export default Search;
