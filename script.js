const emojiData = {
    faces: ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😇', '🥰', '😍', '🤩', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤔', '😐', '😑', '😶', '🙄', '😏', '😒', '😬', '😔', '😪', '😴', '😵', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😱', '😖', '😣', '😞', '😟', '😢', '😭', '😤', '😠', '😡', '🤬', '😈', '👿', '💀', '👻'],
    people: ['👶', '👧', '👦', '👩', '👨', '👩‍👩‍👧', '👩‍👩‍👦', '👨‍👩‍👧', '👨‍👩‍👦', '👩‍❤️‍👨', '👨‍❤️‍👨', '👩‍❤️‍👩', '👨‍🦰', '👩‍🦰', '👨‍🦳', '👩‍🦳', '👩‍🦲', '👨‍🦲', '👴', '👵', '🙍‍♂️', '🙍‍♀️', '🙎‍♂️', '🙎‍♀️', '💁‍♂️', '💁‍♀️', '🙅‍♂️', '🙅‍♀️', '🙆‍♂️', '🙆‍♀️', '👮‍♂️', '👮‍♀️', '👷‍♂️', '👷‍♀️', '💇‍♂️', '💇‍♀️', '💆‍♂️', '💆‍♀️', '🧖‍♂️', '🧖‍♀️', '👩‍⚕️', '👨‍⚕️', '👩‍🎓', '👨‍🎓', '👩‍🏫', '👨‍🏫', '👩‍💻', '👨‍💻', '👩‍🔧', '👨‍🔧', '👩‍🌾', '👨‍🌾', '👩‍🍳', '👨‍🍳', '👩‍🎤', '👨‍🎤', '👩‍✈️', '👨‍✈️', '👩‍🚀', '👨‍🚀', '👩‍⚖️', '👨‍⚖️'],
    celebration: ['🎉', '🎊', '🎈', '🥳', '🎂', '🍾', '🍷', '🍻', '🍹', '🍸', '🎁', '🎀', '✨', '🌟'],
    food: ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥭', '🥥', '🥝', '🍅', '🥕', '🌽', '🥔', '🍠', '🍣', '🍱', '🍜', '🍝', '🍕', '🍔', '🌭', '🍟', '🍗', '🍖', '🍳', '🍲', '🍥', '🍢', '🍧', '🍨', '🍩', '🎂', '🍪', '🍫', '🍬', '🍭', '🍮', '🍯', '🥧', '🍺', '🍻', '🥂', '🍷'],
    transport: ['🚗', '🚙', '🚌', '🚎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🏍️', '🛵', '🚲', '🛴', '🚏', '🚦', '🚧', '✈️', '🛩️', '🛫', '🛬', '🛳️', '⛴️', '🛥️', '🚤', '🛶', '⛵', '🏁'],
    symbols: ['❤️', '💔', '💕', '💞', '💓', '💗', '💖', '💘', '💌', '💋', '💍', '💎', '💡', '🔒', '🔑', '🔏', '🔓', '🔍', '🔎', '🧭', '🏳️‍🌈', '⚧', '⚡', '🔥', '✨', '🎇', '🎆', '💫', '🌈', '🌠', '🌀', '🌊', '🌌', '💭', '🗨️', '🧠', '🕳️', '🗡️', '⚔️', '🛡️', '🏅', '🏆', '🎖️', '🎗️', '🎟️', '🎫', '🏵️', '🎮', '🎲', '♟️', '🃏', '🀄', '🎴', '🧩', '🔮', '🧙‍♂️', '🧙‍♀️', '🧚‍♂️', '🧚‍♀️']
};

// Show faces category by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showCategory('faces');
});

function showCategory(category) {
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.innerHTML = ''; // Clear previous emojis

    emojiData[category].forEach(emoji => {
        const emojiDiv = document.createElement('div');
        emojiDiv.className = 'emoji';
        emojiDiv.innerText = emoji;
        emojiDiv.onclick = () => copyEmoji(emoji);
        emojiContainer.appendChild(emojiDiv);
    });
}

// Function to copy the emoji to clipboard
function copyEmoji(emoji) {
    const input = document.createElement('input');
    input.value = emoji;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    const copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    copyMessage.style.opacity = '1';
    copyMessage.style.top = '20px'; // Adjust position if needed

    // Hide the popup after 2 seconds
    setTimeout(() => {
        copyMessage.style.opacity = '0';
        copyMessage.style.top = '-50px'; // Move it up when hidden
        setTimeout(() => { copyMessage.style.display = 'none'; }, 500); // Hide after transition
    }, 2000);
}