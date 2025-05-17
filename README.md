# To-Do-App

[To Do App](photo/image-1.png)

To-Do-List-App

I developed a Todo App using Vanilla JavaScript (ES6), HTML5, CSS3, and DOM manipulation, with data persistence handled via the Web Storage API (localStorage). Although there is no backend, the app mimics a full REST-like experience with complete CRUD functionality, custom validation, and real-time feedback via alert notifications.

## 🔧 Tech Used:

JavaScript (ES6+) – For logic, event handling, and DOM manipulation.

HTML5 & CSS3 – For responsive and clean UI design.

Web Storage API – For persistent local data storage (no server required).

## Features

📥 GET (Read) Features
Users can fetch and view all existing todo tasks from `localStorage`.
[ All existing todo tasks from `localStorage`](photo/image-2.png)
If no tasks are found, an empty list view is displayed.
[If no tasks are found, an empty list view](photo/image-3.png)

➕ POST (Create) Features
Users can enter a new todo task via an input form. //pic

Validation:

Input must not be empty.
[Input must not be empty](photo/image-4.png)

Task length must be `≤ 40` characters, else an info alert is shown.
[Input must not be over 40+ charcters](photo/image-5.png)

On successful submission:

The task is stored in localStorage and shown in the pending task. //pic

After clicking the checkbox, a pending task should be transferred to a completed task. //before clicking pic after clicking pic

✏️ PUT (Update) Features
Users can edit existing pending tasks by clicking edit (✏️) icon and through an edit input field. //pic

Validation:

Input must not be empty. //pic

Task length must be `≤ 40` characters, else an info alert is shown.

After a successful update:

The updated task is visually highlighted with bold text.

🗑️ DELETE (Remove) Features
Users can delete any todo task from the completed task by clicking delete (🗑️) icon.
[before remove task from prnding and completed task](photo/image-7.png)

After successful deletion:
[after remove task from prnding and completed task](photo/image-8.png)
The task is removed from localStorage as well.
