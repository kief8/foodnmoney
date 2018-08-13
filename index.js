/* When the user clicks the button, toggle between hiding & showing the menu */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* Close the menu if the user clicks outside */
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        
        var dropdown = document.getElementsByClassName("dropdown-conent");
        var i;
        for (i - 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}