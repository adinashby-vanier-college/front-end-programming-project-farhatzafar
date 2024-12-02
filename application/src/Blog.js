//Read more button for text on Blog page
const btn = document.querySelector('read-more-btn');

const text = document.querySelector('.read-more-text');

const contain = document.querySelector('.blogssection');

contain.addEventListener('click', e => {

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = e.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More...') ? "Read Less..." : "Read More...";

})