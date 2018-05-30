import React, { Component } from 'react';

class Search extends Component {
	render() {
		return(
			<form>
				<input type="text" name="search" className="large" placeholder="What are you looking for?" />
			</form>
		);
	}
}

export default Search;
