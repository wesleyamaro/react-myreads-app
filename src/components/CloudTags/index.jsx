import React, { Component } from 'react';

import './index.sass';

class CloudTags extends Component {
	render() {
		return(
			<ul className="cloud-tags">
				<li className="cloud-tags--active"><a href="#">Art</a></li>
				<li><a href="#">Fitness</a></li>
				<li><a href="#">Technology</a></li>
				<li><a href="#">Drama</a></li>
				<li><a href="#">Romance</a></li>
				<li><a href="#">Music</a></li>
				<li><a href="#">Literary Fiction</a></li>
				<li><a href="#">Fiction</a></li>
				<li><a href="#">Travel</a></li>
				<li><a href="#">Games</a></li>
			</ul>
		);
	}
}

export default CloudTags;
