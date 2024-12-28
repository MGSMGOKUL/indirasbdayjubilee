document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.getElementById('animatedText');
    const phrases = ["My Love", "My Sunshine", "My Everything"];
    let index = 0;

    const typeText = (text, callback) => {
        let charIndex = 0;
        animatedText.textContent = ""; // Clear the content before typing
        animatedText.style.width = "0"; // Reset the width for typing animation

        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                animatedText.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(callback, 1000); // Wait 1 second before starting the next phrase
            }
        }, 100); // Typing speed (100ms per character)
    };

    const startTypingAnimation = () => {
        typeText(phrases[index], () => {
            index = (index + 1) % phrases.length; // Loop through phrases
            startTypingAnimation(); // Start typing the next phrase
        });
    };

    startTypingAnimation(); // Start the animation loop
});
