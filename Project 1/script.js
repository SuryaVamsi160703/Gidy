function handleFormSubmit(event) {
    event.preventDefault();

    // Get the value from the textarea
    const entryText = document.getElementById('entryText').value;

    if (entryText.trim() === '') {
        alert('Please enter your thoughts or activities.');
        return;
    }
    const entryIndex = parseInt(document.getElementById('entryIndex').value);
    if (entryIndex >= 0) {
     
        editEntry(entryIndex, entryText);
    } else {
             saveEntry(entryText);
    }
    document.getElementById('entryText').value = '';
    document.getElementById('entryIndex').value = -1;
    displayEntries();
}

function saveEntry(entry) {
    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    entries.push(entry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));
}
function editEntry(index, updatedEntry) {
    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    entries[index] = updatedEntry;
    localStorage.setItem('journalEntries', JSON.stringify(entries));
}
function deleteEntry(index) {
    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    entries.splice(index, 1);
    localStorage.setItem('journalEntries', JSON.stringify(entries));

    displayEntries();
}

function displayEntries() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.innerHTML = '';

    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');

        // Entry text
        const entryText = document.createElement('span');
        entryText.textContent = entry;
        entryDiv.appendChild(entryText);

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', () => {
            editEntryClicked(index, entry);
        });
        entryDiv.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            deleteEntry(index);
        });
        entryDiv.appendChild(deleteButton);

        entriesContainer.appendChild(entryDiv);
    });
}

// Function to handle edit button click
function editEntryClicked(index, entryText) {
    // Set the entry text in the form for editing
    document.getElementById('entryText').value = entryText;
    // Store the index of the entry being edited
    document.getElementById('entryIndex').value = index;
}

// Initial function call to display existing entries on page load
displayEntries();

const form = document.getElementById('journalForm');
form.addEventListener('submit', handleFormSubmit);
