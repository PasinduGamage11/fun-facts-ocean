// script.js
const oceanFacts = [
    "The ocean covers more than 70% of the Earth's surface.",
    "The Mariana Trench is the deepest part of the ocean, reaching depths of over 36,000 feet.",
    "Oceans produce over half of the world's oxygen and absorb 50 times more carbon dioxide than our atmosphere.",
    "The Great Barrier Reef is the largest living structure on Earth.",
    "More than 80% of the ocean is unexplored and unmapped."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * oceanFacts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.textContent = oceanFacts[randomIndex];
}

// Display an initial fact when the page loads
document.addEventListener('DOMContentLoaded', showRandomFact);
