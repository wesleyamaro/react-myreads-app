import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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
		const {onChangeTagsInput, history, keyOnSearch} = this.props;
		const {tags} = this.state;

		return(
			<ul className="cloud-tags">
				{
					tags.map((tag, i) => {
						return(
							<li
								className={keyOnSearch && keyOnSearch === tag ? 'cloud-tags--active' : ''}
								key={i}
								onClick={() => onChangeTagsInput(tag, history)}>{tag}
							</li>
						);
					})
				}
			</ul>
		);
	}
}

CloudTags.propTypes = {
	history: PropTypes.object,
	keyOnSearch: PropTypes.string,
	onChangeTagsInput: PropTypes.func.isRequired,
};

export default withRouter(CloudTags);
