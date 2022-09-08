
const item = document.querySelector('.item');
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', e => {
        event.preventDefault();
        e.target.classList.add('drag-over');
    });

    box.addEventListener('dragover', e => {
        e.preventDefault();
        e.target.classList.add('drag-over');
    });

    box.addEventListener('dragleave', e => {
        e.target.classList.remove('drag-over');
    });

    box.addEventListener('drop', e => {
        e.target.classList.remove('drag-over');

        const id = e.dataTransfer.getData('text/plain');
        const itemDraggable = document.getElementById(id);

        e.target.appendChild(itemDraggable);

        itemDraggable.classList.remove('hide');
    });
});

item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.id);

    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
  
});

// will make the item appears on the last div that it was inside 
// if dragged outside a draggable element
item.addEventListener('dragend', e => e.target.classList.remove('hide'));