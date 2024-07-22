Project Description

Personalized Daily Journal:
Develop a webpage where users can log their daily thoughts or activities using HTML for forms and layout, CSS for styling the journal entries, and JavaScript for managing data storage locally (using local Storage) and displaying entries dynamically.
Basic Requirements
Content:
• Journal Entry Form: Create a form for users to enter their daily thoughts or activities.
• Journal Entries Display: A section to display saved journal entries. Design:
• Form Layout: Design a user-friendly form for entering journal entries. • Entries Layout: Style the displayed entries for readability and visual appeal. • Styling: Use CSS for overall layout, typography, and color schemes.
Interactivity:
• Data Storage: Use JavaScript to store and retrieve journal entries from local Storage.
• Dynamic Display: Display the saved entries dynamically as they are added. Technical Requirements:
• HTML: Use semantic HTML to structure the form and journal entries section. • CSS: Use CSS to style the form, entries, and overall layout.
• JavaScript: Implement local Storage to store and retrieve entries, and dynamically update the display.

Explanation:<br>
<br>
HTML Explanation:
Meta Tags: Standard meta tags for character set and viewport configuration.<br>
Title: Sets the title of the web page.<br>
Stylesheet: Links to an external CSS file (style.css) for styling.<br>
Body Content:<br>
Container: Contains the main content of the journal application.<br>
Form (journalForm):<br>
Textarea (entryText) for users to input their journal entries.<br>
Save button (submit) triggers form submission.<br>
Hidden input (entryIndex) stores the index of the entry being edited (-1 initially).<br>
HR: Horizontal line for visual separation.<br>
Div (entries): Placeholder for displaying saved journal entries.<br>
Script: Links to an external JavaScript file (script.js) for interactive functionality.<br>

CSS Explanation:<br>
Defines basic styling for the entire page, including fonts, colors, margins, and padding.<br>
Styles the container (div.container) where the journal form and entries are displayed.<br>
Customizes form elements (textarea, button) for consistent appearance and behavior.<br>

JavaScript Explanation:<br>
Form Submission Handling (handleFormSubmit):<br>
Prevents default form submission behavior.<br>
Retrieves the journal entry text and validates it.<br>
Determines whether to save a new entry or update an existing one based on entryIndex.<br>
Clears the form fields after submission and updates the displayed entries.<br>
CRUD Operations (saveEntry, editEntry, deleteEntry):<br>
saveEntry: Adds a new entry to local storage.<br>
editEntry: Updates an existing entry in local storage.<br>
deleteEntry: Removes an entry from local storage.<br>
Display Entries (displayEntries):<br>
Retrieves stored entries from local storage.<br>
Renders each entry as a styled div (entryDiv) with text content and associated edit and delete buttons.<br>
Edit Entry Click Handling (editEntryClicked):<br>
Loads the selected entry into the form for editing and stores its index in entryIndex.<br>
<br><br>
Initialization:
Calls displayEntries() initially to load any existing journal entries.<br>
Sets up form submission event listener (form.addEventListener('submit', handleFormSubmit)).<br>
