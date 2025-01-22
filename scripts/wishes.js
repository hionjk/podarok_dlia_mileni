const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
	const target = e.target;
	const card = target.closest('.card');

	if(card && card.firstElementChild.className == 'card-hidden') {
		card.firstElementChild.remove();

		const textEl = card.lastElementChild;

		const text = textEl.textContent;
		textEl.textContent = '';

		let i = 0;
		let id;
		id = setInterval(() => {
			textEl.textContent += text[i];
			i++;
			if(!text[i]) {
				clearInterval(id);
			}
		}, 50)
	}
})

