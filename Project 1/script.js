// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const entryTitle = document.getElementById('entryTitle').value;
    const entryText = document.getElementById('entryText').value;
    const entryMood = document.getElementById('mood').value; // Capture selected mood

    if (entryTitle.trim() === '' || entryText.trim() === '') {
        alert('Please enter both a title and your thoughts or activities.');
        return;
    }

    const entryIndex = parseInt(document.getElementById('entryIndex').value);

    if (entryIndex >= 0) {
        editEntry(entryIndex, { title: entryTitle, entry: entryText, mood: entryMood });
    } else {
        saveEntry({ title: entryTitle, entry: entryText, mood: entryMood });
    }

    document.getElementById('entryTitle').value = '';
    document.getElementById('entryText').value = '';
    document.getElementById('entryIndex').value = -1;

    displayEntries();
}

// Function to save a new entry
function saveEntry(entry) {
    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    const timestamp = new Date().toLocaleString(); // Current timestamp as string
    entry.dateTime = timestamp;

    entries.push(entry);
    localStorage.setItem('journalEntries', JSON.stringify(entries));

    alert('Entry saved successfully!');
}

// Function to edit an existing entry
function editEntry(index, updatedEntry) {
    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    updatedEntry.dateTime = entries[index].dateTime; // Preserve original timestamp

    entries[index] = updatedEntry;
    localStorage.setItem('journalEntries', JSON.stringify(entries));
}

// Function to delete an entry
function deleteEntry(index) {
    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    entries.splice(index, 1);
    localStorage.setItem('journalEntries', JSON.stringify(entries));

    displayEntries();
}

// Function to display all entries on page load
function displayEntries() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.innerHTML = '';

    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');

        // Display entry title
        const entryTitle = document.createElement('h3');
        entryTitle.textContent = entry.title;
        entryDiv.appendChild(entryTitle);

        // Display entry timestamp
        const entryTimestamp = document.createElement('p');
        entryTimestamp.textContent = `Created On: ${entry.dateTime}`;
        entryDiv.appendChild(entryTimestamp);

        // Display entry mood
        const entryMood = document.createElement('p');
        entryMood.textContent = `Mood: ${entry.mood}`;
        entryDiv.appendChild(entryMood);

        // Edit button
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', () => {
            editEntryClicked(index, entry);
        });
        entryDiv.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-times"></i> Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            deleteEntry(index);
        });
        entryDiv.appendChild(deleteButton);

        entriesContainer.appendChild(entryDiv);
    });
}

function displayFilteredEntries(entries) {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.innerHTML = '';

    entries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');

        // Display entry title
        const entryTitle = document.createElement('h3');
        entryTitle.textContent = entry.title;
        entryDiv.appendChild(entryTitle);

        // Display entry timestamp
        const entryTimestamp = document.createElement('p');
        entryTimestamp.textContent = `Date and Time: ${entry.dateTime}`;
        entryDiv.appendChild(entryTimestamp);

        // Display entry mood
        const entryMood = document.createElement('p');
        entryMood.textContent = `Mood: ${entry.mood}`;
        entryDiv.appendChild(entryMood);

        // Edit button
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', () => {
            editEntryClicked(index, entry);
        });
        entryDiv.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-times"></i> Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            deleteEntry(index);
        });
        entryDiv.appendChild(deleteButton);

        entriesContainer.appendChild(entryDiv);
    });
}

// Function to handle edit entry button click
function editEntryClicked(index, entry) {
    document.getElementById('entryTitle').value = entry.title;
    document.getElementById('entryText').value = entry.entry;
    document.getElementById('entryIndex').value = index;
}

// Function to filter entries by title
function searchByTitle() {
    const searchTerm = document.getElementById('titleSearch').value.toLowerCase().trim();

    let filteredEntries = filterEntries(entry => {
        return entry.title.toLowerCase().includes(searchTerm);
    });

    displayFilteredEntries(filteredEntries);
}

// Function to filter entries by time (currently commented out)
/*
function searchByTime() {
    const searchTerm = document.getElementById('timeSearch').value.trim();

    let filteredEntries = filterEntries(entry => {
        return entry.dateTime.includes(searchTerm);
    });

    displayFilteredEntries(filteredEntries);
}
*/

// Helper function to filter entries based on a filter function
function filterEntries(filterFunction) {
    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    return entries.filter(filterFunction);
}

// Function to display filtered entries


// Initial function call to display existing entries on page load
displayEntries();

// Event listener for form submission
const form = document.getElementById('journalForm');
form.addEventListener('submit', handleFormSubmit);
