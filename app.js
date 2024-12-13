const button = document.getElementById('js--menu');
const navigation = document.getElementById('js--navigation');
const body = document.getElementById('js--body');

button.onclick = function() {
    navigation.style.visibility = "visible";
    navigation.style.opacity = "1"; 
    body.style.overflow = "hidden";
}