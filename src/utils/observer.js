async function createObserver({ parentNode = null } = {}) {
    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let item = entry.target;
                let imageUrl = item.attributes[1].nodeValue;

                let card = parentNode.querySelector(`${item.localName}[data-movie-title="${item.attributes[0].nodeValue}"]`);
                let cardImage = card.shadowRoot.querySelector('.card-image img');
    
                cardImage.setAttribute('src', imageUrl);

                observer.unobserve(card);
            }
        });
    }
    
    let options = {
        root: parentNode,
        rootMargin: "0px",
        threshold: 0.5,
    };
    
    const observer = new IntersectionObserver(callback, options);

    parentNode.querySelectorAll('movie-card').forEach(card => observer.observe(card));
}

export default createObserver;