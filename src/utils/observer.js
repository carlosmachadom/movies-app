async function callback(entries) {
    entries.forEach(element => {
        console.log(element);
        /* if (element.getAttribute('data-movie-src')) {
            console.log(true);
            //element.shadowRoot().querySelector('.movie-card .card-image img').src = element.getAttribute('data-movie-src');
        } */        
    });
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver(callback, options);

export default observer;