const chatBox = document.getElementById('chatango-box');
const messageIcon = document.getElementById('message-icon');
const closeButton = document.getElementById('close-btn');

// Show chatbox when the icon is clicked
messageIcon.onclick = function() {
    chatBox.classList.toggle('show');
    if (chatBox.classList.contains('show')) {
        chatBox.style.display = 'block'; // Make it block before opacity transition
        setTimeout(() => {
            chatBox.style.opacity = 1; // Trigger opacity transition
            chatBox.style.transform = 'translateY(0)'; // Slide up into view
        }, 10); // Small delay to allow the display block to take effect
    } else {
        chatBox.style.opacity = 0; // Start fading out
        chatBox.style.transform = 'translateY(20px)'; // Slide down
        setTimeout(() => {
            chatBox.style.display = 'none'; // Hide after transition
        }, 300); // Match with transition duration
    }
};

// Close chatbox when close button is clicked
closeButton.onclick = function() {
    chatBox.classList.remove('show');
    chatBox.style.opacity = 0; // Start fading out
    chatBox.style.transform = 'translateY(20px)'; // Slide down
    setTimeout(() => {
        chatBox.style.display = 'none'; // Hide after transition
    }, 300); // Match with transition duration
};
