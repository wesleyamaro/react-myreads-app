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
		const {onChangeTagsInput, history, keyOnSearch, onClickExpandTags, tagsOpened} = this.props;
		const {tags } = this.state;

		return(
			<ul className={`cloud-tags ${tagsOpened ? 'opened' : ''}`}>
				{
					tags.map((tag, i) => {
						return(
							<li
								className={keyOnSearch && keyOnSearch.toLowerCase() === tag.toLowerCase() ? 'cloud-tags--active' : ''}
								key={i}
								onClick={() => onChangeTagsInput(tag, history)}>{tag}
							</li>
						);
					})
				}

				{
					tagsOpened ? (
						<i className="icon-arrow-up" onClick={() => onClickExpandTags()} />
					): (
						<i className="icon-arrow-down" onClick={() => onClickExpandTags()} />
					)
				}
			</ul>
		);
	}
}

CloudTags.propTypes = {
	history: PropTypes.object,
	keyOnSearch: PropTypes.string,
	onChangeTagsInput: PropTypes.func.isRequired,
	onClickExpandTags: PropTypes.func.isRequired,
	tagsOpened: PropTypes.bool.isRequired
};

export default withRouter(CloudTags);
