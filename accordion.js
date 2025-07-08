function toggleVisibility(selectedElementId) {
    var ids = ['extraInfoShow', 'pubsShow', 'talksShow', 'teachingShow', 'awardsShow', 'projsShow', 'mediaShow', 'menteesShow', 'updatesShow'];

     ids.forEach(function(id) {
            var element = document.getElementById(id);
            if (element) {
                if (id === selectedElementId) {
                    element.style.display = element.style.display === "none" ? "block" : "none";
                    // Scroll to the element if it is being shown
                    if (element.style.display === "block") {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                } else {
                    element.style.display = "none";
                }
            }
        });
    }


// This function is used to handle navigation link clicks
function handleNavLinkClicks() {
    document.querySelectorAll('.nav-item.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor action

            var href = this.getAttribute('href').substring(1); // Extract the ID from the href attribute
            toggleVisibility(href);
        });
    });
}

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    handleNavLinkClicks(); // Set up event listeners for navigation links
});

function playAudio() {
        var audio = document.getElementById('audioPlayer');
        audio.play();
    }
