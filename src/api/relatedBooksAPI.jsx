export const favoriteBook = (books) => {
	const booksTitle = [];
	books.map(book => {
		if(book.title) {
			const titles = book.title.split(' ').filter(cat => cat.length > 3);
			booksTitle.push(titles);
		}
	});

	const newArr = [];
	booksTitle.map(cat => {
		if(newArr.length) {
			const result = newArr.filter(item => item.name === cat);
			result.length ? result[0].qtde += 1 : newArr.push({ name: cat, qtde: 1 });
		} else {
			newArr.push({ name: cat, qtde: 1 });
		}
	});

	let mainlyCategories = [];
	newArr.map(item => {
		if(mainlyCategories.length) {
			const result = mainlyCategories.filter(a => a.qtde < item.qtde);
			if(result.length)
				mainlyCategories = item;
		} else {
			mainlyCategories.push({ name: item.name, qtde: item.qtde });
		}
	});

	return mainlyCategories[0].name[0];
};
