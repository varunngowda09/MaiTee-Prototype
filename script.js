// Select the toggle button and the body
const toggle = document.getElementById('vibeToggle');
const body = document.body;
const logo = document.querySelector('.logo');
const marquee = document.querySelector('.marquee-container');

// Listen for clicks on the toggle
toggle.addEventListener('change', () => {
    
    // Toggle the 'meme-mode' class on the body
    body.classList.toggle('meme-mode');

    // Fun text changes based on mode
    if (body.classList.contains('meme-mode')) {
        // Chaos Mode
        logo.textContent = "MAITEE_v2.exe";
        logo.style.fontFamily = "'Courier Prime', monospace";
    } else {
        // Classy Mode
        logo.textContent = "MAITEE.";
        logo.style.fontFamily = "'Oswald', sans-serif";
    }
});