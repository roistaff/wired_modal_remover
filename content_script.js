const target = document.body;
const observer = new MutationObserver(records =>{
if(target.classList.contains('tp-modal-open')){
	document.documentElement.classList.remove('tp-scroll-prevented');
        document.body.classList.remove('tp-body-scroll-prevented');
        document.body.classList.remove('tp-modal-open');
	const element1 = document.querySelectorAll("div.tp-modal,div.tp-active,div.tp-backdrop");
	element1.forEach(element => {
	element.remove();
	});
	console.log("fucksociety");
}
})
observer.observe(target, {
	 attributes: true
})
