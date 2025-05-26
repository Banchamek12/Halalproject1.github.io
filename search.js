const allowedWords = ["hello", "world", "language", "english"];
card.innerHTML = `<strong>${word}</strong> → ${translation}`;
const languageName = document.getElementById('languageSelect').options[document.getElementById('languageSelect').selectedIndex].text;
card.innerHTML = `<strong>${word}</strong> in ${languageName} → ${translation}`;

