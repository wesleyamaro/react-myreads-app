import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as TagsAPI from '../../api/tagsAPI';

import './index.sass';

class CloudTags extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tags: [],
			tagsOpened: false
		};

		this.OnClickSeeMore = this.OnClickSeeMore.bind(this);
	}

	componentDidMount() {
		this.setState({
			tags: TagsAPI.getAll()
		});
	}

	OnClickSeeMore() {
		const update = this.state.tagsOpened ? false : true;
		this.setState({
			tagsOpened: update
		});
	}

	render() {
		const {onChangeTagsInput, history, keyOnSearch} = this.props;
		const {tags, tagsOpened } = this.state;

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

				<i className="icon-see-more" onClick={() => this.OnClickSeeMore()}>{tagsOpened ? '-' : '+'}</i>
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
