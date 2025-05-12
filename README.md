
# Project Title

To-Do-List-App

I developed a Todo App using Vanilla JavaScript, CSS3, and DOM manipulation, with data persistence handled via the Web Storage API (localStorage).  Although there is no backend, the app mimics a full REST-like experience with complete CRUD functionality, custom validation, and real-time feedback via toast notifications.


## 🔧 Tech Used:
Client:

JavaScript (ES6+) – For logic, event handling, and direct DOM manipulation.

HTML5 & CSS3 – For responsive and clean UI design.

Server:

Database: Web Storage API – For persistent local data storage (no server required).


## Features

📥 GET (Read) Features
Users can fetch and view all existing to-do tasks from localStorage.

If no tasks are found, an empty list view is displayed.

If something goes wrong while fetching, an error component with a toast message is shown.

➕ POST (Create) Features
Users can enter a new to-do task via an input form.

Validation:

Input must not be empty.

Task length must be ≤ 40 characters, else an info toast is shown.

Users cannot add more than 5 tasks.

Users can clear input before submitting.

On successful submission:

The task is stored in localStorage.

A success toast is displayed.

✏️ PUT (Update) Features
Users can edit existing to-do tasks inline or through an edit form.

Validation:

The task name must be unique and not already exist.

Input must not be empty.

The max length is 40 characters; otherwise, an info toast is shown.

After a successful update:

A success toast is displayed.

The updated task is visually highlighted for a short time.

🗑️ DELETE (Remove) Features
Users can delete any to-do task.



