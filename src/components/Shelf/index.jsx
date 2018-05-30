import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.sass';

class Shelf extends Component {
	render() {
		return(
			<dl className="shelf">
				<dt>{this.props.title}</dt>
				<dd>
					<div className="book-wrapper">
						<figure>
							<img src="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" alt=" " />
						</figure>

						<div className="book-description">
							<p className="book-title">To Kill a Mockingbird</p>
							<p className="book-authors">Harper Lee</p>
						</div>
					</div>

					<div className="book-status">
						<select className="full">
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</dd>

				<dd>
					<div className="book-wrapper">
						<figure>
							<img src="http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api" alt=" " />
						</figure>

						<div className="book-description">
							<p className="book-title">Ender's Game</p>
							<p className="book-authors">Orson Scott Card</p>
						</div>
					</div>

					<div className="book-status">
						<select className="full">
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</dd>
			</dl>
		);
	}
}

Shelf.propTypes = {
	title: PropTypes.string.isRequired
};

export default Shelf;
