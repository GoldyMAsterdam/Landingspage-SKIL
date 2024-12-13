const button = document.getElementById('js--menu');
const navigation = document.getElementById('js--navigation');
const body = document.getElementById('js--body');
const closeButton = document.getElementById('js--close');
const navLinks = document.querySelectorAll('.mainNavListItem > a');

// Open menu
button.onclick = function() {
    navigation.style.visibility = "visible";
    navigation.style.opacity = "1";
    body.style.overflow = "hidden"; // Prevent scrolling
    navigation.classList.add('active'); // Add class to show the menu
    closeButton.classList.add('active'); // Show close button
    button.classList.add('hidden'); // Hide hamburger menu button
}

// Close menu
closeButton.onclick = function() {
    navigation.style.visibility = "hidden";
    navigation.style.opacity = "0";
    body.style.overflow = "auto"; // Enable scrolling
    navigation.classList.remove('active'); // Hide the menu
    closeButton.classList.remove('active'); // Hide close button
    button.classList.remove('hidden'); // Show hamburger menu button
}

// Close menu and enable scrolling when a link is clicked
navLinks.forEach(link => {
    link.onclick = function() {
        navigation.style.visibility = "hidden";
        navigation.style.opacity = "0";
        body.style.overflow = "auto"; // Enable scrolling
        navigation.classList.remove('active'); // Hide the menu
        closeButton.classList.remove('active'); // Hide close button
        button.classList.remove('hidden'); // Show hamburger menu button
    }
});