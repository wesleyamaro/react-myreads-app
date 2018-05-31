import React, { Component } from 'react';

import './emptyShelf.sass';

class EmptyShelf extends Component {
	render() {
		return(
			<li className="col-12 shelf-no-results">
				<p>You do not have any books here yet!</p>
			</li>
		);
	}
}

export default EmptyShelf;
