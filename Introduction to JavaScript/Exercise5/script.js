document.addEventListener('DOMContentLoaded', function() {
    
    const addParagraphButton = document.getElementById('add-paragraph');
    const removeParagraphButton = document.getElementById('remove-paragraph');
    const container = document.getElementById('container');

    
    addParagraphButton.addEventListener('click', function() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph.';
        newParagraph.classList.add('paragraph');

        newParagraph.addEventListener('click', function() {
            if (newParagraph.style.backgroundColor === 'lightblue') {
                newParagraph.style.backgroundColor = 'lightgrey';
            } else {
                newParagraph.style.backgroundColor = 'lightblue';
            }
        });
        container.appendChild(newParagraph);
    });

    removeParagraphButton.addEventListener('click', function() {
        const paragraphs = container.querySelectorAll('.paragraph');
        if (paragraphs.length > 0) {
            const lastParagraph = paragraphs[paragraphs.length - 1];
            container.removeChild(lastParagraph);
        }
    });
});
