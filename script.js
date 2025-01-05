// Function to copy the emoji to clipboard
function copyEmoji(emoji) {
    // Create a temporary input to copy the emoji
    const input = document.createElement('input');
    input.value = emoji;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    // Show the "Copied" message
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 1500);  // Hide the message after 1.5 seconds
}
