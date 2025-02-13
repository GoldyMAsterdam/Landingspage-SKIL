const button = document.getElementById('js--menu');
const navigation = document.getElementById('js--navigation');
const body = document.getElementById('js--body');
const closeButton = document.getElementById('js--close');
const navLinks = document.querySelectorAll('.mainNavListItem > a');

button.onclick = function() {
    navigation.style.visibility = "visible";
    navigation.style.opacity = "1";
    body.style.overflow = "hidden"; 
    navigation.classList.add('active'); 
    closeButton.classList.add('active'); 
    button.classList.add('hidden'); 
}

closeButton.onclick = function() {
    navigation.style.visibility = "hidden";
    navigation.style.opacity = "0";
    body.style.overflow = "auto"; 
    navigation.classList.remove('active'); 
    closeButton.classList.remove('active'); 
    button.classList.remove('hidden'); 
}

navLinks.forEach(link => {
    link.onclick = function() {
        navigation.style.visibility = "hidden";
        navigation.style.opacity = "0";
        body.style.overflow = "auto"; 
        navigation.classList.remove('active'); 
        closeButton.classList.remove('active'); 
        button.classList.remove('hidden'); 
    }
});
