import { $ } from "@utils/dom/selectors.js";

let isDragging = false;
let startX;
let startScrollLeft;

// Evento para el inicio del arrastre (mousedown)
const dragStart = (e, carouselSelector) => {
    let carousel = $(carouselSelector);

    isDragging = true;
    carousel.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;

    // Enlazar eventos mousemove y mouseup
    //document.addEventListener('mousemove', dragging);
    //document.addEventListener('mouseup', dragStop);
}

// Evento para el arrastre (mousemove)
const dragging = (e, carouselSelector) => { 
    if (!isDragging) return;
    $(carouselSelector).scrollLeft = startScrollLeft - (e.pageX - startX);
}

// Evento para el fin del arrastre (mouseup)
const dragStop = (carouselSelector) => {
    isDragging = false;
    $(carouselSelector).classList.remove('dragging');

     // Enlazar eventos mousemove y mouseup
    //document.addEventListener('mousemove', dragging);
    //document.addEventListener('mouseup', dragStop);
}

$('#main').addEventListener('mousedown', (e) => { 
    const element = e.target;
    if (element.classList.contains('wrapper')) {
        dragStart(e, `.${element.classList[1]}`);
    }
});

$('#main').addEventListener('mousemove', (e) => {
    const element = e.target;
    if (element.classList.contains('wrapper')) { 
        dragging(e, `.${element.classList[1]}`);
    }
});

$('#main').addEventListener('mouseup', (e) => {
    const element = e.target;
    if (element.classList.contains('wrapper')) { 
        dragStop(`.${element.classList[1]}`);
    }
});

$('#main').addEventListener('mouseleave', (e) => {
    const element = e.target;
    if (element.classList.contains('wrapper')) { 
        dragStop(`.${element.classList[1]}`);
    }
});