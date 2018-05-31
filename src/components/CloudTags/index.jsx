import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.sass';

class CloudTags extends Component {
	render() {
		return(
			<ul className="cloud-tags">
				{
					this.props.tags.map((tag, i) => {
						return(
							<li key={i}><a href="#">{tag}</a></li>
						);
					})
				}
			</ul>
		);
	}
}

CloudTags.propTypes = {
	tags: PropTypes.array.isRequired
};

export default CloudTags;
