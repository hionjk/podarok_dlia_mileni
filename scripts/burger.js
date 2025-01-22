const btn = document.querySelector('.burger__button');

const disableByBody = (e) => {
	const nav = document.querySelector('.burger__nav');
	if(e.target != btn && !e.target.closest('.burger__nav')) {
		nav.classList.add('burger__nav--disabled')
		document.body.removeEventListener('click', disableByBody)
	}
}

btn.onclick = () => {
	const nav = document.querySelector('.burger__nav');
	nav.classList.remove('burger__nav--disabled')


	document.body.addEventListener('click', disableByBody)
};