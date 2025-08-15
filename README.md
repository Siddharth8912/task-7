User Directory Web Application
This project is a simple yet stylish front-end application that fetches user data from a public API and displays it in a clean, responsive layout. It demonstrates the use of modern web technologies like the Fetch API, async/await, and CSS for creating dynamic and visually appealing user interfaces.

📸 Preview
✨ Features
Dynamic Data Fetching: Fetches a list of users from the JSONPlaceholder public API.

Responsive Design: The layout adapts to different screen sizes, from mobile phones to desktops.

Modern UI:

An animated, beautiful gradient background.

User cards with a 3D-like effect that lift up on hover.

Interactive Elements:

A "Reload Data" button to refetch the user list.

A spinning animation on the reload button while data is being fetched.

Error Handling: Displays a clear error message if the data fails to load, for example, when the user is offline.

🛠️ Technologies Used
HTML5: For the basic structure of the web page.

CSS3: For custom styling, animations (gradient background, button spin), and 3D card effects.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

JavaScript (ES6+): For fetching data, manipulating the DOM, and handling user events.

Google Fonts: For using the "Poppins" font to enhance typography.

🚀 Getting Started
No complex setup or installation is required to run this project.

Ensure you have all three files in the same folder:

index.html

style.css

script.js

Open the index.html file in any modern web browser (like Chrome, Firefox, or Edge).

📖 How to Use
The user data will be fetched and displayed automatically when the page loads.

Click the Reload Data button to fetch a fresh list of users.

To test the error handling:

Open your browser's Developer Tools (usually F12 or Ctrl+Shift+I).

Go to the "Network" tab.

Find the throttling dropdown (it often says "No throttling") and select "Offline".

Click the "Reload Data" button on the page. You will see the error message appear.

Remember to set the network back to "No throttling" to restore the connection.
