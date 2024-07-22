document.addEventListener('DOMContentLoaded', function () {
    displaySavedEntries();
});

function displaySavedEntries() {
    const savedEntriesContainer = document.getElementById('savedEntries');
    savedEntriesContainer.innerHTML = '';

    let entries = localStorage.getItem('journalEntries');
    entries = entries ? JSON.parse(entries) : [];

    if (entries.length === 0) {
        const noEntriesMessage = document.createElement('p');
        noEntriesMessage.textContent = 'No entries found.';
        savedEntriesContainer.appendChild(noEntriesMessage);
    } else {
        entries.forEach((entry, index) => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');

            const entryTitle = document.createElement('p');
            entryTitle.classList.add('entry-title');
            entryTitle.textContent = entry.title;
            entryDiv.appendChild(entryTitle);

            const entryText = document.createElement('p');
            entryText.textContent = entry.entry;
            entryDiv.appendChild(entryText);

            // Displaying formatted timestamp
            const entryTimestamp = document.createElement('p');
            entryTimestamp.textContent = formatTimestamp(entry.dateTime); // Use entry.dateTime
            entryTimestamp.classList.add('entry-timestamp');
            entryDiv.appendChild(entryTimestamp);

            // Displaying mood
            const entryMood = document.createElement('p');
            entryMood.textContent = `Mood: ${entry.mood}`;
            entryMood.classList.add('entry-mood');
            entryDiv.appendChild(entryMood);

            savedEntriesContainer.appendChild(entryDiv);
        });
    }
}


function formatTimestamp(timestamp) {
    const date = new Date(timestamp); // Assuming timestamp is in a valid format
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
