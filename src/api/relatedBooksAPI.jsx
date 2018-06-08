export const favoriteBook = (books) => {
	let favorite = [];

	const booksTitle = books
		.map(book => book.title.split(' ').filter(cat => cat.length > 3))
		.reduce((acc, current) => acc.concat(current), [])
		.reduce((all, name) => {
			if(typeof all[name] !== 'undefined'){
				all[name]++;
			} else {
				all[name]=1;
			}

			return all;
		}, {});

	for(const i in booksTitle){
		if(favorite.length) {
			if(favorite[0].qtde < booksTitle[i])
				favorite = [{ name: i, qtde: booksTitle[i] }];
		} else {
			favorite = [{ name: i, qtde: booksTitle[i] }];
		}
	}

	return favorite[0].name;
};
