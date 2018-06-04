import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as TagsAPI from '../../api/tagsAPI';

import './index.sass';

class CloudTags extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tags: []
		};
	}

	componentDidMount() {
		this.setState({
			tags: TagsAPI.getAll()
		});
	}

	render() {
		return(
			<ul className="cloud-tags">
				{
					this.state.tags.map((tag, i) => {
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

};

export default CloudTags;
