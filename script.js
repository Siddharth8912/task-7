// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const userContainer = document.getElementById('user-container');
    const errorContainer = document.getElementById('error-container');
    const reloadButton = document.getElementById('reload-button');

    /**
     * Fetches user data from the API and displays it on the page.
     */
    const fetchAndDisplayUsers = async () => {
        // Clear previous results and errors, and show a loading message
        userContainer.innerHTML = '<p class="text-gray-500 col-span-full text-center">Loading users...</p>';
        errorContainer.textContent = '';
        // Disable the button during fetch to prevent multiple requests
        reloadButton.disabled = true;
        reloadButton.classList.add('opacity-50', 'cursor-not-allowed');

        try {
            // Fetch data from the JSONPlaceholder API
            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            // Check if the network request was successful
            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }

            // Parse the JSON data from the response
            const users = await response.json();
            
            // Clear the loading message
            userContainer.innerHTML = '';

            // Loop through each user and create a card to display their info
            users.forEach(user => {
                // Create a div element for the user card
                const userCard = document.createElement('div');
                userCard.className = 'bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300';

                // Format the address object into a readable string
                const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

                // Set the inner HTML of the card with user data
                userCard.innerHTML = `
                    <h2 class="text-2xl font-bold text-blue-800 mb-2">${user.name}</h2>
                    <p class="text-gray-600 mb-1">
                        <span class="font-semibold">Email:</span> ${user.email}
                    </p>
                    <p class="text-gray-600">
                        <span class="font-semibold">Address:</span> ${address}
                    </p>
                `;

                // Append the new card to the container
                userContainer.appendChild(userCard);
            });

        } catch (error) {
            // Handle any errors that occurred during the fetch process
            console.error('Fetch error:', error);
            userContainer.innerHTML = ''; // Clear any loading messages
            errorContainer.textContent = 'Failed to fetch user data. Please check your internet connection and try again.';
        } finally {
            // Re-enable the reload button after the fetch is complete (whether it succeeded or failed)
            reloadButton.disabled = false;
            reloadButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    };
    
    // --- HOW TO TEST NETWORK ERROR HANDLING ---
    // 1. Open your browser's Developer Tools (usually F12 or Ctrl+Shift+I).
    // 2. Go to the "Network" tab.
    // 3. Find the throttling dropdown (often says "No throttling" or "Online").
    // 4. Select "Offline".
    // 5. Click the "Reload Data" button on the page. You should see the error message.
    // 6. Remember to set it back to "Online" to restore connectivity.

    // Add event listener to the reload button
    reloadButton.addEventListener('click', fetchAndDisplayUsers);

    // Initial data fetch when the page loads
    fetchAndDisplayUsers();
});
